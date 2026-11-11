import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  BarChart,
  BookOpen,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Medal,
  Pause,
  Play,
  Rocket,
  School,
  Server,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const ACTIVE_COLOR = "#2563eb"; // blue-600
const UNITS_PER_YEAR = 10; // 9 small + 1 major

const MILESTONES = [
  {
    at: 2021.65,
    label: "Aug 2021",
    title: "FSc in Computer Science (ICS)",
    description:
      "Fazaia Inter College\nGraduated ICS and embarked on my software development and computing journey.",
    icon: School,
    color: "rgb(79, 70, 229)",
  },
  {
    at: 2022.45,
    label: "June 2022",
    title: "Merit-Based Scholarship — 3rd Position",
    description:
      "Bahria University (2nd Semester)\nAwarded merit scholarship for securing 3rd highest GPA (3.94/4.00) in the batch.",
    icon: Award,
    color: "rgb(217, 119, 6)",
  },
  {
    at: 2023.15,
    label: "Feb 2023",
    title: "Certificate of Appreciation — 2nd Position",
    description:
      "Project Gala — DSA Course (Bahria University)\nSecured 2nd position among competing teams for algorithmic excellence.",
    icon: Medal,
    color: "rgb(147, 51, 234)",
  },
  {
    at: 2025.15,
    label: "Jan – Mar 2025",
    title: "Heart2Heart LMS Platform",
    description:
      "Freelance Project — h2hcourses.com\nReact.js, Tailwind CSS v4, Firestore\nDelivered an LMS dashboard with responsive UI, real-time course data, and enrollment tracking.",
    icon: HeartHandshake,
    color: "rgb(219, 39, 119)",
  },
  {
    at: 2025.45,
    label: "June – Sep 2025",
    title: "AI-Powered SocialSight (FYP)",
    description:
      "Final Year Project — socialsight.me\nOAuth 2.0, RTK, Node.js, Transformers\nCentralized social media manager with analytics, scheduling, and fine-tuned RoBERTa sentiment analysis.",
    icon: BarChart,
    color: "rgb(37, 99, 235)",
  },
  {
    at: 2025.7,
    label: "Sep 2025",
    title: "PM Youth Laptop Scheme Award",
    description:
      "Government of Pakistan\nAwarded laptop based on academic excellence and merit.",
    icon: Laptop,
    color: "rgb(22, 163, 74)",
  },
  {
    at: 2026.05,
    label: "Jan 2026",
    title: "Graduated BS in Information Technology",
    description:
      "Bahria University Islamabad Campus\nGraduated with a CGPA of 3.57/4.00.",
    icon: GraduationCap,
    color: "rgb(15, 118, 110)",
  },
  {
    at: 2026.18,
    label: "Mar 2026",
    title: "Joined Quickup as Full Stack Developer Intern",
    description:
      "Quickup (UK, Remote)\nStarted professional journey building RESTful APIs, 40+ SaaS dashboard modules, auth flows, and AWS releases.",
    icon: Briefcase,
    color: "rgb(37, 99, 235)",
  },
  {
    at: 2026.24,
    label: "Mar 2026",
    title: "Profit Edge Financial Platform",
    description:
      "FullStack Intern — profit-edge-webdev.quickup.uk\nNestJS, TypeORM, MySQL, TypeScript, Firebase, Bcrypt\nEngineered investment APIs, PIN auth, 15-day lock workflows, ledger tracking, and analytics dashboards.",
    icon: TrendingUp,
    color: "rgb(13, 148, 136)",
  },
  {
    at: 2026.31,
    label: "Apr 2026",
    title: "Food Ordering & Checkout Website",
    description:
      "FullStack Intern — customerweb.quickup.uk\nVue 3, Vuetify, TypeScript, Pinia, NestJS, Stripe\nIntegrated store discovery APIs, multi-auth flows (OTP, Google OAuth, guest), and multi-currency Stripe payments.",
    icon: Globe,
    color: "rgb(6, 182, 212)",
  },
  {
    at: 2026.39,
    label: "May 2026",
    title: "SaaS Multi-Vendor Admin Dashboard (Frontend Lead)",
    description:
      "Team Lead (Frontend) — saas-dashboard-dev.quickup.uk\nVue 3, Vuetify 3, TypeScript, Pinia, vee-validate\nLed frontend team: built 40+ modular CRUD & analytics modules, managed GitHub workflows, and deployed to AWS.",
    icon: Users,
    color: "rgb(14, 165, 233)",
  },
  {
    at: 2026.48,
    label: "June – July 2026",
    title: "Quick-Up Multi-Vendor Admin Dashboard",
    description:
      "FullStack Intern — dashboard-dev.quickup.uk\nVue 3, Vuex, Axios, ApexCharts, CASL\nImplemented dynamic RBAC with CASL (15+ rules), modular component refactoring, and interactive KPI metrics dashboards.",
    icon: Shield,
    color: "rgb(59, 130, 246)",
  },
  {
    at: 2026.56,
    label: "July 2026",
    title: "IEEE Access Journal Publication",
    description:
      "DOI: 10.1109/ACCESS.2026.3715064\nCo-authored research: 'A Unified Social Media Framework for Real-Time Post-Comparison and RoBERTa Sentiment Analysis'.",
    icon: BookOpen,
    color: "rgb(16, 185, 129)",
  },
  {
    at: 2026.63,
    label: "July – Sep 2026",
    title: "IBM Full-Stack JavaScript Developer Certification",
    description:
      "IBM — Coursera (via NAVTTC) at NASTP Alpha\nEarned professional certification in modern JavaScript, cloud, full-stack application development, and DevOps practices.",
    icon: Award,
    color: "rgb(2, 132, 199)",
  },
  {
    at: 2026.71,
    label: "Aug – Sep 2026",
    title: "SaaS Multi-Vendor Portal Backend",
    description:
      "FullStack Intern — saasdev.quickup.uk\nNestJS, TypeORM, TypeScript, MySQL, JWT\nEngineered core backend modules: orders, vendors, hierarchy, hall booking, KOT, and dine-in lifecycle workflows.",
    icon: Server,
    color: "rgb(168, 85, 247)",
  },
  {
    at: 2026.85,
    label: "Sep 2026 – Present",
    title: "Promoted to Full Stack Developer",
    description:
      "Quickup (UK, Remote)\nTransitioned from intern to developer! Driving SaaS products & client apps with Vue 3, TypeScript, Pinia, Vuetify, NestJS, TypeORM, MySQL, and AWS deployments.",
    icon: Rocket,
    color: "rgb(124, 58, 237)",
  },
  {
    at: 2026.85,
    label: "Sep 2026 – Present",
    title: "Apni Dukan — Multi-Tenant Quick-Commerce & Grocery Delivery Platform",
    description:
      "FullStack Developer — apni-dukan-dev.quickup.ukApni \nVue 3, Pinia, TypeScript, NestJS, TypeORM, MySQL, CASL\nBuilding quick-commerce platforms across inventory, orders, client stores, driver fleets, cart pricing, and delivery rate engines",
    icon: Server,
    color: "rgb(124, 58, 237)",
  },
];

