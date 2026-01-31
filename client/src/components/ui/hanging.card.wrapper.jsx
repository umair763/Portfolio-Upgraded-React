import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HangingCardWrapper = ({
  children,
  className = "",
  dropDelay = 0,
  dropDistance = 140,
  swing = true,
  intensity = 1,
}) => {
  const rootRef = useRef(null);
  const ropeRef = useRef(null);
  const hookRef = useRef(null);
  const cardRef = useRef(null);

  const uid = useMemo(
    () => `lanyard_${Math.random().toString(16).slice(2)}`,
    []
  );

  useLayoutEffect(() => {
    const rootEl = rootRef.current;
    const ropeEl = ropeRef.current;
    const hookEl = hookRef.current;
    const cardEl = cardRef.current;

    if (!rootEl || !ropeEl || !hookEl || !cardEl) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      gsap.set([ropeEl, hookEl, cardEl], { clearProps: "all" });
      return;
    }

    let trigger;

    const ctx = gsap.context(() => {
      gsap.set(rootEl, { transformPerspective: 900 });
      gsap.set(ropeEl, { transformOrigin: "50% 0%" });
      gsap.set(hookEl, { transformOrigin: "50% 0%" });
      gsap.set(cardEl, { transformOrigin: "50% 0%" });

      const startRot = gsap.utils.random(-10, 10) * intensity;
      const impactRot = gsap.utils.random(-18, 18) * intensity;
      const impactX = gsap.utils.random(-10, 10) * intensity;

      gsap.set(cardEl, {
        y: -dropDistance,
        rotation: startRot,
        x: 0,
        filter: "drop-shadow(0 18px 22px rgba(0,0,0,0.45))",
      });
      gsap.set(ropeEl, { scaleY: 0.95 });
      gsap.set(hookEl, { rotation: 0 });

      const tl = gsap.timeline({ delay: dropDelay, paused: true });

      // Free-fall into place
      tl.to(cardEl, {
        y: 0,
        duration: 0.75,
        ease: "power2.in",
      });

      // Impact: rope stretches + quick jerk
      tl.to(
        ropeEl,
        {
          scaleY: 1.18 + 0.08 * intensity,
          duration: 0.12,
          ease: "power3.out",
        },
        "<0.05"
      );
      tl.to(
        cardEl,
        {
          rotation: impactRot,
          x: impactX,
          duration: 0.14,
          ease: "power3.out",
        },
        "<"
      );
      tl.to(
        hookEl,
        {
          rotation: impactRot * 0.25,
          duration: 0.14,
          ease: "power3.out",
        },
        "<"
      );

      // Settle: rope rebounds
      tl.to(ropeEl, {
        keyframes: [
          { scaleY: 0.92 - 0.03 * intensity, duration: 0.16, ease: "power2.inOut" },
          { scaleY: 1.06 + 0.02 * intensity, duration: 0.22, ease: "power2.inOut" },
          { scaleY: 1, duration: 0.35, ease: "power2.out" },
        ],
      });

      // Damped swing like a heavy object on a thread
      if (swing) {
        tl.to(
          [cardEl, hookEl],
          {
            keyframes: [
              { rotation: -impactRot * 0.7, x: -impactX * 0.8, duration: 0.55, ease: "sine.inOut" },
              { rotation: impactRot * 0.5, x: impactX * 0.55, duration: 0.55, ease: "sine.inOut" },
              { rotation: -impactRot * 0.32, x: -impactX * 0.35, duration: 0.55, ease: "sine.inOut" },
              { rotation: impactRot * 0.18, x: impactX * 0.2, duration: 0.55, ease: "sine.inOut" },
              { rotation: 0, x: 0, duration: 0.6, ease: "power2.out" },
            ],
          },
          "<0.05"
        );
      } else {
        tl.to(cardEl, { rotation: 0, x: 0, duration: 0.35, ease: "power2.out" }, "<");
        tl.to(hookEl, { rotation: 0, duration: 0.35, ease: "power2.out" }, "<");
      }

      // Bidirectional: plays on enter, reverses on leave (so it replays every time)
      trigger = ScrollTrigger.create({
        trigger: rootEl,
        start: "top 80%",
        end: "bottom 20%",
        animation: tl,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true,
      });
    }, rootEl);

    return () => {
      trigger?.kill();
      ctx.revert();
    };
  }, [dropDelay, dropDistance, swing, intensity]);

  return (
    // Wrapper does NOT size/center the child; it only overlays the lanyard.
    <div ref={rootRef} className={`relative w-full ${className}`}>
      {/* Card */}
      <div ref={cardRef} className="relative">
        {children}
      </div>

      {/* Lanyard + hook (overlay, does not affect layout) */}
      <div
        ref={ropeRef}
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[150px]"
        style={{ width: 150, height: 190 }}
        aria-hidden="true"
      >
        <svg
          ref={hookRef}
          width="150"
          height="190"
          viewBox="0 0 150 190"
          className="block"
        >
          <defs>
            {/* Fabric */}
            <linearGradient id={`${uid}_fabric`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#caa55a" />
              <stop offset="0.18" stopColor="#e7c67c" />
              <stop offset="0.5" stopColor="#a88133" />
              <stop offset="0.82" stopColor="#e6c57a" />
              <stop offset="1" stopColor="#b88f41" />
            </linearGradient>
            <linearGradient id={`${uid}_fabricEdge`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,0.28)" />
              <stop offset="0.5" stopColor="rgba(0,0,0,0)" />
              <stop offset="1" stopColor="rgba(0,0,0,0.25)" />
            </linearGradient>

            {/* Metal */}
            <linearGradient id={`${uid}_metal`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f4f6f8" />
              <stop offset="0.22" stopColor="#aeb6bf" />
              <stop offset="0.48" stopColor="#f7f9fb" />
              <stop offset="0.72" stopColor="#7e8792" />
              <stop offset="1" stopColor="#e9edf2" />
            </linearGradient>
            <linearGradient id={`${uid}_metalDark`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a2f36" />
              <stop offset="1" stopColor="#0b0f12" />
            </linearGradient>

            {/* Soft shadow */}
            <filter id={`${uid}_shadow`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="rgba(0,0,0,0.35)" />
            </filter>

            {/* Slight fabric texture */}
            <filter id={`${uid}_texture`} x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0 0.2  0 0 0 0.18 0" result="tint" />
              <feBlend in="SourceGraphic" in2="tint" mode="multiply" />
            </filter>
          </defs>

          {/* Strap (slight curve) */}
          <g filter={`url(#${uid}_shadow)`}>
            <path
              d="M58 10 C 60 55, 56 95, 58 136 C 59 155, 64 170, 75 178 C 86 170, 91 155, 92 136 C 94 95, 90 55, 92 10"
              fill={`url(#${uid}_fabric)`}
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="0.8"
              filter={`url(#${uid}_texture)`}
            />
            <path
              d="M62 12 C 64 56, 61 96, 63 136 C 64 153, 68 166, 75 172"
              fill="none"
              stroke={`url(#${uid}_fabricEdge)`}
              strokeWidth="2"
              opacity="0.55"
            />
            <path
              d="M88 12 C 86 56, 89 96, 87 136 C 86 153, 82 166, 75 172"
              fill="none"
              stroke="rgba(0,0,0,0.16)"
              strokeWidth="1.4"
              opacity="0.35"
            />
          </g>

          {/* Top stitched band */}
          <g opacity="0.95">
            <rect x="56" y="8" width="38" height="14" rx="3" fill="rgba(0,0,0,0.22)" />
            <rect x="57" y="9" width="36" height="12" rx="3" fill={`url(#${uid}_fabric)`} />
            <path d="M60 12 H90" stroke="rgba(0,0,0,0.22)" strokeWidth="0.8" />
            <path d="M60 18 H90" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
          </g>

          {/* Clamp */}
          <g filter={`url(#${uid}_shadow)`}>
            <rect x="62" y="146" width="26" height="18" rx="4" fill={`url(#${uid}_metal)`} stroke="rgba(0,0,0,0.25)" strokeWidth="0.7" />
            <rect x="64" y="149" width="22" height="4" rx="2" fill="rgba(255,255,255,0.55)" opacity="0.6" />
            <rect x="64" y="159" width="22" height="3" rx="1.5" fill="rgba(0,0,0,0.25)" opacity="0.35" />
          </g>

          {/* Ring */}
          <g filter={`url(#${uid}_shadow)`}>
            <ellipse cx="75" cy="170" rx="18" ry="14" fill="none" stroke={`url(#${uid}_metal)`} strokeWidth="4" />
            <ellipse cx="75" cy="170" rx="14" ry="10.5" fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth="1" opacity="0.35" />
          </g>

          {/* Hook */}
          <g filter={`url(#${uid}_shadow)`}>
            <path
              d="M82 174 C 93 179, 92 194, 78 196 C 64 198, 58 188, 63 180 C 67 173, 74 175, 76 179"
              fill="none"
              stroke={`url(#${uid}_metal)`}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M82 174 C 93 179, 92 194, 78 196"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.55"
            />
            <circle cx="75" cy="170" r="2" fill={`url(#${uid}_metalDark)`} opacity="0.8" />
          </g>
        </svg>
      </div>
    </div>
  );
};
