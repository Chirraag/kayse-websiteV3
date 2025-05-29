import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      {/* PERFECT COLOR MATCH - start with exact Results end color */}
      <div className="absolute inset-0">
        {/* Exact color match with Results section end */}
        <div className="absolute inset-0 bg-[#000a17]"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative max-w-5xl mx-auto p-12 md:p-16 rounded-[2.5rem] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 127, 255, 0.2) 0%, rgba(0, 127, 255, 0.1) 100%)",
            boxShadow: "0 25px 50px -12px rgba(0, 127, 255, 0.25)",
          }}
        >
          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
                <span className="text-white">Ready to Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                  Client Management?
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Book a personalized demo to see how Kayse can help your firm
                client attrition while freeing your team from routine
                communication tasks.
              </p>
            </motion.div>

            <motion.a
              href="/demo"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl
                       bg-gradient-to-r from-blue-500 to-blue-600
                       shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                       hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                       transform hover:scale-[1.02] transition-all duration-300
                       group relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 animate-shimmer"></div>
              </div>
              <span className="relative text-white">Book Your Demo</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