export const JourneyCard = () => {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;
  const prefersReducedMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [direction, setDirection] = useState("right");
  const viewportRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

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
    const withRawUnits = milestones.map((m) => ({
      ...m,
      unit: (m.at - startYear) * UNITS_PER_YEAR,
    }));

    // Redistribute to ensure minimum 2-unit spacing between events
    const redistributed = [];
    let lastUnit = -Infinity;

    for (const m of withRawUnits) {
      const adjustedUnit = Math.max(m.unit, lastUnit + 2);
      redistributed.push({ ...m, unit: adjustedUnit });
      lastUnit = adjustedUnit;
    }

    return redistributed;
  }, [milestones, startYear]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let rafId = 0;
    const measure = () => {
      setViewportWidth(el.getBoundingClientRect().width);
      setIsInitialized(true);
    };
    const scheduleMeasure = () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(measure);
    };

    scheduleMeasure();

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => scheduleMeasure());
      ro.observe(el);
      return () => {
        if (rafId) window.cancelAnimationFrame(rafId);
        ro.disconnect();
      };
    }

    window.addEventListener("resize", scheduleMeasure);
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", scheduleMeasure);
    };
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
  const maxUnit =
    milestonesWithUnits.length > 0
      ? milestonesWithUnits[milestonesWithUnits.length - 1].unit
      : totalYears * UNITS_PER_YEAR;
  const totalUnits = Math.max(totalYears * UNITS_PER_YEAR, Math.ceil(maxUnit) + 4);

  const currentMilestone = milestonesWithUnits[currentIndex] || milestonesWithUnits[0];
  const activeUnit = currentMilestone ? currentMilestone.unit : 0;

  const isMobile = viewportWidth !== null && viewportWidth < 640;
  const trackHeight = isMobile ? 180 : 210;
  const baselineTop = isMobile ? 92 : 110;

  const unitWidth =
    isMobile
      ? 10
      : viewportWidth !== null && viewportWidth < 1024
        ? 12
        : 14;

  // Align tick centers to the fixed center needle.
  // With paddingLeft = (viewport/2 - unitWidth/2), unit=0 tick center is exactly at viewport center.
  const paddingPx = viewportWidth !== null ? viewportWidth / 2 - unitWidth / 2 : 0;
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

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: prefersReducedMotion ? 0 : 32,
      filter: prefersReducedMotion ? "none" : "blur(12px)",
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: prefersReducedMotion
        ? { duration: 0.4 }
        : {
            type: "spring",
            stiffness: 50, // ↓ slower
            damping: 25, // ↑ smoother
            mass: 1.6, // ↑ heavier motion
          },
    },
  };


  const cardSlideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : dir === "right" ? 42 : -42,
      scale: prefersReducedMotion ? 1 : 0.98,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: prefersReducedMotion
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 55, damping: 26, mass: 1.1 },
    },
    exit: (dir) => ({
      opacity: 0,
      x: prefersReducedMotion ? 0 : dir === "right" ? -42 : 42,
      scale: prefersReducedMotion ? 1 : 0.98,
      transition: prefersReducedMotion
        ? { duration: 0.01 }
        : { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <MotionSection className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] pb-8 sm:pb-12 md:pb-16 will-change-transform">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 sm:mb-6 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#006580] mb-1 sm:mb-2 mt-4 sm:mt-8 md:mt-12">
              My Journey
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-black/70 max-w-2xl mx-auto px-4">
              A timeline of my learning, projects, and major milestones.
            </p>
          </div>

          {/* Controls */}
          {isInitialized && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2.5 sm:mb-4 md:mb-6">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/10 hover:bg-black/15 transition flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer border border-black/10 touch-manipulation"
              aria-label="Previous milestone"
            >
              <ChevronLeft size={16} className="text-black/70" />
            </button>
            <button
              onClick={() => setIsPaused((v) => !v)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/10 hover:bg-black/15 transition flex items-center justify-center border border-black/10 touch-manipulation"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? (
                <Play size={15} className="text-black/70 ml-0.5" />
              ) : (
                <Pause size={15} className="text-black/70" />
              )}
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === milestones.length - 1}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/10 hover:bg-black/15 transition flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer border border-black/10 touch-manipulation"
              aria-label="Next milestone"
            >
              <ChevronRight size={16} className="text-black/70" />
            </button>
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-semibold text-black/70">
              {currentIndex + 1} / {milestones.length}
            </span>
          </div>
          )}

          {/* Dots */}
          {isInitialized && (
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-6 md:mb-8 flex-wrap max-w-lg mx-auto px-4">
            {milestones.map((m, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={`${m.at}-${m.title}`}
                  onClick={() => goTo(index)}
                  className={
                    "relative h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-black/20 hover:bg-black/30 transition touch-manipulation" +
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
                      className="absolute -inset-1.5 sm:-inset-2 rounded-full border"
                      style={{ borderColor: currentMilestone.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          )}

          {/* Timeline */}
          <div
            ref={viewportRef}
            className="relative mx-auto max-w-6xl overflow-hidden"
            style={{ minHeight: `${trackHeight}px` }}
          >
            {!isInitialized ? (
              <div className="relative" style={{ height: `${trackHeight}px` }} />
            ) : (
            <div className="relative" style={{ height: `${trackHeight}px` }}>
              {/* Baseline */}
              <div
                className="absolute left-0 right-0 h-px bg-black/25"
                style={{ top: `${baselineTop}px` }}
              />

              {/* Fixed center needle (accurate pointer) */}
              <div
                className="absolute left-1/2 w-px -translate-x-1/2 pointer-events-none"
                style={{
                  top: `${baselineTop - (isMobile ? 58 : 76)}px`,
                  bottom: `${trackHeight - baselineTop - (isMobile ? 42 : 48)}px`,
                  backgroundColor: currentMilestone.color,
                  opacity: 0.28,
                }}
              />
              <div
                className="absolute left-1/2 w-[2px] -translate-x-1/2 pointer-events-none rounded-full"
                style={{
                  top: `${baselineTop - (isMobile ? 48 : 66)}px`,
                  height: `${isMobile ? 64 : 78}px`,
                  backgroundColor: currentMilestone.color,
                  opacity: 0.92,
                }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  top: `${baselineTop}px`,
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: `10px solid ${currentMilestone.color}`,
                  filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.12))",
                }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
                style={{
                  top: `${baselineTop}px`,
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
                  const tickColor = isMajor
                    ? "rgba(0,0,0,0.28)"
                    : "rgba(0,0,0,0.18)";

                  return (
                    <div
                      key={unit}
                      className="relative"
                      style={{
                        width: unitWidth,
                        height: trackHeight,
                        flex: "0 0 auto",
                      }}
                    >
                      <div
                        className="absolute left-1/2 -translate-x-1/2 rounded-full"
                        style={{
                          top: baselineTop - tickHeight,
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
                  const x =
                    paddingPx + milestone.unit * unitWidth + unitWidth / 2;
                  const milestoneKey = `${milestone.at}-${milestone.title}`;

                  const year = Math.floor(milestone.at);
                  const prevYear =
                    index > 0
                      ? Math.floor(milestonesWithUnits[index - 1].at)
                      : null;
                  const showYearLabel = index === 0 || year !== prevYear;

                  // Alternate icon positions: top, bottom, top, bottom...
                  const showIconTop = index % 2 === 1;
                  // Give more space from the scale for readability.
                  const iconTopPx = showIconTop
                    ? (isMobile ? 44 : 60)
                    : (isMobile ? 130 : 156);
                  const activeNudge = showIconTop
                    ? "-translate-y-2"
                    : "translate-y-2";

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
                            "absolute left-1/2 top-3 sm:top-5 -translate-x-1/2 font-bold tracking-[0.18em] whitespace-nowrap transition-all duration-500 " +
                            (isActive ? "scale-110" : "")
                          }
                          style={{
                            color: milestone.color,
                            opacity: isActive ? 1 : 0.62,
                            fontSize: isMobile ? 11 : 13,
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
                          "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 " +
                          (isActive ? "w-3 h-3" : "w-2 h-2")
                        }
                        style={{
                          top: `${baselineTop}px`,
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
                          (isActive ? `scale-125 ${activeNudge}` : "scale-100")
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
                            size: isActive ? (isMobile ? 32 : 40) : (isMobile ? 20 : 24),
                            strokeWidth: isActive ? 2.2 : 2,
                          })}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            )}
          </div>

          {/* Card */}
          {isInitialized && (
          <div className="relative mt-1 sm:mt-2 mb-4 sm:mb-8 md:mb-10 px-4 sm:px-0">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-w-xl mx-auto"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_22px_50px_rgba(0,0,0,0.16)] p-4 sm:p-7 md:px-10 md:py-8">
                  <div
                    className="text-center text-xs font-extrabold tracking-[0.22em] mb-1.5 sm:mb-2"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    {currentMilestone.label}
                  </div>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mb-2 sm:mb-3 leading-snug"
                    style={{ color: currentMilestone.color }}
                  >
                    {currentMilestone.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-black/75 text-center leading-relaxed whitespace-pre-line">
                    {currentMilestone.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          )}

          <div className="text-center px-4">
            <p className="text-sm sm:text-base md:text-xl text-black/70 max-w-md font-semibold mx-auto">
              The journey continues — always learning, building, and leveling
              up.
            </p>
          </div>
        </div>

      </MotionDiv>
    </MotionSection>
  );
};
