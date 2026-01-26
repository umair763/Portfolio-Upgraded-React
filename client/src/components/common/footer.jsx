import React from "react";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Phone,
  Coffee,
  Gamepad2,
  User,
  MessageCircle,
  ArrowUpRight,
  Globe,
  X,
} from "lucide-react";

const exploreLinks = [
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Goodies", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Globe, href: "https://upwork.com", label: "Upwork" },
  { icon: Gamepad2, href: "https://discord.com", label: "Discord" },
  { icon: X, href: "https://x.com", label: "X" },
  { icon: Coffee, href: "https://buymeacoffee.com", label: "Coffee" },
  {
    icon: MessageCircle,
    href: "https://wa.me/543442453797",
    label: "WhatsApp",
  },
  { icon: Mail, href: "mailto:hello@qazuoR.com", label: "Mail" },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] text-gray-900 pt-8 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-500 mb-15"></div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            About <span className="font-normal">—</span>
          </h3>
          <p className="text-[15px] text-gray-800 leading-relaxed">
            Hi, I'm a passionate full-stack developer specializing in modern web
            apps and UI/UX. I love building clean, scalable solutions and
            collaborating on creative projects. Let's connect and make something
            awesome together!
          </p>
        </div>
        {/* Explore + Contact me stacked in one column */}
        <div>
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Explore <span className="font-normal">—</span>
            </h3>
            <ul className="space-y-1 text-[15px] mb-8">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:underline text-gray-800">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              Contact me <span className="font-normal">—</span>
            </h3>
            <div className="mb-2 flex items-center gap-2 text-[15px]">
              <span className="font-medium">E:</span>
              <a
                href="mailto:hello@qazuoR.com"
                className="hover:underline text-gray-800"
              >
                hello@qazuoR.com
              </a>
            </div>
            <div className="mb-4 flex items-center gap-2 text-[15px]">
              <span className="font-medium">P:</span>
              <a
                href="tel:+543442453797"
                className="hover:underline text-gray-800"
              >
                +54 3442 453797
              </a>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-8 h-8 rounded bg-gray-200 hover:bg-blue-700 hover:text-white text-gray-800 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-500"></div>
    </footer>
  );
};
