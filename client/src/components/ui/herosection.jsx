import React from 'react';
import profileImg from '../../assets/images/noBG.png';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#e4d5b7]">
      {/* Content */}
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-end justify-between relative z-10 px-6 pt-16 pb-0 h-full min-h-[calc(100vh-110px)]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-end gap-6 max-w-xl pb-[140px]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#006580] leading-tight">
            Muhammad<br /> Umair
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#1a2a36]">
            I build <span className="font-mono text-[#006580]">brands</span> with <span className="italic font-mono text-[#006580]">identity</span>
          </p>
          <p className="text-lg md:text-xl text-[#2d3c4a] max-w-lg">
            Building <span className="italic">beautiful</span>, <span className="font-bold">performant</span> and accessible web experiences, from idea to deployment.
          </p>
          <div className="flex items-center gap-2 text-[#006580] text-base">
            <span className="inline-flex items-center gap-1"><span className="text-lg">⌘</span> Pixel-Perfect UI + Clean Architecture</span>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <button className="bg-[#19628a] text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-[#0e4662] transition">View Projects</button>
            <button className="bg-gray-100 text-[#1a2a36] font-semibold px-6 py-2 rounded-xl shadow hover:bg-gray-200 transition">Get in Touch</button>
            <button className="bg-sky-500 text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-sky-600 transition flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5"/></svg>
              Resume
            </button>
          </div>
          {/* Socials */}
          <div className="flex gap-3 mt-4 text-2xl text-[#006580] flex-wrap">
            <a href="#" className="hover:text-[#19628a]" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="hover:text-[#19628a]" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="hover:text-[#19628a]" aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Discord"><i className="fa-brands fa-discord"></i></a>
            <a href="#" className="hover:text-[#19628a]" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-[#19628a]" aria-label="Upwork"><i className="fa-brands fa-upwork"></i></a>
          </div>
        </div>
        {/* Right: Image with Circle */}
        <div className="flex-1 flex items-end justify-center relative min-w-[350px]">
          {/* Light beige circle with shadow */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[420px] h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#ede8dc] border border-gray-200 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] z-0"></div>
          <img
            src={profileImg}
            alt="Profile"
            className="relative z-10 w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] drop-shadow-2xl"
            style={{ position: 'relative', bottom: '0' }}
            draggable="false"
          />
          {/* UI/UX Designer Badge */}
          <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-white/90 rounded-full shadow-lg px-8 py-3 flex items-center gap-2 border border-gray-200 z-20">
            <span className="font-bold text-[#006580]">UI/UX</span> <span className="text-[#1a2a36]">Designer</span>
          </div>
        </div>
      </div>
      {/* Animated SVG Waves at Bottom */}
      <div className="absolute left-0 right-0 bottom-20 w-full overflow-hidden pointer-events-none select-none z-20">
        <div className="relative w-full h-[110px]">
          {/* Wave 1 */}
          <svg className="absolute left-0 top-0 w-full h-full wave-anim-1" viewBox="0 0 1920 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 Q480 120 960 60T1920 60V110H0V60Z" fill="#006580" fillOpacity="0.25" />
          </svg>
          {/* Wave 2 */}
          <svg className="absolute left-0 top-0 w-full h-full wave-anim-2" viewBox="0 0 1920 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80 Q480 40 960 80T1920 80V110H0V80Z" fill="#006580" fillOpacity="0.18" />
          </svg>
          {/* Wave 3 */}
          <svg className="absolute left-0 top-0 w-full h-full wave-anim-3" viewBox="0 0 1920 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q480 60 960 100T1920 100V110H0V100Z" fill="#006580" fillOpacity="0.12" />
          </svg>
          {/* Wave 4 */}
          <svg className="absolute left-0 top-0 w-full h-full wave-anim-4" viewBox="0 0 1920 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 90 Q480 110 960 90T1920 90V110H0V90Z" fill="#006580" fillOpacity="0.09" />
          </svg>
        </div>
      </div>
    </section>
  );
};
