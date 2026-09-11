import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import lungCancer1 from "../../assets/images/lungcancerdetection-1.png";
import lungCancer2 from "../../assets/images/lungcancerdetection-2.png";
import lungCancer3 from "../../assets/images/lungcancerdetection-3.png";
import h2h1 from "../../assets/images/h2h-1.png";
import h2h2 from "../../assets/images/h2h-2.png";
import h2h3 from "../../assets/images/h2h-3.png";
import h2h4 from "../../assets/images/h2h-4.png";
import therapist1 from "../../assets/images/therapist-1.png";
import therapist2 from "../../assets/images/therapist-2.png";
import fyp1 from "../../assets/images/fyp-1.png";
import fyp2 from "../../assets/images/fyp-2.png";
import fyp3 from "../../assets/images/fyp-3.png";
import fyp4 from "../../assets/images/fyp-4.png";
import fyp5 from "../../assets/images/fyp-5.png";
import tof1 from "../../assets/images/tof-1.png";
import tof2 from "../../assets/images/tof-2.png";
import tof3 from "../../assets/images/tof-3.png";
import cc1 from "../../assets/images/cancerClassification (1).png";
import cc2 from "../../assets/images/cancerClassification (2).png";
import cc3 from "../../assets/images/cancerClassification (3).png";
import pe1 from "../../assets/images/profitEdge (1).png";
import pe2 from "../../assets/images/profitEdge (2).png";
import pe3 from "../../assets/images/profitEdge (3).png";
import pe4 from "../../assets/images/profitEdge (4).png";
import pe5 from "../../assets/images/profitEdge (5).png";
import qa1 from "../../assets/images/quickupAdmin (1).png";
import qa2 from "../../assets/images/quickupAdmin (2).png";
import qa3 from "../../assets/images/quickupAdmin (3).png";
import rk1 from "../../assets/images/rollsKing (1).png";
import rk2 from "../../assets/images/rollsKing (2).png";
import rk3 from "../../assets/images/rollsKing (3).png";
import sa1 from "../../assets/images/saasAdmin (1).png";
import sa2 from "../../assets/images/saasAdmin (2).png";
import sa3 from "../../assets/images/saasAdmin (3).png";
import le1 from "../../assets/images/le (1).png";
import le2 from "../../assets/images/le (2).png";
import le3 from "../../assets/images/le (3).png";
import le4 from "../../assets/images/le (4).png";
import le5 from "../../assets/images/le (5).png";
import le6 from "../../assets/images/le (6).png";
import sv1 from "../../assets/images/sv1.png";
import sv2 from "../../assets/images/sv2.png";
import sv3 from "../../assets/images/sv3.png";
import sv4 from "../../assets/images/sv4.png";

gsap.registerPlugin(ScrollTrigger);

