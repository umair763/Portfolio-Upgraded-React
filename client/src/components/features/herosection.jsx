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
  ChevronDown,
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
import DynamicBg from "../ui/dynamic.bg";
import { Waves } from "../common/waves";

export const HeroSection = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // show hint when near the top, hide when user scrolls down
      if (window.scrollY > 20) setShowScrollHint(false);
      else setShowScrollHint(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const texts = [
    "scalable web app",
    "fast modern websites",
    "clean optimized code",
    "design api, data modeling, deployment on aws",
  ];

  return (
    <section className="relative w-full md:h-screen lg:h-screen overflow-hidden bg-[#d9b99b]">
      {/* Content */}
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between relative z-30 px-6 pt-16 pb-0 h-full min-h-[calc(100vh-110px)]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-end gap-6 max-w-xl pb-[140px]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#006580] leading-tight font-['Proza_Libre']">
            Muhammad
            <br /> Umair
          </h1>
          <p className="text-2xl font-semibold text-[#1a2a36] mt-2 font-bold">
            I build
            <span className="font-mono text-[#006580] ml-1 font-bold">
              <TextTyping
                texts={texts}
                wait={1000} // Time to wait before switching text
                waitbt={50} // Time to wait before typing the next char
                speed={60} // Typing speed
              />
            </span>
          </p>
          <p className="text-2xl text-[#2d3c4a] max-w-lg mt-1 font-bold">
            Building <span className="italic">beautiful</span>,
            <span className="font-bold">performant</span> and accessible web
            experiences, from idea to deployment.
          </p>
          <div className="flex items-center gap-1 text-[#006580] mt-3">
            <span className="inline-flex items-center gap-1">
              <span className="w-[220px] font-bold">
                <TextSlideup
                  texts={[ 
                    <span className="flex items-center gap-1 font-bold">
                      <CheckCircle2
                        size={18}
                        className="inline-block align-middle shrink-0 "
                      />
                      Pixel-Perfect UI
                    </span>,
                    <span className="flex items-center gap-2 font-bold">
                      <Zap
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Performance First
                    </span>,
                    <span className="flex items-center gap-2 font-bold">
                      <Layers
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Modern Stack
                    </span>,
                    <span className="flex items-center gap-2 font-bold">
                      <Rocket
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      Open for work
                    </span>,
                    <span className="flex items-center gap-1 font-bold">
                      <Timer
                        size={18}
                        className="inline-block align-middle shrink-0"
                      />
                      20 hours response time
                    </span>,
                    <span className="flex items-center gap-1 font-bold">
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
            <button
              className="bg-[#19628a] cursor-pointer text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-[#0e4662] transition"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  if (history.replaceState) history.replaceState(null, '', '#projects');
                  else window.location.hash = '#projects';
                } else {
                  window.location.assign('/projects');
                }
              }}
            >
              View Projects
            </button>
            <button
              className="bg-gray-100/50 cursor-pointer text-[#1a2a36] font-semibold px-6 py-2 rounded-xl shadow hover:bg-gray-200 transition"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  if (history.replaceState) history.replaceState(null, '', '#contact');
                  else window.location.hash = '#contact';
                } else {
                  window.location.assign('/contact');
                }
              }}
            >
              Get in Touch
            </button>
            <button className="bg-sky-500 cursor-pointer text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-sky-600 transition flex items-center gap-2">
              <ArrowDownToLine size={20} />
              Resume
            </button>
          </div>
          {/* Socials */}
          <div className="flex gap-4 text-2xl text-[#006580] flex-wrap">
            <a
              href="#"
              className="p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580]"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580]"
              aria-label="Mail"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580]"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580]"
              aria-label="Twitter"
            >
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
      <DynamicBg
        lineColor="#006580"
        backgroundColor="rgba(255,255,255,0.02)"
        waveSpeedX={0.0125}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="z-10 pointer-events-none opacity-40"
      />
      {/* Waves overlay on top of everything */}
      <Waves className="z-50 pointer-events-none" />
      {/* Scroll hint (bottom center) */}
      <div
        aria-hidden
        className={`absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex flex-col items-center gap-2 transition-opacity duration-300 ease-out  ${
          showScrollHint ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight - 60, behavior: "smooth" });
          setShowScrollHint(false);
        }}
      >
        <span className="text-sm text-[#1a2a36] font-medium font-extrabold">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 text-[#1a2a36] scroll-arrow font-extrabold" />
      </div>
    </section>
  );
};
