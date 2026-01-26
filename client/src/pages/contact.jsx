import React from "react";
import { Waves } from "../components/common/waves";
import { ContactForm } from "../components/ui";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-[#e4d5b7] to-[#d9b99b] pb-16 min-h-screen flex flex-col justify-between">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#006580]">
            Get In Touch
          </h2>
          <p className="mt-2 text-lg md:text-xl text-black/70">
            Have a project in mind? Let's work together!
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-7xl md:px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10 ml-4 mr-4">
            {/* Left Column: Contact Info */}
            <div className="rounded-2xl flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#a97443] mb-2 ">
                  Let's Talk
                </h2>
                <p className="text-gray-700 mb-2">
                  I'm open to any job opportunity: freelance, remote, full-time
                  or collaborations.
                </p>
                <p className="text-gray-700 mb-6">
                  Got a project in mind, need help with your{" "}
                  <span className="font-semibold">website</span>, or want a
                  second opinion on your current{" "}
                  <span className="font-semibold">code</span>?<br />
                  Reach out and we'll figure out what makes sense, priorities,
                  scope and next steps, no pressure, no fluff.
                </p>
                <div className="space-y-5 mb-6">
                  {/* Email */}
                  <div className="flex items-center gap-3 group">
                    <span className="bg-blue-100 text-[#b78654] rounded-full p-2 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Mail className="w-6 h-6" />
                    </span>
                    <div>
                      <div className="text-gray-700 text-sm font-medium">
                        Email
                      </div>
                      <a
                        href="mailto:muhammadumairkhan945@gmail.com"
                        className="font-semibold text-base text-[#b78654] hover:underline hover:text-[#a97443] transition-colors"
                      >
                        muhammadumairkhan945@gmail.com
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-3 group">
                    <span className="bg-blue-100 text-[#b78654] rounded-full p-2 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Phone className="w-6 h-6" />
                    </span>
                    <div>
                      <div className="text-gray-700 text-sm font-medium">
                        Phone
                      </div>
                      <a
                        href="tel:+923405688540"
                        className="font-semibold text-base text-[#b78654] hover:underline hover:text-[#a97443] transition-colors"
                      >
                        +92 340 5688540
                      </a>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-3 group">
                    <span className="bg-blue-100 text-[#b78654] rounded-full p-2 flex items-center justify-center transition-transform group-hover:scale-110">
                      <MapPin className="w-6 h-6" />
                    </span>
                    <div>
                      <div className="text-gray-700 text-sm font-medium">
                        Location
                      </div>
                      <div className="font-semibold text-base text-[#b78654]">
                        Islamabad, Pakistan
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-gray-600 text-sm mb-2">
                    Or connect via
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/muhammadumairkhan945"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-[#b78654] rounded-full p-2 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/muhammadumairkhan945"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-[#b78654] rounded-full p-2 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/muhammadumairkhan945"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-[#b78654] rounded-full p-2 transition-colors"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/923405688540"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-[#b78654] rounded-full p-2 transition-colors"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:muhammadumairkhan945@gmail.com"
                      className="bg-blue-100 hover:bg-blue-200 text-[#b78654] rounded-full p-2 transition-colors"
                    >
                      <FaPaperPlane className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Contact Form */}
            <div className="flex items-center justify-center">
              <ContactForm />
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
