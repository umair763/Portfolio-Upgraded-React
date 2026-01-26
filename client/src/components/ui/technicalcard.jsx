import React, { useMemo } from "react";
import {
  Accessibility,
  Gauge,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  SiAstro,
  SiCss3,
  SiDrizzle,
  SiHono,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiHtml5,
  SiPython,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";

const DEFAULT_ITEMS = [
  {
    id: "html",
    labelLines: ["HTML", "5"],
    Icon: SiHtml5,
    value: 0.88,
    bubbleBg: "#E44D26",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "css",
    labelLines: ["CSS", "3"],
    Icon: SiCss3,
    value: 0.88,
    bubbleBg: "#4C1D95",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "js",
    labelLines: ["JavaScript"],
    Icon: SiJavascript,
    value: 0.72,
    bubbleBg: "#F7DF1E",
    bubbleFg: "#111827",
  },
  {
    id: "python",
    labelLines: ["Python"],
    Icon: SiPython,
    value: 0.8,
    bubbleBg: "#3776AB",
    bubbleFg: "#FFD43B",
  },
  {
    id: "sql",
    labelLines: ["SQL"],
    Icon: SiPostgresql,
    value: 0.90,
    bubbleBg: "#336791",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "bootstrap",
    labelLines: ["Bootstrap"],
    Icon: SiBootstrap,
    value: 0.78,
    bubbleBg: "#7952B3",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "tailwind",
    labelLines: ["Tailwind", "CSS"],
    Icon: SiTailwindcss,
    value: 0.78,
    bubbleBg: "#0F172A",
    bubbleFg: "#38BDF8",
  },
  {
    id: "react",
    labelLines: ["React"],
    Icon: SiReact,
    value: 0.78,
    bubbleBg: "#1F2937",
    bubbleFg: "#61DAFB",
  },
  {
    id: "node",
    labelLines: ["Node.js"],
    Icon: SiNodedotjs,
    value: 0.74,
    bubbleBg: "#3C873A",
    bubbleFg: "#0B1220",
  },
  {
    id: "express",
    labelLines: ["Express"],
    Icon: SiExpress,
    value: 0.68,
    bubbleBg: "#222222",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "mongodb",
    labelLines: ["MongoDB"],
    Icon: SiMongodb,
    value: 0.65,
    bubbleBg: "#13AA52",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "firebase",
    labelLines: ["Firebase"],
    Icon: SiFirebase,
    value: 0.77,
    bubbleBg: "#FFCA28",
    bubbleFg: "#222222",
  },
  {
    id: "azure",
    labelLines: ["Azure"],
      Icon: FaMicrosoft,
    value: 0.55,
    bubbleBg: "#0078D4",
    bubbleFg: "#FFFFFF",
  },
  {
    id: "aws",
    labelLines: ["AWS"],
    Icon: FaAws,
    value: 0.55,
    bubbleBg: "#232F3E",
    bubbleFg: "#FF9900",
  },
];

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

function polarToPercent({ angleRad, radius, size }) {
  const cx = size / 2;
  const cy = size / 2;
  const x = cx + Math.cos(angleRad) * radius;
  const y = cy + Math.sin(angleRad) * radius;
  return {
    left: `${(x / size) * 100}%`,
    top: `${(y / size) * 100}%`,
    cos: Math.cos(angleRad),
    sin: Math.sin(angleRad),
  };
}

function polygonPoints({ values, angles, radius }) {
  const cx = 200;
  const cy = 200;
  return values
    .map((v, i) => {
      const r = clamp01(v) * radius;
      const x = cx + Math.cos(angles[i]) * r;
      const y = cy + Math.sin(angles[i]) * r;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export const TechnicalCard = ({ items = DEFAULT_ITEMS, title }) => {
  const size = 400;
  const center = size / 2;
  const axisCount = Math.max(3, items.length);
  const angles = useMemo(() => {
    const step = (Math.PI * 2) / axisCount;
    const start = (-90 * Math.PI) / 180;
    return Array.from({ length: axisCount }, (_, i) => start + i * step);
  }, [axisCount]);

  const plotRadius = 135;
  const iconRadius = 172;
  const connectInner = 138;
  const connectOuter = 155;

  const values = useMemo(() => {
    const v = items.map((it) => (typeof it.value === "number" ? it.value : 0.65));
    while (v.length < axisCount) v.push(0.65);
    return v.slice(0, axisCount);
  }, [items, axisCount]);

  const gridLevels = 7;
  const rings = useMemo(() => {
    return Array.from({ length: gridLevels }, (_, i) => ((i + 1) / gridLevels) * plotRadius);
  }, []);

  const polygon = useMemo(
    () => polygonPoints({ values, angles, radius: plotRadius }),
    [values, angles]
  );

  const renderedTitle = title ?? (
    <>
      Technical &amp; Dev
      <br />
      Skills
    </>
  );

  return (
    <section
      className="w-full rounded-[28px] bg-[#d9b99b]/90 ring-1 ring-white/25"
    >
      <div className="px-8 pt-10 pb-10">
        <h2 className="text-center font-extrabold tracking-tight text-[#0B1220] text-[40px] leading-[0.98] md:text-[52px]">
          {renderedTitle}
        </h2>

        <div className="mt-10">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative mx-auto aspect-square w-full max-w-[460px] overflow-visible">
              {/* Radar + connectors */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="tcGlow" cx="50%" cy="50%" r="65%">
                    <stop offset="0%" stopColor="#0B1220" stopOpacity="0.0" />
                    <stop offset="100%" stopColor="#0B1220" stopOpacity="0.18" />
                  </radialGradient>
                </defs>

                {/* subtle vignette */}
                <circle cx={center} cy={center} r={190} fill="url(#tcGlow)" />

                {/* rings */}
                {rings.map((r) => (
                  <circle
                    key={`ring-${r}`}
                    cx={center}
                    cy={center}
                    r={r}
                    fill="none"
                    stroke="#0B3E5A"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                  />
                ))}

                {/* spokes */}
                {angles.map((a, idx) => {
                  const x2 = center + Math.cos(a) * plotRadius;
                  const y2 = center + Math.sin(a) * plotRadius;
                  return (
                    <line
                      key={`spoke-${idx}`}
                      x1={center}
                      y1={center}
                      x2={x2}
                      y2={y2}
                      stroke="#0B3E5A"
                      strokeOpacity="0.22"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* stronger outer ring */}
                <circle
                  cx={center}
                  cy={center}
                  r={plotRadius}
                  fill="none"
                  stroke="#0B3E5A"
                  strokeOpacity="0.28"
                  strokeWidth="1"
                />

                {/* connectors to icon bubbles */}
                {angles.map((a, idx) => {
                  const x1 = center + Math.cos(a) * connectInner;
                  const y1 = center + Math.sin(a) * connectInner;
                  const x2 = center + Math.cos(a) * connectOuter;
                  const y2 = center + Math.sin(a) * connectOuter;
                  return (
                    <line
                      key={`conn-${idx}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#0B3E5A"
                      strokeOpacity="0.35"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* data polygon */}
                <polygon
                  points={polygon}
                  fill="#0B5A8A"
                  fillOpacity="0.18"
                  stroke="#0B5A8A"
                  strokeOpacity="0.85"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />

                {/* center dot */}
                <circle cx={center} cy={center} r="3" fill="#0B3E5A" fillOpacity="0.85" />
              </svg>

              {/* Icon ring */}
              {items.map((item, i) => {
                const angle = angles[i % angles.length];
                const pos = polarToPercent({ angleRad: angle, radius: iconRadius, size });
                const isTop = pos.sin < -0.2;
                const isBottom = pos.sin > 0.2;
                const isLeft = pos.cos < -0.2;
                const isRight = pos.cos > 0.2;

                const labelPlacement = isTop
                  ? "bottom-full mb-2"
                  : isBottom
                  ? "top-full mt-2"
                  : isRight
                  ? "left-full ml-3"
                  : isLeft
                  ? "right-full mr-3"
                  : "top-full mt-2";

                const labelAlign = isRight
                  ? "text-left"
                  : isLeft
                  ? "text-right"
                  : "text-center";

                const BubbleIcon = item.Icon ?? Sparkles;

                return (
                  <div
                    key={item.id ?? `${item.labelLines?.join("-")}-${i}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: pos.left, top: pos.top }}
                  >
                    <div className="relative">
                      <div
                        className={`absolute ${labelPlacement} ${labelAlign} select-none text-[12px] leading-[1.05] text-[#0B1220]`}
                        style={{
                          textShadow: "0 1px 0 rgba(255,255,255,0.35)",
                          opacity: 0.95,
                        }}
                      >
                        {(item.labelLines ?? [""]).map((line, idx) => (
                          <div key={idx} className="whitespace-nowrap">
                            {line}
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        aria-label={(item.labelLines ?? []).join(" ")}
                        className="group grid place-items-center rounded-full ring-1 ring-black/15 shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-out hover:scale-[1.18] active:scale-[1.08] cursor-pointer"
                        style={{
                          width: "clamp(34px, 5vw, 44px)",
                          height: "clamp(34px, 5vw, 44px)",
                          background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.30), rgba(255,255,255,0) 58%), ${
                            item.bubbleBg ?? "#0B1220"
                          }`,
                        }}
                      >
                        <span
                          className="grid place-items-center"
                          style={{
                            color: item.bubbleFg ?? "#FFFFFF",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
                          }}
                        >
                          <BubbleIcon
                            className="h-[18px] w-[18px] md:h-[20px] md:w-[20px]"
                            strokeWidth={item.Icon === Zap ? 2.2 : undefined}
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
