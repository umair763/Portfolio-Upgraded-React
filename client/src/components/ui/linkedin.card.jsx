import React from "react";
import profileimg from "../../assets/images/noBG.png";

export const LinkedinCard = ({
  name = "Muhammad Umair",
  title = "Full Stack Developer",
  company = "Your Company Ltd.",
  idNumber = "123456789",
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-[380px] sm:max-w-[450px] aspect-[3/4] bg-gradient-to-b from-[#002e45] to-[#00486b] rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Vertical Stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-b from-[#0A66C2] via-[#0077B5] to-[#005582] flex items-center justify-center">
          <div className="transform -rotate-90 whitespace-nowrap">
            <p className="font-bold text-sm sm:text-base md:text-2xl tracking-[0.3em] uppercase text-white font-['Proza_Libre']">
              Linkedin
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-16 sm:ml-20 h-full flex flex-col items-center justify-start px-2 sm:px-3 py-8 sm:py-10">
          {/* Photo Frame */}
          <div className="mb-4 sm:mb-6 sm:p-3 mt-3">
            <div className="w-28 h-30 sm:w-44 sm:h-50 relative overflow-hidden">
              <img
                src={profileimg}
                alt={name}
                className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_80%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-amber-500 text-xl sm:text-2xl font-serif mb-1 sm:mb-2 text-center">
            {name}
          </h3>

          {/* Title */}
          <p className="text-amber-500/80 text-sm sm:text-base mb-2 sm:mb-4 text-center">
            {title}
          </p>

          {/* Company Name */}
          {/* <h2 className="text-amber-500 text-lg sm:text-xl font-serif mb-6 sm:mb-8 tracking-wide">
            {company}
          </h2> */}

          {/* ID Number */}
          <p className="text-amber-500/70 text-xs sm:text-sm ">
            ID #{idNumber}
          </p>

          <div className="grid grid-cols-1 gap-2 w-full max-w-sm mx-auto shadow-lg rounded-lg mt-6 sm:mt-16 text-white">
            {/* Tabs */}
            <div className="grid grid-cols-3 text-center gap-1">
              <div className="py-2 bg-[#0077B5] rounded-lg">
                <p className="text-xs sm:text-base md:text-base lg:text-base">
                  Followers
                </p>
                <p className="font-bold text-lg">558</p>
              </div>
              <div className="py-2 bg-[#0077B5] rounded-lg">
                <p className="text-xs sm:text-base md:text-base lg:text-base">
                  Connections
                </p>
                <p className="font-bold text-lg">1.1k</p>
              </div>
              <div className="py-2 bg-[#0077B5] rounded-lg">
                <p className="text-xs sm:text-base md:text-base lg:text-base">
                  Impressions
                </p>
                <p className="font-bold text-lg">674</p>
              </div>
            </div>

            {/* Connect Button */}
            <button className="w-full bg-[#0077B5] hover:bg-[#5CABED] cursor-pointer text-white font-semibold py-2 px-2 rounded-md transition-colors">
              Connect
            </button>
          </div>
        </div>

        {/* Hole Punch Effect */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 sm:w-14 h-6 sm:h-7 bg-slate-900 rounded-b-full border-2 border-slate-700 shadow-inner"></div>
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-3 sm:h-4 bg-gradient-to-b from-slate-600 to-slate-700 rounded-full"></div>
      </div>
    </div>
  );
};
