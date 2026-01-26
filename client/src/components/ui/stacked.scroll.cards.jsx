import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import fyp1 from "../../assets/images/FYP-1.png";
import fyp2 from "../../assets/images/FYP-2.png";
import fyp3 from "../../assets/images/FYP-3.png";
import fyp4 from "../../assets/images/FYP-4.png";
import fyp5 from "../../assets/images/FYP-5.png";
import tof1 from "../../assets/images/tof-1.png";
import tof2 from "../../assets/images/tof-2.png";
import tof3 from "../../assets/images/tof-3.png";

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
          <img
            src={activeSrc}
            alt={alt}
            className="h-full w-full object-contain"
            loading="lazy"
            draggable={false}
          />

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
                className={
                  i === active
                    ? "h-2 w-6 rounded-full bg-white/90"
                    : "h-2 w-2 rounded-full bg-white/35 hover:bg-white/55"
                }
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
  const {
    title,
    subtitle,
    description,
    tags = [],
    ctaLabel = "View Project",
    ctaHref,
    images = [],
  } = item;

  return (
    <div
      className={
        "grid h-full w-full min-h-0 grid-cols-1 items-center gap-6 overflow-hidden rounded-4xl bg-white/85 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.20)] ring-1 ring-slate-900/10 backdrop-blur-xl sm:gap-8 sm:p-8 md:grid-cols-2 md:gap-10 md:p-14"
      }
    >
      <div
        className={
          (reversed ? "order-2 md:order-2" : "order-2 md:order-1") +
          " min-h-0"
        }
      >
        <div className="min-h-0 max-w-xl">
          {subtitle ? (
            <p className="text-sm font-medium tracking-wide text-slate-500">
              {subtitle}
            </p>
          ) : null}
          <h2 className="mt-3 text-lg font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-2xl md:text-4xl">
            {title}
          </h2>
          {description ? (
            <div className="mt-5 min-h-0 max-h-[26vh] overflow-auto pr-1 text-[14px] leading-7 text-slate-600 sm:max-h-[28vh] md:max-h-none md:overflow-visible md:pr-0 md:text-[16px]">
              <p>{description}</p>
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 sm:text-xs"
                >
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

      <div
        className={
          (reversed ? "order-1 md:order-1" : "order-1 md:order-2") +
          " min-h-0"
        }
      >
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
function useStackedScrollAnimation({
  sectionRef,
  stickyRef,
  cardElsRef,
  cardCount,
}) {
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
          yPercent: i === 0 ? 0 : 120,
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
        id: "Lung-Cancer-Image-Classification",
        title: "Lung Cancer Image Classiﬁcation",
        description:
          "The model is a Convolutional Neural Network (CNN) built for classifying lung cancer images into three categories: Adenocarcinoma, Benign, and Squamous Cell Carcinoma. It utilizes multiple Conv2D and MaxPooling2D layers for feature extraction, with BatchNormalization and Dropout for regularization. The model is trained using data augmentation and optimized with Adam. It achieves high accuracy (~97%) on the test set, providing reliable predictions for lung cancer classification.",
        tags: ["FlASK", "KERAS", "CNN", "HTML", "JS", "CSS"],
        ctaLabel: "View Project",
        images: [lungCancer1, lungCancer2, lungCancer3],
      },
      {
        id: "Heart2Heart",
        title: "Heart2Heart",
        description:
          "The H2H Courses platform offers an interactive learning experience, featuring courses on communication, conflict resolution, and personal growth. Users can browse courses, view details, and track their progress, with registered (paid) courses allocated to their personalized dashboard. Firebase is used for user authentication and storing course data, allowing seamless tracking of user IDs and their registered courses. The platform integrates PayPal for secure payments. The platform is live at https://h2hcourses.com",
        tags: [
          "REACT",
          "FRAMER MOTION",
          "VITE",
          "TAILWIND CSS",
          "FIREBASE",
          "PAYPAL",
        ],
        ctaLabel: "View Project",
        images: [h2h1, h2h2, h2h3, h2h4],
      },
      {
        id: "rachael-fryrear-counseling",
        title: "Rachael Fryrear Counseling",
        description:
          "I developed a personalized portfolio for Rachael Fryrear, creating a professional online presence for her counseling practice. I handled the complete design, including the color theme, page structure, and layout. The site features a clean, user-friendly interface that highlights the counselor’s services and specialties. I also integrated a third-party email service for easy client communication. This project helped me strengthen my frontend skills. The portfolio is live at https://rachaelfryrearcounseling.com",
        tags: [
          "REACT.JS",
          "TAILWIND CSS",
          "EMAIL FORMS",
          "COMMUNICATION",
          "REQUIREMENTS GATHERING",
        ],
        ctaLabel: "View Project",
        images: [therapist1, therapist2],
      },
      {
        id: "ai-powered-multi-platform-management-&-insights",
        title: "AI-Powered Multi-Platform Management & Insights",
        description:
          "This web-based platform simplifies content creation, engagement analysis, and user interaction tracking across social media. Some of the core features include real-time sentiment analysis of post comments (positive, negative, neutral) using AI models, side-by-side cross-platform post-level engagement metrics comparison, and an intuitive dashboard for users to make data-driven decisions based on reach, shares, and overall user interactions.",
        tags: [
          "REACT.JS",
          "TAILWIND CSS",
          "OAUTH",
          "2FA",
          "RTK",
          "TOTP",
          "NODECRON",
          "NODEMAILER",
          "SOCIAL MEDIA'S PUBLIC API",
          "RoBERTa Transformer",
        ],
        ctaLabel: "View Project",
        images: [fyp1, fyp2, fyp3, fyp4, fyp5],
      },
      {
        id: "theothersfarhan",
        title: "theothersfarhan",
        description:
          "I created a professional portfolio for a top-rated Upwork Video Editor & Content Creator with over 5 years of experience. The portfolio showcases a variety of services, including commercial video production, wedding cinematography, music videos, web series, and more. The site features dynamic content, smooth animations, and a user-friendly interface, allowing clients to easily explore the editor's work, request services, and contact directly, ensuring an engaging and professional online presence. The portfolio can be accessed at https://theothersfarhan.com",
        tags: [
          "REACT.JS",
          "TAILWIND CSS",
          "COMMUNICATION",
          "REQUIREMENTS GATHERING",
        ],
        ctaLabel: "View Project",
        images: [tof1, tof2, tof3],
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
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${Math.max(1, data.length) * 100}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-dvh w-full overflow-hidden"
      >
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
