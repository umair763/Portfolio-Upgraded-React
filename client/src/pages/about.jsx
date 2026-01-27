import React from "react";
import { motion } from "framer-motion";
import { HeroSection } from "../components/features/herosection";
import { JourneyCard } from "../components/ui";
import { Waves } from "../components/common/waves";
 
export const About = () => {
  return (
    <div className="w-full">
      <HeroSection />

      <section className="w-full bg-[#e4d5b7] py-10 overflow-x-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 overflow-x-hidden">
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
          <motion.div 
            className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center overflow-x-hidden"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ amount: 0.3 }}
            variants={{
              hidden: {
                transition: {
                  staggerChildren: 0.1,
                  staggerDirection: -1,
                },
              },
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Code Card */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={{
                hidden: {
                  x: -100,
                  opacity: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              <motion.div 
                className="w-full max-w-[520px] rounded-2xl bg-black/80 shadow-[0_18px_45px_rgba(0,0,0,0.20)] overflow-hidden"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
                  <span className="text-[#c792ea]">const</span>
                  <span className="text-[#82aaff]">developer</span>
                  <span className="text-white">= {"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    nickName
                  </span>: <span className="text-[#c3e88d]">'Beardguy'</span>,
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">fullName</span>:
                  <span className="text-[#c3e88d]">'Muhammad Umair'</span>,
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">role</span>:
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
                  <span className="text-[#ffcb6b]">availability</span>:
                  <span className="text-[#c3e88d]">
                    'Open to opportunities'
                  </span>
                  ,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">hardWorker</span>
                  : <span className="text-[#f78c6c]">true</span>,{"\n"}
                  &nbsp;&nbsp;
                  <span className="text-[#ffcb6b]">quickLearning</span>:
                  <span className="text-[#f78c6c]">true</span>,{"\n"}
                  &nbsp;&nbsp;
                  <span className="text-[#ffcb6b]">problemSolver</span>:
                  <span className="text-[#f78c6c]">true</span>,{"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    hireable
                  </span>: <span className="text-[#82aaff]">function</span>()
                  <span className="text-white">{"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#89ddff]">return</span>
                  <span className="text-[#f78c6c]">true</span>;{"\n"}
                  &nbsp;&nbsp;<span className="text-white">{"}"},</span>
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-[#ffcb6b]">
                    connect
                  </span>: <span className="text-[#82aaff]">function</span>()
                  <span className="text-white">{"{"}</span>
                  {"\n"}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-[#89ddff]">return</span>
                  <span className="text-[#c3e88d]">
                    "Let's build something amazing together!"
                  </span>
                  ;{"\n"}
                  &nbsp;&nbsp;<span className="text-white">{"}"}</span>
                  {"\n"}
                  <span className="text-white">{"}"};</span>
                </pre>
              </motion.div>
            </motion.div>

            {/* Introduction */}
            <motion.div 
              className="text-[#006580]"
              variants={{
                hidden: {
                  x: 100,
                  opacity: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-extrabold tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                My Introduction
              </motion.h3>
              <motion.div 
                className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-black/70"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p>
                  I am an <span className="font-semibold text-black/85">IT graduate</span> with a CGPA of <span className="font-semibold text-black/85">3.5+</span>, reflecting my dedication and discipline. My technical expertise lies in the <span className="font-semibold text-black/85">MERN</span> stack (MongoDB, Express.js, React, Node.js), with a particular focus on <span className="font-semibold text-black/85">backend development</span>. I have a good understanding of designing <span className="font-semibold text-black/85">RESTful APIs</span>, <span className="font-semibold text-black/85">database modeling</span>, and <span className="font-semibold text-black/85">cloud deployment</span> using AWS. Rather than just writing scripts, I prioritize clean coding practices and conventions.
                </p>
                <p>
                  With a keen interest in problem-solving and designing architecture for complex systems, I am continuously refining my ability to understand system operations while considering key factors like <span className="font-semibold text-black/85">security</span>, <span className="font-semibold text-black/85">scalability</span>, and <span className="font-semibold text-black/85">reliability</span>. Always striving to improve, I'm eager to take on new challenges and build efficient, robust systems.
                </p>
                <p>
                  In short: I build with
                  <span className="font-semibold text-black/85 ml-1">purpose</span>,
                  design with
                  <span className="font-semibold text-black/85"> intent</span>,
                  and stay
                  <span className="font-semibold text-black/85"> curious</span>.
                </p>
              </motion.div>

              <motion.div 
                className="mt-8 flex flex-wrap gap-3"
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
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
