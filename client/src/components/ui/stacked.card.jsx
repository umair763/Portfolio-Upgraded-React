import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  Map,
  Paintbrush,
  Laptop,
  FlaskConical,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CARD_DATA = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Understanding your goals, audience, and requirements through in-depth consultation.",
    gradient: "from-[#0b1220] via-[#0f1720] to-[#08101a]",
  },
  {
    number: "02",
    icon: Map,
    title: "Planning",
    description:
      "Creating a detailed roadmap with milestones, deliverables, and timelines.",
    gradient: "from-[#071428] via-[#0b2a3a] to-[#06202b]",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Design",
    description:
      "Crafting wireframes and visual designs that align with your brand identity.",
    gradient: "from-[#241712] via-[#3b2a20] to-[#271714]",
  },
  {
    number: "04",
    icon: Laptop,
    title: "Development",
    description:
      "Building your solution with clean, efficient, and well-documented code.",
    gradient: "from-[#0b1020] via-[#17203a] to-[#0f1624]",
  },
  {
    number: "05",
    icon: FlaskConical,
    title: "Testing",
    description:
      "Rigorous quality assurance across devices, browsers, and performance metrics.",
    gradient: "from-[#062019] via-[#0b3b2b] to-[#07311f]",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch",
    description:
      "Deploying your project and providing training for a smooth handoff.",
    gradient: "from-[#1a1120] via-[#2a1830] to-[#16101f]",
  },
];

// Lightweight Spotlight wrapper, forwards ref so GSAP can animate the card element
const SpotlightCard = React.forwardRef(
  ({ children, className = "", spotlightColor = "rgba(0,229,255,0.12)" }, ref) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
      if (!divRef.current || isFocused) return;
      const rect = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(0.9);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };

    const handleMouseEnter = () => setOpacity(0.9);
    const handleMouseLeave = () => setOpacity(0);

    return (
      <div
        ref={(node) => {
          divRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out"
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor} 0%, transparent 60%)`,
            mixBlendMode: "screen",
          }}
        />
        {children}
      </div>
    );
  }
);

export const StackedCard = ({ cards = CARD_DATA }) => {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const cardWrapperRefs = useRef([]);

  useLayoutEffect(() => {
    if (!wrapperRef.current) return;
    if (!cardRefs.current.length) return;
    if (!cardWrapperRefs.current.length) return;

    const ctx = gsap.context(() => {
      cardWrapperRefs.current.forEach((wrapper, i) => {
        const card = cardRefs.current[i];
        let scale = 1,
          rotation = 0;
        if (i !== cards.length - 1) {
          scale = 0.9 + 0.025 * i;
          rotation = -10;
        }
        gsap.to(card, {
          scale,
          rotationX: rotation,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top " + (60 + 10 * i),
            end: "bottom 550",
            endTrigger: wrapperRef.current,
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            invalidateOnRefresh: true,
            // markers: true, // Uncomment for debugging
            id: i + 1,
          },
        });
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, [cards.length]);

  return (
    <>
      <div className="spacer w-full " />
      <div ref={wrapperRef} className="wrapper w-full py-[100px] ">
        <div className="cards w-[90%] max-w-[1000px] mx-auto px-[50px]">
          {cards.map((card, i) => (
            <div
              key={`${card.number}-${i}`}
              ref={(el) => (cardWrapperRefs.current[i] = el)}
              className={`card-wrapper w-full mb-[50px] last:mb-0 perspective-[500px]`}
            >
              <SpotlightCard
                ref={(el) => (cardRefs.current[i] = el)}
                className={`card w-full h-[400px] flex justify-center items-center text-[30px] rounded-xl text-black shadow-xl bg-gradient-to-br ${card.gradient}`}
                spotlightColor={"rgba(0, 229, 255, 0.08)"}
              >
                {/* Card content layout preserved */}
                <div className="flex flex-col items-center w-full text-white">
                  <div className="font-mono mb-2 ">{card.number}</div>
                  <div className="mb-6 text-5xl" aria-hidden>{card.icon && React.createElement(card.icon, { size: 48, color: "#ffffff" })}</div>
                  <h3 className="mb-4 text-2xl font-semibold">{card.title}</h3>
                  <p className="text-base max-w-[80%] mx-auto text-center ">{card.description}</p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
      <div className="spacer w-full mb-20" />
    </>
  );
};
