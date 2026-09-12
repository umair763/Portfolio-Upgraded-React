import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { generateBlurPlaceholder, throttle, getLoadingStrategy } from "../../utils/image.utils";

// Utility function for safe index clamping
function clampIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

// Custom hook for Intersection Observer-based lazy loading
function useIntersectionObserver(ref, threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once observed, we can disconnect
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      { threshold, rootMargin: '50px' }
    );

    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
}

// Custom hook for image preloading with priority handling
function useImagePreloader(images, currentIndex, isVisible) {
  const [loadedImages, setLoadingState] = useState(new Set());
  const [loadingStates, setLoadingStates] = useState({});
  const preloadQueueRef = useRef([]);
  const isPreloadingRef = useRef(false);
  const loadingStrategy = getLoadingStrategy();

  useEffect(() => {
    if (!isVisible || !images.length) return;

    // Always load current image with high priority
    const currentIndexSafe = clampIndex(currentIndex, images.length);
    if (!loadedImages.has(currentIndexSafe) && !loadingStates[currentIndexSafe]) {
      preloadImage(images[currentIndexSafe], currentIndexSafe, true);
    }

    // Adjust preloading strategy based on network conditions
    const preloadCount = loadingStrategy === 'speed' ? 1 : 2;
    
    // Preload adjacent images with lower priority
    const adjacentIndices = [];
    for (let i = 1; i <= preloadCount; i++) {
      adjacentIndices.push(clampIndex(currentIndexSafe + i, images.length));
      adjacentIndices.push(clampIndex(currentIndexSafe - i, images.length));
    }

    adjacentIndices.forEach((index) => {
      if (!loadedImages.has(index) && !loadingStates[index]) {
        preloadQueueRef.current.push({ src: images[index], index, priority: false });
      }
    });

    // Process preload queue
    processPreloadQueue();

    return () => {
      preloadQueueRef.current = [];
    };
  }, [currentIndex, images, isVisible, loadedImages, loadingStates, loadingStrategy]);

  const preloadImage = useCallback((src, index, priority = false) => {
    setLoadingStates((prev) => ({ ...prev, [index]: true }));

    const img = new Image();
    
    if (priority) {
      img.fetchPriority = 'high';
    } else {
      img.fetchPriority = 'low';
    }

    img.src = src;

    img.onload = () => {
      setLoadingState((prev) => new Set([...prev, index]));
      setLoadingStates((prev) => ({ ...prev, [index]: false }));
    };

    img.onerror = () => {
      console.warn(`Failed to load image at index ${index}`);
      setLoadingStates((prev) => ({ ...prev, [index]: false }));
    };

    return img;
  }, []);

  const processPreloadQueue = useCallback(() => {
    if (isPreloadingRef.current || preloadQueueRef.current.length === 0) return;

    isPreloadingRef.current = true;

    const processNext = () => {
      if (preloadQueueRef.current.length === 0) {
        isPreloadingRef.current = false;
        return;
      }

      const { src, index, priority } = preloadQueueRef.current.shift();
      preloadImage(src, index, priority);

      // Add delay based on loading strategy
      const delay = loadingStrategy === 'speed' ? 200 : 100;
      setTimeout(processNext, delay);
    };

    processNext();
  }, [preloadImage, loadingStrategy]);

  return { loadedImages, loadingStates };
}

// Optimized carousel component with comprehensive loading strategy
function OptimizedCarousel({ images = [], alt = "Project preview" }) {
  const safeImages = images?.length ? images : [];
  const [active, setActive] = useState(0);
  const [hasError, setHasError] = useState(false);
  const carouselRef = useRef(null);
  const imageRefs = useRef({});
  
  // Intersection Observer for viewport detection
  const isVisible = useIntersectionObserver(carouselRef, 0.1);
  
  // Image preloading with priority handling
  const { loadedImages, loadingStates } = useImagePreloader(safeImages, active, isVisible);

  const go = useCallback(
    (dir) => {
      setHasError(false);
      setActive((prev) => clampIndex(prev + dir, safeImages.length));
    },
    [safeImages.length],
  );

  const goToIndex = useCallback((index) => {
    setHasError(false);
    setActive(index);
  }, []);

  const handleImageError = useCallback(() => {
    setHasError(true);
    console.error(`Failed to load image: ${safeImages[active]}`);
  }, [active, safeImages]);

  if (!safeImages.length) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950/90 ring-1 ring-white/10">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-[70%] w-[86%] rounded-[18px] bg-gradient-to-br from-slate-800/70 via-slate-900/60 to-slate-800/70 ring-1 ring-white/10" />
        </div>
      </div>
    );
  }

  const activeSrc = safeImages[active];
  const isLoaded = loadedImages.has(active);
  const isLoading = loadingStates[active];
  const blurPlaceholder = generateBlurPlaceholder();

  return (
    <div 
      ref={carouselRef}
      className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.28),transparent_60%),radial-gradient(circle_at_90%_40%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(14,165,233,0.20),transparent_55%)]" />

      <div className="relative h-full w-full p-1">
        <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-slate-900/80 to-slate-950/80 ring-1 ring-white/10">
          
          {/* Blur-up placeholder */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
              <img 
                src={blurPlaceholder}
                alt=""
                className="w-full h-full object-cover filter blur-md scale-110"
                style={{ opacity: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-800/30 animate-pulse" />
            </div>
          )}

          {/* Error state */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
              <div className="text-center p-6">
                <div className="text-white/60 text-sm mb-2">Image unavailable</div>
                <button
                  onClick={() => setHasError(false)}
                  className="text-blue-400 text-xs hover:text-blue-300 underline"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Main image with optimized loading */}
          {isVisible && !hasError && (
            <img
              ref={(el) => { imageRefs.current[active] = el; }}
              src={activeSrc}
              alt={alt}
              className={`h-full w-full object-contain transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={active === 0 ? "eager" : "lazy"}
              fetchPriority={active === 0 ? "high" : "auto"}
              draggable={false}
              onError={handleImageError}
              style={{ 
                willChange: 'opacity',
                backfaceVisibility: 'hidden',
                imageRendering: 'auto'
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {/* Navigation buttons */}
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Previous image"
            disabled={safeImages.length <= 1}
          >
            <ChevronLeft className="h-5 w-5 text-black cursor-pointer" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Next image"
            disabled={safeImages.length <= 1}
          >
            <ChevronRight className="h-5 w-5 text-black cursor-pointer" />
          </button>

          {/* Pagination dots with loading state indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md ring-1 ring-white/10 z-10">
            {safeImages.map((_, i) => {
              const isDotActive = i === active;
              const isDotLoaded = loadedImages.has(i);
              const isDotLoading = loadingStates[i];

              return (
                <button
                  key={`${safeImages[i]}-${i}`}
                  type="button"
                  onClick={() => goToIndex(i)}
                  className={`h-2 transition-all duration-200 relative ${
                    isDotActive 
                      ? "w-6 rounded-full bg-white/90" 
                      : isDotLoaded
                        ? "w-2 rounded-full bg-white/55 hover:bg-white/70"
                        : "w-2 rounded-full bg-white/35 hover:bg-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                >
                  {isDotLoading && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Small loading indicator for better UX */}
          {isLoading && isLoaded === false && !hasError && (
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md">
                <div className="h-2 w-2 animate-ping rounded-full bg-blue-400" />
                <span className="text-xs text-white/80 font-medium">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { OptimizedCarousel };