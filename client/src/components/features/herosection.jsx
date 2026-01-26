import React, { useState, useEffect } from "react";
import profileImg from "../../assets/images/noBG.png";
import {
  Linkedin,
  Facebook,
  Github,
  Twitter,
  Coffee,
  Mail,
  Dribbble,
  Instagram,
} from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import {
  CheckCircle2,
  Zap,
  Layers,
  Rocket,
  Timer,
  FileCode,
} from "lucide-react";
import { TextTyping } from "../ui";
import { TextSlideup } from "../ui/text.slideup";
import { Waves } from "../common/waves";
// ...existing code...

export const HeroSection = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // show hint when near the top, hide when user scrolls down
      if (window.scrollY > 20) setShowScrollHint(false);
      else setShowScrollHint(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const texts = [
    "scalable web app",
    "fast modern websites",
    "clean optimized code",
    "design api, data modeling, deployment on aws",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#d9b99b]">
      {/* Content */}
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between relative z-10 px-6 pt-16 pb-0 h-full min-h-[calc(100vh-110px)]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-end gap-6 max-w-xl pb-[140px]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#006580] leading-tight">
            Muhammad
            <br /> Umair
          </h1>
          <p className="text-2xl font-semibold text-[#1a2a36] mt-2">
            I build
            <span className="font-mono text-[#006580] ml-1">
              <TextTyping
                texts={texts}
                wait={1000} // Time to wait before switching text
                waitbt={50} // Time to wait before typing the next char
                speed={60} // Typing speed
              />{" "}
            </span>
          </p>
          <p className="text-2xl text-[#2d3c4a] max-w-lg mt-1">
            Building <span className="italic">beautiful</span>,
            <span className="font-bold">performant</span> and accessible web
            experiences, from idea to deployment.
          </p>
          <div className="flex items-center gap-2 text-[#006580] text-base mt-3">
            <span className="inline-flex items-center gap-1">
              <span className="w-[220px]">
                <TextSlideup
                  texts={[
                    <span className="flex items-center gap-2">
                      <CheckCircle2
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Pixel-Perfect UI + Clean
                    </span>,
                    <span className="flex items-center gap-2">
                      <Zap
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Performance First
                    </span>,
                    <span className="flex items-center gap-2">
                      <Layers
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Modern Stack
                    </span>,
                    <span className="flex items-center gap-2">
                      <Rocket
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Open for work
                    </span>,
                    <span className="flex items-center gap-2">
                      <Timer
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      20 hours response time
                    </span>,
                    <span className="flex items-center gap-2">
                      <FileCode
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Code ownership
                    </span>,
                  ]}
                  interval={3000}
                />
              </span>
            </span>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <button className="bg-[#19628a] cursor-pointer text-white font-semibold px-6 py-2 rounded-2xl shadow hover:bg-[#0e4662] transition">
              View Projects
            </button>
            <button className="bg-gray-100/30 cursor-pointer text-[#1a2a36] font-semibold px-6 py-2 rounded-2xl border border-white shadow hover:bg-gray-200 transition">
              Get in Touch
            </button>
            <button className="bg-sky-500 cursor-pointer text-white font-semibold px-6 py-2 rounded-2xl shadow hover:bg-sky-600 transition flex items-center gap-2">
              <ArrowDownToLine size={20} />
              Resume
            </button>
          </div>
          {/* Socials */}
          <div className="flex gap-4 text-2xl text-[#006580] flex-wrap">
            <a href="#" className="hover:text-[#19628a]" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Github">
              <Github size={20} />
            </a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Mail">
              <Mail size={20} />
            </a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        {/* Right: Image with Circle */}
        <div className="flex-1 flex items-end justify-center relative min-w-[350px]">
          {/* Light beige circle with shadow */}
          <div className="absolute left-1/2 bottom-30 -translate-x-1/2 translate-y-1/2 w-[420px] h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] rounded-full bg-[[#e4d5b7] shadow-[0_8px_92px_0_rgba(0,0,0,0.18)] z-0"></div>
          <img
            src={profileImg}
            alt="Profile"
            className="relative bottom-6 z-10 w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] drop-shadow-2xl"
            draggable="false"
          />
          {/* UI/UX Designer Badge /*/}
          {/* <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-white/90 rounded-full shadow-lg px-8 py-3 flex items-center gap-2 border border-gray-200 z-20">
            <span className="font-bold text-[#006580]">UI/UX</span> <span className="text-[#1a2a36]">Designer</span>
          </div> */}
        </div>
      </div>
      <Waves />
      {/* Scroll hint (bottom center) */}
      <div
        aria-hidden
        className={`absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex flex-col items-center gap-2 transition-opacity duration-300 ease-out ${
          showScrollHint ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight - 60, behavior: 'smooth' });
          setShowScrollHint(false);
        }}
      >
        <span className="text-sm text-[#1a2a36] font-medium">Scroll</span>
        <svg
          className="w-6 h-6 text-[#1a2a36] scroll-arrow"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};
