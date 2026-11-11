import React from "react";
import { Waves } from "../components/common/waves";
import { MarqueesScroll } from "../components/ui/marquees.scroll";
import { Code2, Server, CloudCog } from "lucide-react";
import { StackedCard } from "../components/ui/stacked.card";

export const Services = () => {
  const services = [
    {
      id: "frontend",
      icon: <Code2 className="h-10 w-10 text-[#006580]" />,
      title: "Frontend Development",
      description:
        "Modern, responsive UI builds with clean architecture and great UX performance.",
      checkmark: [
        "React + Vite UI development",
        "Vue UI development",
        "Responsive layouts with Tailwind",
        "Animations and micro-interactions",
        "Accessibility-first components",
      ],
      ctaLabel: "Start Your Project",
      ctaHref: "/contact",
    },
    {
      id: "backend",
      icon: <Server className="h-10 w-10 text-[#006580]" />,
      title: "Backend Development",
      description:
        "Reliable APIs and server-side systems built for speed, scale, and maintainability.",
      checkmark: [
        "REST API design and integration",
        "Database modeling & integration",
        "Auth, roles, and security",
        "Performance monitoring",
      ],
      ctaLabel: "Start Your Project",
      ctaHref: "/contact",
    },
    {
      id: "devops",
      icon: <CloudCog className="h-10 w-10 text-[#006580]" />,
      title: "DevOps & Deployment",
      description:
        "Production-ready deployments, CI/CD, and environments that keep projects running smoothly.",
      checkmark: [
        "CI/CD pipeline setup",
        "Dockerized deployments",
        "Environment + secrets management",
        "Logging & uptime monitoring",
      ],
      ctaLabel: "Start Your Project",
      ctaHref: "/contact",
    },
  ];
 
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] pt-4 sm:pt-6 pb-20 sm:pb-28">
      {/* Header Container */}
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#006580]">
            What I Can Do For You
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-2xl text-black/70 font-semibold">
            Professional services to bring your vision to
            <span className="font-bold ml-1">life</span>
          </p>
        </div>
      </div>

      {/* MarqueesScroll: Full-bleed width across screen */}
      <div className="w-full mt-6 sm:mt-8">
        <MarqueesScroll items={services} />
      </div>

      {/* How I Work Section Container */}
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#006580]">
            How I Work
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-2xl text-black/70 font-semibold">
            A structured approach to deliver quality results
          </p>
        </div>
        <div className="w-full h-full">
          <StackedCard />
        </div>
      </div>
      <Waves className="z-10" />
    </section>
  );
};
