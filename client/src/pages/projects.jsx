import React from "react";
import { StackedScrollCards } from "../components/ui";
import { Waves } from "../components/common/waves";
 
export const Projects = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] pt-4 sm:pt-6">
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#006580]">
            Featured Projects
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-2xl text-black/70 font-semibold">
            A collection of projects I have <span className="italic">built </span>
            and <span className="font-bold mr-1">contributed</span>to
          </p>
        </div>
        <div className="mt-6 sm:mt-8 max-w-3xl text-center mx-auto px-4">
          <p className="text-sm sm:text-base md:text-lg text-black/75 leading-relaxed">
            Here you’ll find a mix of my{" "}
            <span className="font-bold text-black/90">
              side projects, Professional Job experience in SaaS products, and freelance
              client projects.
            </span>{" "}
            Each project reflects how I approach frontend development, backend APIs,
            architecture, design, data handling, and security with a focus on
            building solutions that are practical, maintainable, and scalable.
          </p>
        </div>
        <div className="w-full mt-6 sm:mt-10">
          <StackedScrollCards />
        </div>
      </div>
      <div className="w-full pointer-events-none relative z-10">
        <Waves />
      </div>
    </section>
  );
};
