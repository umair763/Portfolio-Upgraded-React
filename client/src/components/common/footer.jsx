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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-umair-khan-012549265/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/umair763", label: "GitHub" },
  { icon: Globe, href: "https://www.upwork.com/freelancers/~0118077421d2458c2f", label: "Upwork" },
  { icon: Gamepad2, href: "https://discord.com/channels/@me", label: "Discord" },
  { icon: X, href: "https://x.com/Umairkhan039", label: "X" },
  {
    icon: MessageCircle,
    href: "https://wa.me/03405688540",
    label: "WhatsApp",
  },
  { icon: Mail, href: "mailto:muhammadumairkhan945@gmail.com", label: "Mail" },
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
            I’m a full-stack developer specializing in the MERN stack (MongoDB,
            Express.js, React, Node.js), with a focus on backend development. I
            prioritize clean, scalable code, adhering to best practices.
            Passionate about solving complex problems, I design systems that are
            secure, scalable, and reliable. Always learning, I’m ready to take
            on new challenges and build efficient solutions.
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
                  <button
                    className="hover:underline text-gray-800 cursor-pointer"
                    onClick={() => {
                      const el = document.getElementById(link.href.slice(1));
                      if (el) {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                        if (history.replaceState)
                          history.replaceState(null, "", link.href);
                        else window.location.hash = link.href;
                      } else {
                        window.location.assign(link.href);
                      }
                    }}
                  >
                    {link.label}
                  </button>
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
                href="mailto:muhammadumairkhan945@gmail.com"
                className="hover:underline text-gray-800"
              >
                muhammadumairkhan945@gmail.com
              </a>
            </div>
            <div className="mb-4 flex items-center gap-2 text-[15px]">
              <span className="font-medium">P:</span>
              <a
                href="tel:+92304588540"
                className="hover:underline text-gray-800"
              >
                +92 340 588540
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
                  className="inline-flex p-1 rounded-lg text-gray-200 hover:text-white bg-[#006580] items-center justify-center w-8 h-8 rounded transition-colors"
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
