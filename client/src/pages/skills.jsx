import React from "react";
import { TechnicalCard } from "../components/ui";
import { CreativeCard } from "../components/ui";
import { Waves } from "../components/common/waves";

export const Skills = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] pb-12 sm:pb-16">
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#006580] mt-4 sm:mt-6">
              Skills
            </h2>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-2xl text-black/70 font-semibold">
              Technologies I work <span className="italic">with</span>
            </p>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 justify-center items-start">
            <div className="w-full max-w-[560px] mx-auto">
              <TechnicalCard />
            </div>
            <div className="w-full max-w-[560px] mx-auto">
              <CreativeCard />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full pointer-events-none relative z-10">
        <Waves />
      </div>
    </>
  );
};
