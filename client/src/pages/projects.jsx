import React from "react";
import { StackedScrollCards } from "../components/ui";
import { Waves } from "../components/common/waves";
 
export const Projects = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b]">
      <div className="relative mx-auto w-full px-0 md:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className=" mt-5 text-5xl md:text-7xl font-extrabold tracking-tight text-[#006580]">
            Featured Projects
          </h2>
          <p className="mt-3 text-lg md:text-3xl text-black/70 font-semibold">
            A collection of projects I have <span className="italic">built </span>
            and <span className="font-bold mr-1">contributed</span>to
          </p>
        </div>
        <div className="mt-10 max-w-3xl text-center mx-auto">
          <p>
            Here you'll find a mix of
            <span className="font-bold mr-1 ml-1">
              side projects, contributions and freelance work.
            </span> Each project
            shows how I approach frontend, code architecture, design and backend api's, data handling, and security; always focusing on things that can actually be used,
            maintained and scaled.
          </p>
        </div>
        <div className="w-full">
          <StackedScrollCards />
        </div>
      </div>
      <div className="w-full pointer-events-none relative z-10">
        <Waves />
      </div>
    </section>
  );
};
