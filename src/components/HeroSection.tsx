import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RetellAgent from "./RetellAgent";

const HeroSection = () => {
  return (
    <section className="relative min-h-[120svh] flex items-center pt-14 xs:pt-16 sm:pt-20 lg:pt-24 pb-32 overflow-hidden">
      {/* Updated Background - Brighter and Lighter */}
      <div className="absolute inset-0 -z-10">
        {/* Brighter gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/30 via-transparent to-blue-400/20"></div>

        {/* More visible animated elements */}
        <div className="absolute top-20 left-10 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 bg-blue-300/15 rounded-full blur-3xl animate-float opacity-50"></div>
        <div
          className="absolute bottom-32 right-20 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-48 bg-blue-200/15 rounded-full blur-2xl animate-float opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-10 xs:w-12 sm:w-16 md:w-24 lg:w-32 h-10 xs:h-12 sm:h-16 md:h-24 lg:h-32 bg-blue-400/15 rounded-full blur-xl animate-float opacity-30"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center min-h-[77vh]">
          {/* Enhanced Left Side Content - Clean and Minimal */}
          <div className="text-center lg:text-left relative z-10 space-y-4 sm:space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0">
            {/* Enhanced Title - Gradient Back + Whiter Subtitle */}
            <h1 className="text-[2.2rem] xs:text-[2.75rem] sm:text-[3.4375rem] md:text-[4.125rem] lg:text-[4.84375rem] font-semibold leading-[1.1] tracking-[-0.03em]">
              The AI{" "}
              <span className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent">
                Client Retention
              </span>{" "}
              Platform Built for{" "}
              <span className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent">
                High-Volume
              </span>{" "}
              Law Firms
            </h1>

            {/* Enhanced Subtitle - Brighter Text */}
            <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-light text-blue-50/95 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Reduce client churn, improve service, and exponentially grow your
              firm without adding staff.
            </h2>
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
              <a
                href="/demo"
                className="group relative px-8 py-4 rounded-2xl overflow-hidden
                               bg-gradient-to-r from-blue-500 to-blue-600
                               shadow-[0_8px_32px_rgba(59,130,246,0.3)] 
                               hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                               w-full xs:w-auto text-[0.9375rem] xs:text-base sm:text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 xs:gap-3 font-semibold text-white">
                  Book a Personalized Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-white/80 text-base sm:text-lg mt-8">
              Used by leading mass tort firms handling Camp Lejeune, 3M,
              Roundup, and more.
            </p>
          </div>

          {/* Right Side - Enhanced Vanta Halo */}
          <div className="relative flex items-center justify-center min-h-[220px] xs:min-h-[275px] sm:min-h-[330px] md:min-h-[385px] lg:min-h-[440px] xl:min-h-[495px] mt-6 xs:mt-8 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-blue-500/10 to-purple-500/20 blur-3xl"></div>

            {/* RetellAgent Component with responsive sizing */}
            <RetellAgent />
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
