import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

/**
 * Reusable ServiceCard
 * Props:
 * - icon: React node or string (image src)
 * - title: string
 * - description: string
 * - checkmark: array of short strings (each renders a single-line bullet)
 * - ctaLabel: string (optional)
 * - ctaHref: string (optional, defaults to '/contact')
 */
export const ServiceCard = ({
  icon = null,
  title = "Service Title",
  description = "",
  checkmark = [],
  ctaLabel = "Start Your Project",
  ctaHref = "/contact",
  className = "",
}) => {
  const renderIcon = () => {
    if (!icon) {
      return (
        <div className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-lg bg-sky-50 grid place-items-center text-sky-700">
          <span className="text-sm sm:text-lg md:text-xl leading-none">💻</span>
        </div>
      );
    }

    if (typeof icon === "string") {
      return (
        <div className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 overflow-hidden rounded-lg bg-white/40 grid place-items-center">
          <img
            src={icon}
            alt="service icon"
            className="h-5 sm:h-7 md:h-8 w-auto object-contain"
          />
        </div>
      );
    }

    return (
      <div className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 grid place-items-center">
        {icon}
      </div>
    );
  };

  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative max-w-3xl rounded-2xl border p-4 sm:p-6 md:p-8 transition-all duration-300 h-full flex flex-col justify-between ${className} ${
        hovered
          ? "border-sky-300/60 shadow-[0_20px_60px_rgba(2,6,23,0.18)] cursor-pointer"
          : "border-slate-200/60 shadow-sm"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-slate-200/30" />

      {/* Centered small view shown when hovered: only icon + title */}

      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-3 sm:mb-4 flex items-center justify-center">
          {/* larger icon in center */}
          <div className="h-12 w-12 sm:h-20 sm:w-20 rounded-lg bg-white/10 grid place-items-center text-slate-900">
            {typeof icon === "string" ? (
              <img
                src={icon}
                alt="icon"
                className="h-8 sm:h-12 w-auto object-contain"
              />
            ) : icon ? (
              icon
            ) : (
              <span className="h-12 w-12 flex items-center justify-center text-slate-900">
                <span className="text-4xl sm:text-5xl">💻</span>
              </span>
            )}
          </div>
        </div>

        <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900">{title}</h3>

        <a
          href={ctaHref}
          className="mt-4 sm:mt-6 inline-flex items-center gap-2 sm:gap-3 rounded-full bg-gradient-to-br from-sky-800 to-sky-700 px-4 sm:px-6 py-2 sm:py-3 text-[11px] sm:text-sm font-semibold text-white shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all duration-250"
        >
          {ctaLabel}
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      {/* Main content hidden while hovered */}
      <div
        className={`relative z-10 flex flex-col gap-3 sm:gap-6 md:flex-row md:items-start h-full flex-1 justify-between transition-all duration-300 ${hovered ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="flex-shrink-0">{renderIcon()}</div>

        <div className="min-w-0 flex flex-col flex-1 h-full justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
              {title}
            </h3>

            {description ? (
              <p
                className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed"
              >
                {description}
              </p>
            ) : null}

            {Array.isArray(checkmark) && checkmark.length > 0 ? (
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                {checkmark.map((line, i) => (
                  <li key={`${line}-${i}`} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="mt-4 sm:mt-6">
            <a
              href={ctaHref}
              className={`inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-250 ${hovered ? "bg-gradient-to-br from-sky-800 to-sky-700 shadow-[0_8px_30px_rgba(14,165,233,0.12)]" : "bg-sky-700 hover:bg-sky-800"}`}
            >
              {ctaLabel}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