function clampIndex(index, length) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function Carousel({ images = [], alt = "Project preview" }) {
  const safeImages = images?.length ? images : [];
  const [active, setActive] = useState(0);

  const go = useCallback(
    (dir) => {
      setActive((prev) => clampIndex(prev + dir, safeImages.length));
    },
    [safeImages.length],
  );

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

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-950/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.28),transparent_60%),radial-gradient(circle_at_90%_40%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(14,165,233,0.20),transparent_55%)]" />

      <div className="relative h-full w-full p-1">
        <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-slate-900/80 to-slate-950/80 ring-1 ring-white/10">
          <img src={activeSrc} alt={alt} className="h-full w-full object-contain" loading="lazy" draggable={false} />

          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-black cursor-pointer" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/15"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-black cursor-pointer" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-md ring-1 ring-white/10">
            {safeImages.map((_, i) => (
              <button
                key={`${safeImages[i]}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                className={i === active ? "h-2 w-6 rounded-full bg-white/90" : "h-2 w-2 rounded-full bg-white/35 hover:bg-white/55"}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ item, reversed }) {
  const { title, subtitle, description, tags = [], ctaLabel = "View Project", ctaHref, images = [] } = item;

  return (
    <div
      className={
        "grid h-full w-full min-h-0 grid-cols-1 items-center gap-6 overflow-hidden rounded-4xl bg-white/85 p-6 shadow-[0_10px_70px_rgba(2,6,23,0.02)] ring-1 ring-slate-900/10 backdrop-blur-xl sm:gap-8 sm:p-8 md:grid-cols-2 md:gap-10 md:p-14"
      }
    >
      <div className={(reversed ? "order-2 md:order-2" : "order-2 md:order-1") + " min-h-0"}>
        <div className="min-h-0 max-w-xl">
          {subtitle ? <p className="text-sm font-medium tracking-wide text-slate-500">{subtitle}</p> : null}
          <h2 className="mt-3 text-lg font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-2xl md:text-4xl">{title}</h2>
          {description ? (
            <div className="mt-5 min-h-0 max-h-[26vh] overflow-auto pr-1 text-[14px] leading-7 text-slate-600 sm:max-h-[28vh] md:max-h-none md:overflow-visible md:pr-0 md:text-[16px]">
              <div 
                dangerouslySetInnerHTML={{ __html: description }} 
                className="list-disc pl-5"
              />
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 sm:text-xs">
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 sm:mt-8 sm:w-fit"
            >
              {ctaLabel}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 sm:mt-8 sm:w-fit"
            >
              {ctaLabel}
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className={(reversed ? "order-1 md:order-1" : "order-1 md:order-2") + " min-h-0"}>
        <div className="h-[220px] w-full min-h-0 sm:h-[280px] md:h-[420px]">
          <Carousel images={images} alt={`${title} preview`} />
        </div>
      </div>
    </div>
  );
}

/**
 * Animation logic (GSAP + ScrollTrigger)
 * - Uses a sticky container (CSS) and ties timeline progress to scroll position
 * - Each subsequent card starts below the viewport and slides up to overlap
 * - Scrubbed timeline means reverse scroll plays back step-by-step automatically
 */
function useStackedScrollAnimation({ sectionRef, stickyRef, cardElsRef, cardCount }) {
  useLayoutEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return;
    if (!cardCount || cardCount < 1) return;

    const ctx = gsap.context(() => {
      const cardEls = cardElsRef.current.filter(Boolean);
      if (!cardEls.length) return;

      // Initial state: first card visible, others start below.
      cardEls.forEach((el, i) => {
        gsap.set(el, {
          zIndex: i + 1,
          yPercent: i === 0 ? 0 : 150,
          rotate: 0,
          transformOrigin: "50% 50%",
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.9,
          // Sticky is handled by CSS; ScrollTrigger only drives the timeline.
          invalidateOnRefresh: true,
        },
      });

      // Each transition takes an equal slice of scroll.
      for (let i = 1; i < cardEls.length; i += 1) {
        tl.to(
          cardEls[i],
          {
            yPercent: 0,
            duration: 1,
          },
          i - 1,
        );
      }

      // Keep ScrollTrigger in sync with layout changes (fonts/images/resizes).
      ScrollTrigger.refresh();
    }, stickyRef);

    return () => ctx.revert();
  }, [sectionRef, stickyRef, cardElsRef, cardCount]);
}

export const StackedScrollCards = ({ items }) => {
  const data = useMemo(() => {
    if (Array.isArray(items) && items.length) return items;

    // Demo content (replace with your real projects).
    return [
      {
        id: "saas-multi-vendor-portal",
        title: "SaaS-Multi-Vendor Portal (Food Delivery & Ordering Platform)",
        subtitle: "Aug 2026 - Sep 2026 | FullStack Intern",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Built core backend modules: orders, vendors, employees, hierarchy, designations, hall booking, KOT, and exports.</li><li>Implemented order management for dine-in, table workflows, and lifecycle across multiple order types.</li><li>Fixed critical bugs, TypeScript errors, and ensured data consistency across frontend and backend.</li><li>Designed REST APIs for missing features, established data flow, and improved code quality via refactoring.</li></ul>",
        tags: ["NESTJS", "TYPEORM", "TYPESCRIPT", "MYSQL", "JWT"],
        ctaLabel: "View Project",
        ctaHref: "https://saasdev.quickup.uk",
        images: [sv1, sv2, sv3, sv4],
      },
      {
        id: "quickup-admin-dashboard",
        title: "Quick-Up Admin Dashboard (Multi-Vendor Food Delivery Management Platform)",
        subtitle: "June 2026 - July 2026 | FullStack Intern",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Implemented RBAC with CASL, dynamic permissions, 15+ module rules, and $can directives for access control.</li><li>Refactored monolithic files into modular components across rider management, batching, and live operations modules.</li><li>Integrated REST APIs with Axios, established data flow, designed missing endpoints, and fixed critical bugs.</li><li>Built responsive UI, Vuex state management, and ApexCharts dashboards for metrics and KPI tracking.</li></ul>",
        tags: ["VUE 3", "VUEX", "AXIOS", "APEXCHARTS", "CASL"],
        ctaLabel: "View Project",
        ctaHref: "https://dashboard-dev.quickup.uk",
        images: [qa1, qa2, qa3],
      },
      {
        id: "quickup-saas-admin-dashboard",
        title: "SaaS-Multi-Vendor Admin Dashboard",
        subtitle: "May 2026 | Team Lead (Frontend)",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Led frontend for multi-tenant SaaS admin panel supporting delivery, pickup, dine-in, and multi-currency features.</li><li>Refactored and redesigned the application from Figma, improving API integration, component reusability, and performance.</li><li>Built 40+ modules using Vue 3, TypeScript, Pinia, reusable CRUD architecture, JWT authentication, and analytics dashboards.</li><li>Coordinated GitHub workflows, task distribution, and AWS deployment using SSH (PuTTY).</li></ul>",
        tags: ["VUE 3", "VUETIFY 3", "TYPESCRIPT", "PINIA", "VEE-VALIDATE"],
        ctaLabel: "View Project",
        ctaHref: "https://saas-dashboard-dev.quickup.uk",
        images: [sa1, sa2, sa3],
      },

      {
        id: "quickup-food-delivery",
        title: "Food Ordering & Checkout Website (Guest & Registered Users)",
        subtitle: "April 2026 | FullStack Intern",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Integrated ordering, store discovery, availability APIs, and auth flows (OTP, Google OAuth, reset, guest) across UK/PK.</li><li>Built order workflows with real-time tracking, lifecycle (history, cancellations, refunds), feedback via API, and state management.</li><li>Integrated Stripe payments with multi-currency support and secure transaction processing.</li></ul>",
        tags: ["VUE 3", "VUETIFY", "TYPESCRIPT", "PINIA", "NESTJS API", "STRIPE"],
        ctaLabel: "View Project",
        ctaHref: "https://customerweb.quickup.uk",
        images: [rk1, rk2, rk3],
      },

      {
        id: "profit-edge",
        title: "Profit Edge Financial Platform",
        subtitle: "Mar 2026 | FullStack Intern",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Worked on investment APIs: withdrawals, deposits, plans, rewards, logs, analytics, settings with CRUD and business logic.</li><li>Built secure financial workflows: PIN, 15-day lock, admin limits, and ledger integration for balance tracking.</li><li>Created analytics dashboard with TypeORM for user metrics, deposits, withdrawals, revenue, and stats with date filters.</li></ul>",
        tags: ["NESTJS", "TYPEORM", "MYSQL", "TYPESCRIPT", "FIREBASE", "BCRYPT"],
        ctaLabel: "View Project",
        ctaHref: "https://profit-edge-webdev.quickup.uk",
        images: [pe1, pe2, pe3, pe4, pe5],
      },

      {
        id: "laravel-shopping-ecommerce-platform",
        title: "Laravel Shopping Inertia React E-commerce Platform",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>A production-ready full-stack e-commerce platform featuring customer and admin portals, inventory management, shopping cart, payments, reviews, analytics, and domain-driven architecture.</li><li>Built with Laravel, React, Inertia.js, and MySQL, emphasizing scalability, maintainability, and modern SPA user experience.</li></ul>",
        tags: ["LARAVEL", "PHP", "REACT", "INERTIA.JS", "MYSQL", "TAILWIND CSS", "REACT QUERY", "ZOD"],
        ctaLabel: "View Project",
        images: [le1, le2, le3, le4, le5, le6],
      },

      {
        id: "theothersfarhan",
        title: "theothersfarhan",
        subtitle: "Aug 2025 - Sep 2025 | Freelance",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Professional portfolio website for a top-rated video editor featuring animated interfaces, reusable components, responsive layouts, optimized assets, and a polished user experience.",
        tags: ["NEXT.JS", "REACT", "TAILWIND CSS", "FRAMER MOTION"],
        ctaLabel: "View Project",
        ctaHref: "https://theothersfarhan.com",
        images: [tof1, tof2, tof3],
      },

      {
        id: "ai-powered-multi-platform-management-insights",
        title: "AI-Powered Multi-Platform Management & Insights",
        subtitle: "June 2025 - Sep 2025 | Final Year Project",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Built a centralized social media management platform for businesses and creators.</li><li>Unified dashboard with real-time analytics, follower growth, and engagement insights across multiple platforms.</li><li>Implemented post creation, drafting, scheduling, and publishing via a calendar-based workflow.</li><li>Fine-tuned a RoBERTa base model for sentiment analysis to classify audience feedback and provide qualitative insights.</li></ul>",
        tags: ["OAUTH 2.0", "RTK", "2FA", "TOPT", "NODECRON", "NODEMAILER", "TRANSFORMERS"],
        ctaLabel: "View Project",
        ctaHref: "http://socialsight.me",
        images: [fyp1, fyp2, fyp3, fyp4, fyp5],
      },

      {
        id: "rachael-fryrear-counseling",
        title: "Rachael Fryrear Counseling",
        subtitle: "April 2025 - May 2025 | Freelance",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Designed and developed a responsive portfolio website for a licensed professional counselor, including branding, layout, service pages, and integrated email communication.",
        tags: ["REACT", "TAILWIND CSS", "FRAMER MOTION", "EMAIL SERVICE"],
        ctaLabel: "View Project",
        ctaHref: "https://rachaelfryrearcounseling.com",
        images: [therapist1, therapist2],
      },

      {
        id: "heart2heart",
        title: "Heart2Heart",
        subtitle: "Jan 2025 - Mar 2025 | Freelance",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Delivered LMS dashboard exceeding client expectations with responsive UI, Firestore for real-time course data, and enrollment tracking.</li></ul>",
        tags: ["REACT.JS", "TAILWIND CSS V4", "FIRESTORE"],
        ctaLabel: "View Project",
        ctaHref: "https://h2hcourses.com",
        images: [h2h1, h2h2, h2h3, h2h4],
      },

      {
        id: "lung-cancer-image-classification",
        title: "Lung Cancer Image Classification",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>A deep learning application that classifies lung cancer images into Adenocarcinoma, Benign, and Squamous Cell Carcinoma using a CNN achieving 97% accuracy.</li><li>Flask web interface for real-time predictions.</li></ul>",
        tags: ["PYTHON", "TENSORFLOW", "KERAS", "CNN", "FLASK", "HTML", "CSS", "JAVASCRIPT"],
        ctaLabel: "View Project",
        images: [cc1, cc2, cc3],
      },
    ];
  }, [items]);

  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const cardElsRef = useRef([]);

  const setCardEl = useCallback((index) => {
    return (el) => {
      cardElsRef.current[index] = el;
    };
  }, []);

  useStackedScrollAnimation({
    sectionRef,
    stickyRef,
    cardElsRef,
    cardCount: data.length,
  });

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: `${Math.max(1, data.length) * 100}vh` }}>
      <div ref={stickyRef} className="sticky top-0 h-dvh w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="relative h-[92vh] w-full sm:h-[88vh] md:h-[82vh]">
            {data.map((item, index) => (
              <div
                key={item.id ?? index}
                ref={setCardEl(index)}
                className="absolute inset-0 will-change-transform"
                style={{
                  pointerEvents: index === data.length - 1 ? "auto" : "auto",
                }}
              >
                <Card item={item} reversed={index % 2 === 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
