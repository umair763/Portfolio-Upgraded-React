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
    <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] mt-20 ">
      <div className="relative mx-auto w-full px-1 md:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#006580]">
            What I Can Do For You
          </h2>
          <p className="mt-2 text-lg md:text-xl text-black/70">
            Professional services to bring your vision to
            <span className="font-bold ml-1">life</span>
          </p>
        </div>
        <div className="mt-10">
          <MarqueesScroll items={services} />
        </div>
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#006580]">
            How I Work
          </h2>
          <p className="mt-2 text-lg md:text-xl text-black/70">
            A structured approach to deliver quality results
          </p>
          <div className="ml-0 mr-0">
            <StackedCard />
          </div>
        </div>
      </div>
      <div className="w-full pointer-events-none relative z-10 pt-20">
        <Waves />
      </div>
    </section>
  );
};
