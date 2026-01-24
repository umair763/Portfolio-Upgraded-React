import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Award,
  BarChart,
  Code,
  Film,
  GraduationCap,
  Globe,
  HeartHandshake,
  Laptop,
  Medal,
  Rocket,
  School,
  Shield,
} from "lucide-react";

const ACTIVE_COLOR = "#2563eb"; // blue-600
const UNITS_PER_YEAR = 10; // 9 small + 1 major

const MILESTONES = [
  {
    at: 2017.5,
    label: "Jun 2017",
    title: "Metric (General Science)",
    description:
      "Fazaia Inter College\nIslamabad, Pakistan",
    icon: School,
    color: "rgb(71, 85, 105)",
  },
  {
    at: 2021.6,
    label: "Aug 2021",
    title: "FSc (ICS)",
    description:
      "Fazaia Inter College\nIslamabad, Pakistan",
    icon: School,
    color: "rgb(8, 145, 178)",
  },
  {
    at: 2022.2,
    label: "2nd Semester, 2022",
    title: "Merit-Based Scholarship — 3rd Position",
    description:
      "Bahria University\nAcademic Excellence.",
    icon: Award,
    color: "rgb(217, 119, 6)",
  },
  {
    at: 2023.3,
    label: "3rd Semester, 2023",
    title: "Certificate of Appreciation — 2nd Position",
    description:
      "Department of Computer Science, Bahria University\nProject Gala — DSA course.",
    icon: Medal,
    color: "rgb(147, 51, 234)",
  },
  {
    at: 2026,
    label: "Graduated in 2026",
    title: "Bachelors of Science in Information Technology",
    description:
      "Bahria University Islamabad Campus\nIslamabad, Pakistan",
    icon: GraduationCap,
    color: "rgb(15, 118, 110)",
  },
  {
    at: 2025.2,
    label: "Mar 2025",
    title: "Heart2Heart",
    description:
      "Freelance — h2hcourses.com\nReact.js, Tailwind CSS v4, Firestore\n• Developed a responsive course platform.",
    icon: HeartHandshake,
    color: "rgb(219, 39, 119)",
  },
  {
    at: 2025.6,
    label: "Aug 2025",
    title: "AI-Powered Multi-Platform Management & Insights",
    description:
      "Final Year Project — socialsight.me \nBuilt a centralized social media management platform.",
    icon: BarChart,
    color: "rgb(37, 99, 235)",
  },
  {
    at: 2025.8,
    label: "8th Semester, 2025",
    title: "Merit-Based Laptop Award",
    description:
      "Government of Pakistan\nMerit-Based Eligibility\n• Received laptop based on academic excellence and merit.",
    icon: Laptop,
    color: "rgb(22, 163, 74)",
  },
  {
    at: 2025.9,
    label: "Nov 2025",
    title: "theothersfarhan",
    description:
      "Freelance — theothers-farhan.com\nNext.js 16, React 19, Tailwind CSS v4, Framer Motion\n• Developed a professional videographer portfolio.",
    icon: Film,
    color: "rgb(234, 88, 12)",
  },
];

