import React, { useMemo, useState, useCallback } from "react";
import { Check, ChevronRight } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
        <div className="h-10 w-10 rounded-lg bg-sky-50 grid place-items-center text-sky-700">
          <span className="text-xl leading-none">💻</span>
        </div>
      );
    }

    if (typeof icon === "string") {
      return (
        <div className="h-10 w-10 overflow-hidden rounded-lg bg-white/40 grid place-items-center">
          <img
            src={icon}
            alt="service icon"
            className="h-8 w-auto object-contain"
          />
        </div>
      );
    }

    return <div className="h-10 w-10 grid place-items-center">{icon}</div>;
  };

  const [hovered, setHovered] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = useMemo(() => {
    const base = {
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: { value: hovered ? 60 : 18, density: { enable: false } },
        color: { value: "#000000" },
        size: { value: hovered ? 16 : 10 },
        opacity: { value: 1 },
        move: {
          enable: hovered,
          speed: hovered ? 0.9 : 0.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
        shape: { type: "circle" },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: hovered, mode: "repulse" },
          onClick: { enable: false },
          resize: true,
        },
        modes: {
          repulse: { distance: 80, duration: 0.6 },
        },
      },
    };

    return base;
  }, [hovered]);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative max-w-3xl rounded-2xl border p-8 transition-all duration-300 ${className} ${
        hovered
          ? "border-sky-300/60 bg-sky-50/80 shadow-[0_20px_60px_rgba(2,6,23,0.18)] cursor-pointer"
          : "border-slate-200/60 bg-gradient-to-br from-slate-50 to-slate-100 shadow-sm"
      }`}
      style={
        hovered
          ? {
              // dotted CSS grid becomes visible on hover only
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.06) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }
          : undefined
      }
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
        {hovered ? (
          <div className="absolute inset-0 opacity-100">
            <Particles init={particlesInit} options={particlesOptions} />
          </div>
        ) : null}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200/30" />
      </div>

      {/* Centered small view shown when hovered: only icon + title */}

      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-4 flex items-center justify-center">
          {/* larger icon in center */}
          <div className="h-20 w-20 rounded-lg bg-white/10 grid place-items-center text-slate-900">
            {typeof icon === "string" ? (
              <img
                src={icon}
                alt="icon"
                className="h-12 w-auto object-contain"
              />
            ) : icon ? (
              icon
            ) : (
              <span className="h-12 w-12 flex items-center justify-center text-slate-900">
                <span className="text-5xl">💻</span>
              </span>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900">{title}</h3>

        <a
          href={ctaHref}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-sky-800 to-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(14,165,233,0.12)] transition-all duration-250"
        >
          {ctaLabel}
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      {/* Main content hidden while hovered */}
      <div
        className={`relative z-10 flex flex-col gap-6 md:flex-row md:items-start transition-all duration-300 ${hovered ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="flex-shrink-0">{renderIcon()}</div>

        <div className="min-w-0">
          <h3 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            {title}
          </h3>

          {description ? (
            <p className="mt-4 text-sm text-slate-600">{description}</p>
          ) : null}

          {Array.isArray(checkmark) && checkmark.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {checkmark.map((line, i) => (
                <li key={`${line}-${i}`} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-700">{line}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6">
            <a
              href={ctaHref}
              className={`inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-250 ${hovered ? "bg-gradient-to-br from-sky-800 to-sky-700 shadow-[0_8px_30px_rgba(14,165,233,0.12)]" : "bg-sky-700 hover:bg-sky-800"}`}
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
