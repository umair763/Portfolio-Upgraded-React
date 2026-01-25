import React from "react";
import { StackedScrollCards } from "../components/ui";
import { Waves } from "../components/common/waves";

export const Projects = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b]">
      <div className="relative mx-auto w-full px-6 ">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#006580]">
            Featured Projects
          </h2>
          <p className="mt-2 text-lg md:text-xl text-black/70">
            A collection of projects I've <span className="italic">built </span>
            and <span className="font-bold mr-1">contributed</span>to
          </p>
        </div>
        <div className="mt-10 max-w-3xl text-center mx-auto">
          <p>
            Here you'll find a mix of
            <span className="font-bold mr-1">
              own products, commercial projects, client work
            </span>
            and a few experiments that turned into real tools. Each project
            shows how I approach frontend, code architecture, design and user
            experience, always focusing on things that can actually be used,
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
