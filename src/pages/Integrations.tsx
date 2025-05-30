import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  MessageSquare,
  Phone,
  FileText,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const Integrations: React.FC = () => {
  const crmIntegrations = [
    { name: "Law Ruler Connector", description: "Two-way sync with Law Ruler" },
    {
      name: "SmartAdvocate Integration",
      description: "Direct connection to case data",
    },
    {
      name: "Custom Integrations",
      description: "Tailored connections for proprietary systems",
    },
  ];

  const caseManagementIntegrations = [
    { name: "Law Ruler Connector", description: "Two-way sync with case data" },
    {
      name: "SmartAdvocate Integration",
      description: "Direct connection to case information",
    },
    {
      name: "Custom Integrations",
      description: "Tailored connections for proprietary systems",
    },
  ];

  const communicationIntegrations = [
    {
      name: "Email Integration",
      description: "Connects with your existing CRM and PM apps",
    },
    {
      name: "Text Messaging Enhancement",
      description: "Adds intelligence to SMS platforms",
    },
    {
      name: "Phone System Connection",
      description: "Integrates with current infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* ─────────────────────────── HERO SECTION ─────────────────────────── */}
        <section className="relative py-24 sm:py-32 pb-0 overflow-hidden">
          {/* ★ Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001428] to-[#002451]" />
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]" />

            {/* floating blobs */}
            <motion.div
              className="absolute top-20 left-10 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 bg-[#0066ff]/10 rounded-[40%] blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                rotate: [0, 45, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-32 right-20 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-48 bg-[#0077ff]/15 rounded-[60%] blur-[80px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15],
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* halo */}
            <div className="absolute inset-0 opacity-40">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          {/* ★ Content */}
          <div className="container mx-auto px-4 md:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* heading & sub-copy */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6"
              >
                <span className="text-white">Seamless</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Integration
                </span>
                <span className="text-white"> with Your Existing Systems</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Kayse enhances your current technology stack rather than
                replacing it
              </motion.p>

              {/* summary tiles - Fixed grid alignment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12"
              >
                {/* tile 1 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px] flex flex-col justify-center items-center
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                              group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    CRM Ready
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Two-way sync
                  </p>
                </div>

                {/* tile 2 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px] flex flex-col justify-center items-center
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                              group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Case Mgmt
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Instant connection
                  </p>
                </div>

                {/* tile 3 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px] flex flex-col justify-center items-center
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                              group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Comms Hub
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Email / SMS / Voice
                  </p>
                </div>

                {/* tile 4 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px] flex flex-col justify-center items-center
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                              group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Secure Data
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    HIPAA-ready
                  </p>
                </div>

                {/* tile 5 - spans full width on mobile */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px] flex flex-col justify-center items-center
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                              group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                              col-span-2 md:col-span-1"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Open APIs
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Future-proof
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a
                  href="/contact?topic=integrations"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">
                    Discuss Your Integration Needs
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CRM Integration Section */}
        <section
          className="relative pt-24 sm:pt-32 pb-24 sm:pb-32 overflow-hidden"
          id="crm-integration"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002451] via-[#001428] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="inline-block mb-4 px-6 py-2 rounded-xl bg-gradient-to-r from-white/10 via-white/[0.07] to-transparent backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <span className="text-white font-medium">
                    CRM Integration
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">Enhancing Your CRM with</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Legal Retention Capabilities
                  </span>
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                  Kayse works alongside your existing CRM, adding specialized
                  features:
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {crmIntegrations.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">
                          {item.name}:
                        </span>{" "}
                        {item.description}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Key Benefit */}
                <div
                  className="mb-8 p-6 rounded-[1.5rem] backdrop-blur-xl
                              bg-gradient-to-br from-accent/30 via-accent/20 to-accent/5
                              border border-accent/30
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                >
                  <p className="text-white font-semibold mb-2">Key Benefit:</p>
                  <p className="text-white/90">
                    Get specialized retention capabilities without replacing
                    existing systems.
                  </p>
                </div>

                {/* Client Quote */}
                <blockquote
                  className="mb-8 p-6 rounded-[1.5rem] backdrop-blur-xl
                                     bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                                     border-l-4 border-accent border-r border-t border-b border-white/10
                                     shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                >
                  <p className="text-white/90 italic mb-2">
                    "We invested heavily in our CRM, but it wasn't designed for
                    legal client management. Kayse filled those gaps perfectly
                    while leveraging our existing infrastructure."
                  </p>
                  <cite className="text-white/70 not-italic">
                    — IT Director
                  </cite>
                </blockquote>

                <a
                  href="/contact?topic=crm-integration"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Learn More</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                </a>
              </motion.div>

              {/* Right Image - UPDATED: No background box, zoomed out */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <img
                  src="/lap-1.png"
                  alt="CRM Integration"
                  className="w-full h-auto transform scale-90 group-hover:scale-95 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Management Integration Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="case-management"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#001020] to-[#001428]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Image - UPDATED: No background box, zoomed out */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group order-2 lg:order-1"
              >
                <img
                  src="/lap-2.png"
                  alt="Case Management Integration"
                  className="w-full h-auto transform scale-90 group-hover:scale-95 transition-transform duration-500"
                />
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center lg:text-left order-1 lg:order-2"
              >
                <div className="inline-block mb-4 px-6 py-2 rounded-xl bg-gradient-to-r from-white/10 via-white/[0.07] to-transparent backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <span className="text-white font-medium">
                    Case Management Integration
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">
                    Seamless Connection to Your
                  </span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Case Management System
                  </span>
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                  Kayse integrates with leading case management systems:
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {caseManagementIntegrations.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">
                          {item.name}:
                        </span>{" "}
                        {item.description}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Integration Timeframe */}
                <div
                  className="mb-8 p-6 rounded-[1.5rem] backdrop-blur-xl
                              bg-gradient-to-br from-accent/30 via-accent/20 to-accent/5
                              border border-accent/30
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                >
                  <p className="text-white font-semibold mb-2">
                    Integration Timeframe:
                  </p>
                  <p className="text-white/90">
                    Typical integration takes 1 week depending on system
                    complexity.
                  </p>
                </div>

                {/* Key Benefit */}
                <div
                  className="mb-8 p-6 rounded-[1.5rem] backdrop-blur-xl
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                >
                  <p className="text-white font-semibold mb-2">Key Benefit:</p>
                  <p className="text-white/80">
                    Maintain a single source of truth while adding retention
                    capabilities.
                  </p>
                </div>

                <a
                  href="/contact?topic=case-management-integration"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Learn More</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Communication Systems Integration */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="communication-systems"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] via-[#001020] to-[#000a17]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_40%_at_50%_25%,_rgba(147,197,253,0.2)_0%,_transparent_40%)]"></div>
            <div className="absolute inset-0 opacity-30">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="inline-block mb-4 px-6 py-2 rounded-xl bg-gradient-to-r from-white/10 via-white/[0.07] to-transparent backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300">
                  <span className="text-white font-medium">
                    Communication Systems
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">Enhancing Your Current</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Communication Channels
                  </span>
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                  Kayse amplifies your existing communication methods:
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {communicationIntegrations.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-white">
                          {item.name}:
                        </span>{" "}
                        {item.description}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Key Benefit */}
                <div
                  className="mb-8 p-6 rounded-[1.5rem] backdrop-blur-xl
                              bg-gradient-to-br from-accent/30 via-accent/20 to-accent/5
                              border border-accent/30
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                >
                  <p className="text-white font-semibold mb-2">Key Benefit:</p>
                  <p className="text-white/90">
                    Maintain familiar workflows while adding AI-powered
                    capabilities.
                  </p>
                </div>

                <a
                  href="/contact?topic=communication-integration"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Learn More</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                </a>
              </motion.div>

              {/* Right Image - UPDATED: No background box, zoomed out */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <img
                  src="/lap-3.png"
                  alt="Communication Systems Integration"
                  className="w-full h-auto transform scale-90 group-hover:scale-95 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              className="relative max-w-5xl mx-auto p-8 md:p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
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
                    <span className="text-white">Ready to Enhance</span>
                    <br />
                    <span
                      className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}
                    >
                      Your Technology Stack?
                    </span>
                  </h2>
                  <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Let's discuss how Kayse can integrate with your existing
                    systems to create a seamless client retention solution.
                  </p>
                </motion.div>

                <motion.a
                  href="/contact?topic=integrations"
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
                    Discuss Your Integration Needs
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
