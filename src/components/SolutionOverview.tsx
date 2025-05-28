import React from "react";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CallHalo from "./CallHalo";

const FeatureCard: React.FC<{
  title: string;
  descriptions: string[];
  delay?: number;
  gradient?: boolean;
}> = ({ title, descriptions, delay = 0, gradient = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group h-full transform-gpu ${gradient ? "z-10" : ""}`}
    >
      <div
        className={`p-8 h-full rounded-[2rem] backdrop-blur-xl relative z-10 flex flex-col
        ${
          gradient
            ? "bg-gradient-to-br from-accent/30 via-accent/20 to-accent/5 border border-accent/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
            : "bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
        }`}
      >
        <h3
          className={`text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-8 text-center ${gradient ? "text-white" : "text-gradient"}`}
        >
          {title}
        </h3>
        <ul className="space-y-4 flex-grow">
          {descriptions.map((desc, index) => (
            <li key={index} className="flex gap-3 items-start group/item">
              <span className="text-accent mt-1.5">•</span>
              <span
                className={`${gradient ? "text-white/90" : "text-white/80"} group-hover/item:text-white transition-all duration-300`}
              >
                {desc}
              </span>
            </li>
          ))}
        </ul>
        <div
          className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-[radial-gradient(circle_at_50%_50%,rgba(0,127,255,0.1),transparent_70%)]"
        ></div>
      </div>
    </motion.div>
  );
};

const SolutionOverview: React.FC = () => {
  return (
    <section
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      id="solutions"
    >
      <div className="absolute inset-0">
        {/* Main background gradient - starts black and transitions smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>

        {/* Radial blue glow - now blends smoothly with black */}
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>

        {/* CallHalo component */}
        <div className="absolute inset-0">
          <CallHalo isRinging={false} isCallActive={false} />
        </div>

        {/* Reduced bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-24 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
            The Solution for
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              {" "}
              Mass Tort Firms
            </span>
            <br />
            to Provide
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              {" "}
              Higher Client Satisfaction
            </span>
            <br />
            With Less Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <FeatureCard
            title="Human-like Voice AI"
            descriptions={[
              "Provides consistent, personalized client updates without staff intervention",
              "Handles routine inquiries 24/7 with case-specific knowledge",
              "Reduces staff communication workload by 12-15 hours per week per staff member",
            ]}
            delay={0.1}
            gradient={true}
          />

          <FeatureCard
            title="Sentiment Analysis"
            descriptions={[
              "Identifies early warning signs of client dissatisfaction through analysis of communication patterns",
              "Flags at-risk clients before they consider changing representation",
              "Enables proactive intervention, reducing attrition by 27-42%",
            ]}
            delay={0.2}
          />

          <FeatureCard
            title="Client Portal App"
            descriptions={[
              "Gives clients 24/7 access to case information",
              "Reduces inbound inquiry calls by over 40%",
              "Achieves 70%+ adoption rates across various practice areas",
            ]}
            delay={0.3}
          />
        </div>

        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative pb-24">
            {/* Final black fade at the very bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
            <motion.a
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                     bg-gradient-to-r from-blue-500 to-blue-600
                     shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                     hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                     transform hover:scale-[1.02] transition-all duration-300
                     group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white">
                Discover How Kayse Works
              </span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;