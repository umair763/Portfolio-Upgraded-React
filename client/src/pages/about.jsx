import React from "react";
import { HeroSection } from "../components/features/herosection";
import { JourneyCard } from "../components/ui";
import { Waves } from "../components/common/waves";

export const About = () => {
  return (
    <div className="w-full">
      <HeroSection />

      <section className="w-full bg-[#e4d5b7] py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#006580]">
              About Me
            </h2>
            <p className="mt-3 text-lg md:text-xl text-black/70">
              Get to know me through <span className="italic">code</span>
            </p>
          </div>

          {/* Content */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Code Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[520px] rounded-2xl bg-black/80 shadow-[0_18px_45px_rgba(0,0,0,0.20)] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm font-semibold text-white font-mono">
                    developer.js
                  </span>
                </div>
                <pre
                  className="px-6 py-6 text-[13px] leading-6 whitespace-pre-wrap font-mono"
                  style={{ background: "transparent" }}
                >
                  <span className="text-[#c792ea]">const</span>{" "}
                  <span className="text-[#82aaff]">developer</span>{" "}
                  <span className="text-white">= {"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    nickName
                  </span>: <span className="text-[#c3e88d]">'Beardguy'</span>,
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    fullName
                  </span>:{" "}
                  <span className="text-[#c3e88d]">'Muhammad Umair'</span>,
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">role</span>:{" "}
                  <span className="text-[#c3e88d]">'Full-Stack Developer'</span>
                  ,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    focus
                  </span>: <span className="text-[#89ddff]">[</span>
                  <span className="text-[#c3e88d]">
                    'backend', 'web performance', 'clean UI'
                  </span>
                  <span className="text-[#89ddff]">]</span>,{"\n"}
                  &nbsp;&nbsp;
                  <span className="text-[#ffcb6b]">availability</span>:{" "}
                  <span className="text-[#c3e88d]">
                    'Open to opportunities'
                  </span>
                  ,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">hardWorker</span>
                  : <span className="text-[#f78c6c]">true</span>,{"\n"}
                  &nbsp;&nbsp;
                  <span className="text-[#ffcb6b]">quickLearning</span>:{" "}
                  <span className="text-[#f78c6c]">true</span>,{"\n"}
                  &nbsp;&nbsp;
                  <span className="text-[#ffcb6b]">problemSolver</span>:{" "}
                  <span className="text-[#f78c6c]">true</span>,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    hireable
                  </span>: <span className="text-[#82aaff]">function</span>(){" "}
                  <span className="text-white">{"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#89ddff]">return</span>{" "}
                  <span className="text-[#f78c6c]">true</span>;{"\n"}
                  &nbsp;&nbsp;<span className="text-white">{"}"},</span>
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    connect
                  </span>: <span className="text-[#82aaff]">function</span>(){" "}
                  <span className="text-white">{"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#89ddff]">return</span>{" "}
                  <span className="text-[#c3e88d]">
                    "Let's build something amazing together!"
                  </span>
                  ;{"\n"}
                  &nbsp;&nbsp;<span className="text-white">{"}"}</span>
                  {"\n"}
                  <span className="text-white">{"}"};</span>
                </pre>
              </div>
            </div>

            {/* Introduction */}
            <div className="text-[#006580]">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                My Introduction
              </h3>
              <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-black/70">
                <p>
                  I'm a{" "}
                  <span className="font-semibold text-black/85">developer</span>{" "}
                  focused on building modern, fast, and accessible web
                  experiences. I love working on
                  <span className="font-semibold text-black/85">
                    {" "}
                    frontend
                  </span>{" "}
                  where code meets design.
                </p>
                <p>
                  I enjoy crafting{" "}
                  <span className="font-semibold text-black/85">
                    pixel-perfect
                  </span>{" "}
                  interfaces, optimizing performance, and keeping code clean and
                  maintainable. I’m always learning and iterating.
                </p>
                <p>
                  In short: I build with{" "}
                  <span className="font-semibold text-black/85">purpose</span>,
                  design with
                  <span className="font-semibold text-black/85"> intent</span>,
                  and stay
                  <span className="font-semibold text-black/85"> curious</span>.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-[#e4d5b7] px-4 py-2 text-sm font-semibold text-black/75 shadow-sm">
                  Clean UI
                </span>
                <span className="inline-flex items-center rounded-full bg-[#d9b99b] px-4 py-2 text-sm font-semibold text-black/75 shadow-sm">
                  Performance
                </span>
                <span className="inline-flex items-center rounded-full bg-[#e4d5b7] px-4 py-2 text-sm font-semibold text-black/75 shadow-sm">
                  Accessibility
                </span>
                <span className="inline-flex items-center rounded-full bg-[#d9b99b] px-4 py-2 text-sm font-semibold text-black/75 shadow-sm">
                  Modern Stack
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <JourneyCard />
          <div className="absolute left-0 bottom-0 w-full pointer-events-none">
            <Waves />
          </div>
        </div>
      </section>
    </div>
  );
};
