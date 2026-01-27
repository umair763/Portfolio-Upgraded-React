import React from "react";

import { About, Skills, Projects, Services, Contact } from "../../pages";
import { navbar as Navbar } from "../common/navbar";
import { Footer } from "../common/footer";
 
export const MainLayout = () => {
  return (
    <div className="bg-[#e4d5b7]">
      <div className="flex flex-col flex-1 min-h-screen">
        <div className="flex flex-col flex-1">
          <section id="about" className="scroll-mt-24">
            <About />
          </section>
          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          <section id="services" className="scroll-mt-24">
            <Services />
          </section>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </div>
        <div className="mt-4 bg-gray-50">
          <Footer />
        </div>
      </div>
      {/* Navbar is now hovered above all content, not inside the layout columns */}
      <Navbar />
    </div>
  );
};
