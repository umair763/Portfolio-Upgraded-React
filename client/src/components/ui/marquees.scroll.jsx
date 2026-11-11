import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceCard } from "./service.card";
import PixelCard from "./pixel.card";
import { Waves } from "../common/waves";

gsap.registerPlugin(ScrollTrigger);

/**
 * MarqueesScroll
 * A sticky, scroll-driven horizontal marquee.
 *
 * How to use:
 * <MarqueesScroll
 *   items={[{ icon, title, description, checkmark, ctaLabel, ctaHref }]}
 *   cardClassName="w-[320px] sm:w-[620px] max-w-none"
 *   gapClassName="gap-4 sm:gap-10"
 * />
 */
export const MarqueesScroll = ({
  items = [],
  cardClassName = "w-[280px] sm:w-[440px] md:w-[500px] lg:w-[560px] h-full min-h-[380px] sm:min-h-[400px] md:min-h-[420px] max-w-[85vw]",
  gapClassName = "gap-4 sm:gap-6 md:gap-8",
  startOffsetPx = 60,
}) => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [sectionHeightPx, setSectionHeightPx] = useState(null);

  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);

  useLayoutEffect(() => {
    if (
      !sectionRef.current ||
      !stickyRef.current ||
      !viewportRef.current ||
      !trackRef.current
    )
      return;
    if (!safeItems.length) return;

    const ctx = gsap.context(() => {
      const getOffset = () => (window.innerWidth < 640 ? 16 : startOffsetPx);

      const getMaxX = () => {
        // Measure the actual visible area (max-width container), not the full window.
        const viewportWidth =
          viewportRef.current?.clientWidth ??
          stickyRef.current?.clientWidth ??
          window.innerWidth;
        const trackWidth = trackRef.current?.scrollWidth ?? 0;
        return Math.max(0, trackWidth - viewportWidth);
      };

      const getTravel = () => {
        // We pad both the start and end by offset, so total travel includes it twice.
        return getMaxX() + getOffset() * 2;
      };

      const measureAndSetHeight = () => {
        // One full viewport + exact horizontal travel distance for 1:1 sync with sticky unpin
        setSectionHeightPx(Math.ceil(window.innerHeight + getTravel()));
      };

      // Start slightly to the right so scroll-down feels like right -> left.
      gsap.set(trackRef.current, { x: getOffset() });

      const tween = gsap.fromTo(
        trackRef.current,
        { x: () => getOffset() },
        {
          x: () => -(getMaxX() + getOffset()),
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
            invalidateOnRefresh: true,
          },
        },
      );

      // Ensure correct sizes when fonts/images load and on resize.
      measureAndSetHeight();

      const ro = new ResizeObserver(() => {
        measureAndSetHeight();
        ScrollTrigger.refresh();
      });
      if (viewportRef.current) ro.observe(viewportRef.current);
      if (trackRef.current) ro.observe(trackRef.current);

      const onResize = () => {
        measureAndSetHeight();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize, { passive: true });

      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("resize", onResize);
        ro.disconnect();
        tween?.scrollTrigger?.kill();
        tween?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [safeItems.length, startOffsetPx]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={
        sectionHeightPx
          ? { height: `${sectionHeightPx}px` }
          : { minHeight: "220vh" }
      }
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen sm:h-dvh w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] overflow-hidden flex items-center"
      >

        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div ref={viewportRef} className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className={`flex items-stretch ${gapClassName} will-change-transform`}
            >
              {safeItems.map((item, idx) => (
                <div key={item.id ?? `${item.title}-${idx}`} className="shrink-0 flex self-stretch">
                  <PixelCard className={`${cardClassName} rounded-2xl bg-white h-full flex flex-col`} variant="blue" gap={8} speed={60}>
                    <ServiceCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      checkmark={item.checkmark}
                      ctaLabel={item.ctaLabel}
                      ctaHref={item.ctaHref}
                      className="w-full h-full"
                    />
                  </PixelCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated waves at the bottom of the pinned viewport spanning full screen width */}
        <Waves className="z-10" />
      </div>
    </section>
  );
};
  