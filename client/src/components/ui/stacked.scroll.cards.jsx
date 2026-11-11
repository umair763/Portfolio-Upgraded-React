import React, { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { OptimizedCarousel } from "./optimized.carousel";
// import lungCancer1 from "../../assets/images/webp/lungcancerdetection-1.webp";
// import lungCancer2 from "../../assets/images/webp/lungcancerdetection-2.webp";
// import lungCancer3 from "../../assets/images/webp/lungcancerdetection-3.webp";
import h2h1 from "../../assets/images/webp/h2h-1.webp";
import h2h2 from "../../assets/images/webp/h2h-2.webp";
import h2h3 from "../../assets/images/webp/h2h-3.webp";
import h2h4 from "../../assets/images/webp/h2h-4.webp";
import therapist1 from "../../assets/images/webp/therapist-1.webp";
import therapist2 from "../../assets/images/webp/therapist-2.webp";
import fyp1 from "../../assets/images/webp/fyp-1.webp";
import fyp2 from "../../assets/images/webp/fyp-2.webp";
import fyp3 from "../../assets/images/webp/fyp-3.webp";
import fyp4 from "../../assets/images/webp/fyp-4.webp";
import fyp5 from "../../assets/images/webp/fyp-5.webp";
import tof1 from "../../assets/images/webp/tof-1.webp";
import tof2 from "../../assets/images/webp/tof-2.webp";
import tof3 from "../../assets/images/webp/tof-3.webp";
import cc1 from "../../assets/images/webp/cancerClassification (1).webp";
import cc2 from "../../assets/images/webp/cancerClassification (2).webp";
import cc3 from "../../assets/images/webp/cancerClassification (3).webp";
import pe1 from "../../assets/images/webp/profitEdge (1).webp";
import pe2 from "../../assets/images/webp/profitEdge (2).webp";
import pe3 from "../../assets/images/webp/profitEdge (3).webp";
import pe4 from "../../assets/images/webp/profitEdge (4).webp";
import pe5 from "../../assets/images/webp/profitEdge (5).webp";
import qa1 from "../../assets/images/webp/quickupAdmin (1).webp";
import qa2 from "../../assets/images/webp/quickupAdmin (2).webp";
import qa3 from "../../assets/images/webp/quickupAdmin (3).webp";
import rk1 from "../../assets/images/webp/rollsKing (1).webp";
import rk2 from "../../assets/images/webp/rollsKing (2).webp";
import rk3 from "../../assets/images/webp/rollsKing (3).webp";
import sa1 from "../../assets/images/webp/saasAdmin (1).webp";
import sa2 from "../../assets/images/webp/saasAdmin (2).webp";
import sa3 from "../../assets/images/webp/saasAdmin (3).webp";
import le1 from "../../assets/images/webp/le (1).webp";
import le2 from "../../assets/images/webp/le (2).webp";
import le3 from "../../assets/images/webp/le (3).webp";
import le4 from "../../assets/images/webp/le (4).webp";
import le5 from "../../assets/images/webp/le (5).webp";
import le6 from "../../assets/images/webp/le (6).webp";
import sv1 from "../../assets/images/webp/Sv1.webp";
import sv2 from "../../assets/images/webp/Sv2.webp";
import sv3 from "../../assets/images/webp/Sv3.webp";
import sv4 from "../../assets/images/webp/Sv4.webp";
import adn1 from "../../assets/images/ADN-1 (1).png";
import adn2 from "../../assets/images/ADN-1 (2).png";
import adn3 from "../../assets/images/ADN-1 (3).png";
import adn4 from "../../assets/images/ADN-1 (4).png";
import adn5 from "../../assets/images/ADN-1 (5).png";
import adn6 from "../../assets/images/ADN-1 (6).png";
import adn7 from "../../assets/images/ADN-1 (7).png";
import adn8 from "../../assets/images/ADN-1 (8).png";
import adn9 from "../../assets/images/ADN-1 (9).png";
import adn10 from "../../assets/images/ADN-1 (10).png";
import adn11 from "../../assets/images/ADN-1 (11).png";

gsap.registerPlugin(ScrollTrigger);

function Card({ item, reversed }) {
  const { title, subtitle, description, tags = [], ctaLabel = "View Project", ctaHref, images = [] } = item;

  return (
    <div
      className={
        "grid h-full w-full min-h-0 grid-cols-1 items-center gap-4 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl bg-white/90 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-[0_10px_70px_rgba(2,6,23,0.06)] ring-1 ring-slate-900/10 backdrop-blur-xl md:grid-cols-2 md:gap-8 lg:gap-10"
      }
    >
      <div className={(reversed ? "order-2 md:order-2" : "order-2 md:order-1") + " min-h-0 flex flex-col justify-center"}>
        <div className="min-h-0 max-w-xl">
          {subtitle ? <p className="text-xs sm:text-sm font-semibold tracking-wide text-slate-500">{subtitle}</p> : null}
          <h2 className="mt-1.5 sm:mt-2.5 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-slate-900">{title}</h2>
          {description ? (
            <div className="mt-3 sm:mt-4 min-h-0 max-h-[18vh] sm:max-h-[22vh] md:max-h-[26vh] lg:max-h-[30vh] overflow-y-auto pr-1 text-[13px] sm:text-sm md:text-sm lg:text-[15px] leading-relaxed text-slate-600">
              <div 
                dangerouslySetInnerHTML={{ __html: description }} 
                className="list-disc pl-4 space-y-1 sm:space-y-1.5"
              />
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div className="mt-3 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-sky-700">
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
              className="mt-4 sm:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 sm:w-fit"
            >
              {ctaLabel}
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          ) : (
            <button
              type="button"
              className="mt-4 sm:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50 sm:w-fit"
            >
              {ctaLabel}
              <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          )}
        </div>
      </div>

      <div className={(reversed ? "order-1 md:order-1" : "order-1 md:order-2") + " min-h-0 flex items-center justify-center"}>
        <div className="h-[180px] w-full min-h-0 sm:h-[240px] md:h-[300px] lg:h-[360px] xl:h-[400px]">
          <OptimizedCarousel images={images} alt={`${title} preview`} />
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
 * - Optimized to prevent blocking during image loading
 */
function useStackedScrollAnimation({ sectionRef, stickyRef, cardElsRef, cardCount }) {
  useLayoutEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return;
    if (!cardCount || cardCount < 1) return;

    const ctx = gsap.context(() => {
      const cardEls = cardElsRef.current.filter(Boolean);
      if (!cardEls.length) return;

      // Initial state: first card visible, subsequent cards placed just below viewport
      cardEls.forEach((el, i) => {
        gsap.set(el, {
          zIndex: i + 1,
          yPercent: i === 0 ? 0 : 105,
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        defaults: { 
          ease: "none",
          force3D: true,
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });

      // Each transition takes an equal slice of scroll with zero lag
      for (let i = 1; i < cardEls.length; i += 1) {
        tl.to(
          cardEls[i],
          {
            yPercent: 0,
            duration: 1,
            force3D: true,
          },
          i - 1,
        );
      }

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
        id: "Apni-Dukan-—-Multi-Tenant-Quick-Commerce-&-Grocery-Delivery-Platform",
        title: "Apni Dukan — Multi-Tenant Quick-Commerce & Grocery Delivery Platform",
        subtitle: "Sep 2026 - Present | FullStack Developer",
        description:
          "<ul class='list-disc pl-5 space-y-2'><li>Collaborating with the frontend team to develop responsive Vue 3 and TypeScript portals using Pinia, enforcing CASL-based RBAC across products, inventory, client stores, orders, and driver fleets.</li><li>Co-architecting modular NestJS and TypeORM REST APIs with MySQL across 45+ domain modules, managing master data for countries, cities, zip codes, and multi-tenant vendors.</li><li>Working within a cross-functional team to engineer real-time cart validation and checkout pipelines, supporting promotional discounts, free-delivery thresholds, and automated stock checks.</li><li>Implementing distance-based delivery calculations using geospatial per-mile tiers, out-of-range rates, and robust audit trails via payment-method and wallet transaction logs.</li></ul>",
        tags: ["VUE 3", "PINIA", "TYPESCRIPT", "NESTJS", "TYPEORM", "MYSQL", "CASL", "REST API"],
        ctaLabel: "View Project",
        ctaHref: "https://apni-dukan-dev.quickup.uk",
        images: [adn1, adn2, adn3, adn4, adn5, adn6, adn7, adn8, adn9, adn10, adn11],
      },
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

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="relative h-[88vh] w-full sm:h-[86vh] md:h-[82vh] lg:h-[80vh] max-h-[820px]">
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
