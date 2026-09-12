/**
 * Image optimization utilities for responsive loading and caching
 */

/**
 * Generate responsive image sources with different quality levels
 * This is a placeholder for when you implement CDN or responsive image generation
 */
export function generateResponsiveSources(imageUrl, sizes = [480, 768, 1024, 1200]) {
  // If using a CDN like Cloudinary, you would generate URLs like:
  // return sizes.map(size => `${cdnUrl}/w_${size}/${imageUrl} ${size}w`).join(', ');
  
  // For local images, we return the original URL (actual implementation would require image processing)
  return imageUrl;
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute() {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
}

/**
 * Calculate appropriate image quality based on device pixel ratio
 */
export function getOptimalQuality() {
  const dpr = window.devicePixelRatio || 1;
  
  // Return appropriate quality based on DPR
  if (dpr <= 1) return 80; // Standard displays
  if (dpr <= 2) return 75;  // Retina displays
  return 70;                 // High-DPI displays
}

/**
 * Check if browser supports modern image formats
 */
export function supportsWebP() {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  if (canvas.getContext && canvas.getContext('2d')) {
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}

/**
 * Image loading strategy based on network conditions
 */
export function getLoadingStrategy() {
  if (typeof window === 'undefined' || !window.navigator) {
    return 'balanced';
  }

  const connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
  
  if (!connection) return 'balanced';
  
  // Slow connection - prioritize speed over quality
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    return 'speed';
  }
  
  // Fast connection - prioritize quality
  if (connection.effectiveType === '4g') {
    return 'quality';
  }
  
  return 'balanced';
}

/**
 * Debounce function for performance optimization
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll/resize events
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Generate blur placeholder (for blur-up technique)
 * This is a simplified version - real implementation would use tiny base64 images
 */
export function generateBlurPlaceholder(width = 10, height = 10) {
  // Generate a simple SVG blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1e293b"/>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Preload critical images
 */
export function preloadCriticalImages(imageUrls, priority = 'high') {
  if (typeof window === 'undefined') return;
  
  imageUrls.forEach((url, index) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    
    if (index === 0 && priority === 'high') {
      link.fetchPriority = 'high';
    } else {
      link.fetchPriority = 'low';
    }
    
    document.head.appendChild(link);
  });
}

/**
 * Clear image cache (useful for debugging or forced refresh)
 */
export function clearImageCache() {
  if (typeof window === 'undefined') return;
  
  // Force reload of images by adding timestamp
  const images = document.querySelectorAll('img[data-cache-bypass]');
  images.forEach(img => {
    const src = img.src;
    if (src) {
      img.src = src + (src.includes('?') ? '&' : '?') + 't=' + Date.now();
    }
  });
}