export const JourneyCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [direction, setDirection] = useState("right");
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Keep navigation consistent: always ascending by date.
  const milestones = useMemo(() => {
    return [...MILESTONES].sort((a, b) => a.at - b.at);
  }, []);

  const { startYear, endYear } = useMemo(() => {
    const ats = milestones.map((m) => m.at);
    return {
      startYear: Math.floor(Math.min(...ats)),
      endYear: Math.ceil(Math.max(...ats)),
    };
  }, [milestones]);

  const milestonesWithUnits = useMemo(() => {
    return milestones.map((m) => ({
      ...m,
      unit: (m.at - startYear) * UNITS_PER_YEAR,
    }));
  }, [milestones, startYear]);

  const milestoneKeyToIndexIn2025 = useMemo(() => {
    const map = new Map();
    let count = 0;
    for (const m of milestonesWithUnits) {
      if (Math.floor(m.at) !== 2025) continue;
      map.set(`${m.at}-${m.title}`, count);
      count += 1;
    }
    return map;
  }, [milestonesWithUnits]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => setViewportWidth(el.getBoundingClientRect().width);
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const id = window.setInterval(() => {
      setDirection("right");
      setCurrentIndex((idx) => {
        if (idx >= milestones.length - 1) return idx;
        return idx + 1;
      });
    }, 4500);

    return () => window.clearInterval(id);
  }, [isPaused]);

  const totalYears = endYear - startYear;
  const totalUnits = totalYears * UNITS_PER_YEAR;

  const currentMilestone = milestonesWithUnits[currentIndex];
  const activeUnit = currentMilestone.unit;

  const unitWidth =
    viewportWidth && viewportWidth < 640
      ? 10
      : viewportWidth && viewportWidth < 1024
        ? 12
        : 14;

  // Align tick centers to the fixed center needle.
  // With paddingLeft = (viewport/2 - unitWidth/2), unit=0 tick center is exactly at viewport center.
  const paddingPx = viewportWidth ? viewportWidth / 2 - unitWidth / 2 : 0;
  const translateX = -(activeUnit * unitWidth);

  const goPrev = () => {
    if (currentIndex <= 0) return;
    setDirection("left");
    setCurrentIndex((idx) => Math.max(0, idx - 1));
  };

  const goNext = () => {
    if (currentIndex >= milestones.length - 1) return;
    setDirection("right");
    setCurrentIndex((idx) => Math.min(milestones.length - 1, idx + 1));
  };

  const goTo = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black/90 mb-3">
            My Journey
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            A timeline of my learning, projects, and major milestones.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/15 transition flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed border border-black/10"
            aria-label="Previous milestone"
          >
            <ChevronLeft size={20} className="text-black/70" />
          </button>
          <button
            onClick={() => setIsPaused((v) => !v)}
            className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/15 transition flex items-center justify-center border border-black/10"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <Play size={18} className="text-black/70 ml-0.5" />
            ) : (
              <Pause size={18} className="text-black/70" />
            )}
          </button>
          <button
            onClick={goNext}
            disabled={currentIndex === milestones.length - 1}
            className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/15 transition flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed border border-black/10"
            aria-label="Next milestone"
          >
            <ChevronRight size={20} className="text-black/70" />
          </button>
          <span className="ml-2 text-sm font-semibold text-black/70">
            {currentIndex + 1} / {milestones.length}
          </span>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {milestones.map((m, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={`${m.at}-${m.title}`}
                onClick={() => goTo(index)}
                className={
                  "relative h-3 w-3 rounded-full bg-black/20 hover:bg-black/30 transition" +
                  (isActive ? " bg-transparent" : "")
                }
                aria-label={`Go to milestone ${index + 1}`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: currentMilestone.color }}
                  />
                )}
                {isActive && (
                  <span
                    className="absolute -inset-3 rounded-full border"
                    style={{ borderColor: currentMilestone.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div ref={viewportRef} className="relative mx-auto max-w-6xl overflow-hidden">
          <div className="relative h-[210px]">
            {/* Baseline */}
            <div className="absolute left-0 right-0 top-[110px] h-px bg-black/25" />

            {/* Fixed center needle (accurate pointer) */}
            <div
              className="absolute left-1/2 top-[34px] bottom-[48px] w-px -translate-x-1/2 pointer-events-none"
              style={{ backgroundColor: currentMilestone.color, opacity: 0.28 }}
            />
            <div
              className="absolute left-1/2 top-[44px] h-[78px] w-[2px] -translate-x-1/2 pointer-events-none rounded-full"
              style={{ backgroundColor: currentMilestone.color, opacity: 0.92 }}
            />
            <div
              className="absolute left-1/2 top-[110px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: `10px solid ${currentMilestone.color}`,
                filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.12))",
              }}
            />
            <div
              className="absolute left-1/2 top-[110px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
              style={{
                width: 10,
                height: 10,
                backgroundColor: currentMilestone.color,
                boxShadow: "0 10px 18px rgba(0,0,0,0.14)",
              }}
            />

            {/* Sliding track */}
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{
                transform: `translateX(${translateX}px)`,
                paddingLeft: paddingPx,
                paddingRight: paddingPx,
              }}
            >
              {/* Ticks */}
              {Array.from({ length: totalUnits + 1 }).map((_, unit) => {
                const isMajor = unit % UNITS_PER_YEAR === 0;
                const tickHeight = isMajor ? 26 : 14;
                const tickWidth = isMajor ? 2 : 1;
                const tickColor = isMajor ? "rgba(0,0,0,0.28)" : "rgba(0,0,0,0.18)";

                return (
                  <div
                    key={unit}
                    className="relative"
                    style={{ width: unitWidth, height: 210, flex: "0 0 auto" }}
                  >
                    <div
                      className="absolute left-1/2 -translate-x-1/2 rounded-full"
                      style={{
                        top: 110 - tickHeight,
                        width: tickWidth,
                        height: tickHeight,
                        backgroundColor: tickColor,
                      }}
                    />
                  </div>
                );
              })}

              {/* Milestones */}
              {milestonesWithUnits.map((milestone, index) => {
                const isActive = index === currentIndex;
                // Absolute children are positioned relative to the track's padding box.
                // Add paddingPx so milestones align with the flex-rendered tick centers.
                const x = paddingPx + milestone.unit * unitWidth + unitWidth / 2;
                const milestoneKey = `${milestone.at}-${milestone.title}`;

                const year = Math.floor(milestone.at);
                const prevYear = index > 0 ? Math.floor(milestonesWithUnits[index - 1].at) : null;
                const showYearLabel = index === 0 || year !== prevYear;

                const isIn2025 = Math.floor(milestone.at) === 2025;
                // For 2025 only: bottom, top, bottom, top...
                const indexIn2025 = isIn2025 ? milestoneKeyToIndexIn2025.get(milestoneKey) ?? 0 : 0;
                const showIconTop = isIn2025 && indexIn2025 % 2 === 1;
                // Give more space from the scale for readability.
                const iconTopPx = showIconTop ? 60 : 156;
                const activeNudge = showIconTop ? "-translate-y-2" : "translate-y-2";

                return (
                  <div
                    key={milestoneKey}
                    className="absolute"
                    style={{ left: x, top: 0, transform: "translateX(-50%)" }}
                  >
                    {/* Label */}
                    {showYearLabel && (
                      <button
                        type="button"
                        onClick={() => goTo(index)}
                        className={
                          "absolute left-1/2 top-5 -translate-x-1/2 font-bold tracking-[0.18em] whitespace-nowrap transition-all duration-500 " +
                          (isActive ? "scale-110" : "")
                        }
                        style={{
                          color: milestone.color,
                          opacity: isActive ? 1 : 0.62,
                          fontSize: viewportWidth && viewportWidth < 640 ? 11 : 13,
                        }}
                        aria-label={`Select ${milestone.label}`}
                      >
                        {year}
                      </button>
                    )}

                    {/* Baseline dot */}
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className={
                        "absolute left-1/2 top-[110px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 " +
                        (isActive ? "w-3 h-3" : "w-2 h-2")
                      }
                      style={{
                        backgroundColor: milestone.color,
                        opacity: isActive ? 1 : 0.26,
                      }}
                      aria-label={`Go to ${milestone.title}`}
                    />

                    {/* Icon */}
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className={
                        "absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] " +
                        (isActive
                          ? `scale-125 ${activeNudge}`
                          : "scale-100")
                      }
                      style={{ top: iconTopPx }}
                      aria-label={`Go to ${milestone.title}`}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{
                          color: milestone.color,
                          opacity: isActive ? 1 : 0.62,
                          filter: isActive
                            ? "drop-shadow(0 10px 18px rgba(0,0,0,0.14))"
                            : "none",
                        }}
                      >
                        {React.createElement(milestone.icon, {
                          size: isActive ? 40 : 24,
                          strokeWidth: isActive ? 2.2 : 2,
                        })}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="relative h-48 overflow-hidden mt-2 mb-10">
          <div
            key={currentIndex}
            className={
              "absolute inset-0 " +
              (direction === "right" ? "animate-journeySlideInRight" : "animate-journeySlideInLeft")
            }
          >
            <div className="max-w-xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_22px_50px_rgba(0,0,0,0.16)] px-7 py-7 md:px-10 md:py-8">
                <div
                  className="text-center text-xs font-extrabold tracking-[0.22em] mb-2"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  {currentMilestone.label}
                </div>
                <h3
                  className="text-2xl md:text-3xl font-extrabold text-center mb-3"
                  style={{ color: currentMilestone.color }}
                >
                  {currentMilestone.title}
                </h3>
                <p className="text-base md:text-lg text-black/70 text-center leading-relaxed whitespace-pre-line">
                  {currentMilestone.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-black/70 max-w-xl mx-auto">
            The journey continues — always learning, building, and leveling up.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes journeySlideInRight {
          from { transform: translateX(42px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes journeySlideInLeft {
          from { transform: translateX(-42px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-journeySlideInRight { animation: journeySlideInRight 420ms cubic-bezier(.22,1,.36,1); }
        .animate-journeySlideInLeft { animation: journeySlideInLeft 420ms cubic-bezier(.22,1,.36,1); }
      `}</style>
    </section>
  );
};
