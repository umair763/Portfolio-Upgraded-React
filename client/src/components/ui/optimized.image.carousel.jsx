import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function OptimizedCarousel({ images = [], alt = "Project preview" }) {
  const safeImages = images?.length ? images : [];
  const [active, setActive] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0]));
  const [loadingStates, setLoadingStates] = useState({});
  const imageRefs = useRef({});
  const preloadTimeoutRef = useRef(null);

  // Preload adjacent images for smooth experience
  useEffect(() => {
    const preloadAdjacent = () => {
      const prevIndex = clampIndex(active - 1, safeImages.length);
      const nextIndex = clampIndex(active + 1, safeImages.length);
      const adjacentIndices = [prevIndex, nextIndex];

      adjacentIndices.forEach((index) => {
        if (!loadedImages.has(index) && !loadingStates[index]) {
          setLoadingStates((prev) => ({ ...prev, [index]: true }));
          
          const img = new Image();
          img.src = safeImages[index];
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, index]));
            setLoadingStates((prev) => ({ ...prev, [index]: false }));
          };
          img.onerror = () => {
            setLoadingStates((prev) => ({ ...prev, [index]: false }));
          };
        }
      });
    };

    // Debounce preloading to avoid overwhelming the browser
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current);
    }
    preloadTimeoutRef.current = setTimeout(preloadAdjacent, 200);

    return () => {
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current);
      }
    };
  }, [active, safeImages, loadedImages, loadingStates]);

  const go = useCallback(
    (dir) => {
      setActive((prev) => clampIndex(prev + dir, safeImages.length));
    },
    [safeImages.length],
  );

  const handleImageLoad = useCallback((index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
    setLoadingStates((prev) => ({ ...prev, [index]: false }));
  }, []);

  const handleImageError = useCallback((index) => {
    setLoadingStates((prev) => ({ ...prev, [index]: false }));
  }, []);

  // Animate image transition with GSAP
  useEffect(() => {
    if (imageRefs.current[active]) {
      gsap.fromTo(
        imageRefs.current[active],
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [active]);

  if (!safeImages.length) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950/90 ring-1 ring-white/10">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-[70%] w-[86%] rounded-[18px] bg-gradient-to-br from-slate-800/70 via-slate-900/60 to-slate-800/70 ring-1 ring-white/10 animate-pulse" />
        </div>
      </div>
    );
  }

  const activeSrc = safeImages[active];
  const isLoaded = loadedImages.has(active);
  const isLoading = loadingStates[active];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.28),transparent_60%),radial-gradient(circle_at_90%_40%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(14,165,233,0.20),transparent_55%)]" />

      <div className="relative h-full w-full p-1">
        <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-slate-900/80 to-slate-950/80 ring-1 ring-white/10">
          
          {/* Skeleton loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50">
              <div className="w-full h-full bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-800/30 animate-pulse" />
            </div>
          )}

          {/* Main image */}
          <img
            ref={(el) => { imageRefs.current[active] = el; }}
            src={activeSrc}
            alt={alt}
            className={`h-full w-full object-contain transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            draggable={false}
            onLoad={() => handleImageLoad(active)}
            onError={() => handleImageError(active)}
          />

          {/* Navigation buttons */}
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous image"
            disabled={safeImages.length <= 1}
          >
            <ChevronLeft className="h-5 w-5 text-black cursor-pointer" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next image"
            disabled={safeImages.length <= 1}
          >
            <ChevronRight className="h-5 w-5 text-black cursor-pointer" />
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md ring-1 ring-white/10">
            {safeImages.map((_, i) => (
              <button
                key={`${safeImages[i]}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 transition-all duration-200 ${
                  i === active 
                    ? "w-6 rounded-full bg-white/90" 
                    : loadedImages.has(i)
                      ? "w-2 rounded-full bg-white/55 hover:bg-white/70"
                      : "w-2 rounded-full bg-white/35 hover:bg-white/50"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 backdrop-blur-md">
                <div className="h-2 w-2 animate-ping rounded-full bg-blue-400" />
                <span className="text-xs text-white/80">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { OptimizedCarousel };