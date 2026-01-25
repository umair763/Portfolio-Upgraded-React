import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceCard } from "./service.card";
import PixelCard from "./pixel.card";

gsap.registerPlugin(ScrollTrigger);

/**
 * MarqueesScroll
 * A sticky, scroll-driven horizontal marquee.
 *
 * How to use:
 * <MarqueesScroll
 *   items={[{ icon, title, description, checkmark, ctaLabel, ctaHref }]}
 *   cardClassName="w-[620px] max-w-none"
 *   gapClassName="gap-10"
 * />
 */
export const MarqueesScroll = ({
  items = [],
  cardClassName = "w-[620px] max-w-none",
  gapClassName = "gap-10",
  startOffsetPx = 80,
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
        // We pad both the start and end by startOffsetPx, so total travel includes it twice.
        return getMaxX() + startOffsetPx * 2;
      };

      const measureAndSetHeight = () => {
        // One full viewport + the horizontal travel distance + some breathing room.
        setSectionHeightPx(Math.ceil(window.innerHeight + getTravel() + 200));
      };

      // Start slightly to the right so scroll-down feels like right -> left.
      gsap.set(trackRef.current, { x: startOffsetPx });

      const tween = gsap.fromTo(
        trackRef.current,
        { x: () => startOffsetPx },
        {
          x: () => -(getMaxX() + startOffsetPx),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            // Make the scroll distance match the full horizontal travel.
            end: () => `+=${Math.max(1, getTravel())}`,
            scrub: 0.9,
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
        className="sticky top-0 h-dvh w-full overflow-hidden"
      >

        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-6">
          <div ref={viewportRef} className="w-full overflow-hidden">
            <div
              ref={trackRef}
              className={`flex items-stretch ${gapClassName} will-change-transform`}
            >
              {safeItems.map((item, idx) => (
                <div key={item.id ?? `${item.title}-${idx}`} className={`shrink-0`}>
                  <PixelCard className={`${cardClassName} rounded-2xl bg-white`} variant="blue" gap={8} speed={60}>
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
      </div>
    </section>
  );
};
