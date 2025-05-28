import React from 'react';
import { motion } from 'framer-motion';

const ClientConnection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent rounded-3xl blur-2xl group-hover:from-accent/30 transition-all duration-500"></div>
            <img 
              src="/phone-2.png" 
              alt="Client Communication" 
              className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500"
            />
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 tracking-[-0.03em] leading-[1.1]">
              <span className="text-white">Never lose</span>
              <span className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2" style={{backgroundSize: '200% 100%', backgroundPosition: '50% 0'}}> clients</span>
              <span className="text-white">,<br />never lose</span>
              <span className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2" style={{backgroundSize: '200% 100%', backgroundPosition: '50% 0'}}> touch</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed font-light">
              Keep your clients engaged and informed throughout their entire legal journey with our AI-powered communication platform.
            </p>
            <motion.img 
              src="/phone-1.png" 
              alt="Client Portal" 
              className="w-full h-auto rounded-3xl shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientConnection;