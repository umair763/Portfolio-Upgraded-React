import { useEffect, useMemo, useState } from "react";
import { User, BadgeCheck, FolderKanban, Briefcase, Mail, ArrowDown, ArrowUp } from "lucide-react";

const TRACK_IDS = ["about", "skills", "projects", "services", "contact"];

export const navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("#about");

  const [isMobile, setIsMobile] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "About", href: "#about", icon: <User size={26} /> },
      { label: "Skills", href: "#skills", icon: <BadgeCheck size={26} /> },
      {
        label: "Projects",
        href: "#projects",
        icon: <FolderKanban size={26} />,
      },
      { label: "Services", href: "#services", icon: <Briefcase size={26} /> },
      { label: "Contact", href: "#contact", icon: <Mail size={26} /> },
    ],
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onMedia = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    onMedia();

    let ticking = false;
    const computeActive = () => {
      const viewportH = window.innerHeight || 800;
      const offsetLine = Math.round(viewportH * 0.35);

      const candidates = TRACK_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const distToOffset = Math.abs(rect.top - offsetLine);
        const crossesOffset =
          rect.top <= offsetLine && rect.bottom >= offsetLine;
        const center = rect.top + rect.height / 2;
        const centerDist = Math.abs(center - viewportH / 2);
        return { id, distToOffset, crossesOffset, centerDist };
      }).filter(Boolean);

      if (candidates.length === 0) return;

      const crossing = candidates.filter((c) => c.crossesOffset);
      const chosenList = crossing.length > 0 ? crossing : candidates;
      chosenList.sort(
        (a, b) =>
          a.distToOffset - b.distToOffset || a.centerDist - b.centerDist,
      );
      const chosen = chosenList[0];
      const next = `#${chosen.id}`;
      setActiveSection((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      setAtTop(window.scrollY < 40);
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          computeActive();
          ticking = false;
        });
      }
    };

    const timer = window.setTimeout(() => computeActive(), 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("resize", onMedia);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", onMedia);
    };
  }, []);

  const scrollToHash = (hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) history.replaceState(null, "", hash);
    else window.location.hash = hash;
  };

  return (
    <>
      <nav className="fixed z-50 border border-gray-200 bg-gray-100 shadow-md backdrop-blur-md
        bottom-3 left-1/2 -translate-x-1/2 rounded-4xl px-4 py-3 flex flex-row items-center justify-center gap-4 w-[calc(100%-1.5rem)] max-w-[520px]
        md:top-1/2 md:right-4 md:left-auto md:bottom-auto md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:px-2 md:py-6 md:gap-6 md:w-[60px]">
        {navItems.map((item) => {
          const isActive = activeSection === item.href;
          return (
            <button
              key={item.label}
              title={item.label}
              onClick={() => scrollToHash(item.href)}
              className={`cursor-pointer rounded-full transition-colors duration-200 flex items-center justify-center
                w-10 h-10 md:w-10 md:h-10
                ${isActive ? "bg-[#006580]/15 text-[#006580] shadow-lg ring-1 ring-[#006580]/30" : "hover:bg-gray-200 text-gray-800"}`}
              aria-label={item.label}
            >
              {isMobile ? (
                <span className="[&>svg]:h-[22px] [&>svg]:w-[22px]">{item.icon}</span>
              ) : (
                item.icon
              )}
            </button>
          );
        })}
      </nav>
      {/* Scroll to top/bottom button */}
      <button
        className="fixed z-50 bg-[#006580] text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center hover:bg-[#19628a] transition-colors border-2 border-white cursor-pointer
          right-4 top-[calc(50%+180px)]
          md:right-4 md:top-[calc(50%+180px)]
          max-md:right-4 max-md:bottom-[92px] max-md:top-auto"
        style={{ outline: 'none' }}
        aria-label={atTop ? 'Scroll to bottom' : 'Scroll to top'}
        onClick={() => {
          if (atTop) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        {atTop ? <ArrowDown size={28} /> : <ArrowUp size={28} />}
      </button>
    </>
  );
};
