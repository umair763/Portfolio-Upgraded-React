import React from "react";

export const Waves = ({ className = '' }) => {
  return (
    <>
      {/* Animated SVG Waves at Bottom */}
      <div className={`absolute left-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none select-none ${className}`}>
        <div className="relative w-full h-[110px] -mb-4">
          <svg
            className="absolute left-0 top-0 w-full h-full"
            viewBox="0 0 1920 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 70 Q320 100 480 80 Q640 60 960 70 Q1280 80 1600 60 Q1760 50 1920 70V110H0V70Z"
              fill="#e4d5b7"
              fillOpacity="0.74"
            />
          </svg>
          {/* Wave 1 */}
          <svg
            className="absolute left-0 top-0 w-full h-full wave-anim-1"
            viewBox="0 0 1920 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 60 Q240 120 480 90 Q720 60 960 60 Q1200 60 1440 90 Q1680 120 1920 60V110H0V60Z"
              fill="#e4d5b7"
              fillOpacity="0.35"
            />
          </svg>
          {/* Wave 2 */}
          <svg
            className="absolute left-0 top-0 w-full h-full wave-anim-2"
            viewBox="0 0 1920 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80 Q320 40 640 90 Q960 140 1280 80 Q1600 20 1920 80V110H0V80Z"
              fill="#e4d5b7"
              fillOpacity="0.48"
            />
          </svg>
          {/* Wave 3 */}
          <svg
            className="absolute left-0 top-0 w-full h-full wave-anim-3"
            viewBox="0 0 1920 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100 Q240 60 480 110 Q720 160 960 100 Q1200 40 1440 110 Q1680 180 1920 100V110H0V100Z"
              fill="#e4d5b7"
              fillOpacity="0.22"
            />
          </svg>
          {/* Wave 4 */}
          <svg
            className="absolute left-0 top-0 w-full h-full wave-anim-4"
            viewBox="0 0 1920 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 90 Q320 110 640 70 Q960 30 1280 90 Q1600 150 1920 90V110H0V90Z"
              fill="#e4d5b7"
              fillOpacity="0.19"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
