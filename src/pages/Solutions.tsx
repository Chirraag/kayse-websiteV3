import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Database,
  Bot,
  Users,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";
import RetellWebAgent from "../components/RetellWebAgent";

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        <section className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001428] to-[#002451]" />

            {/* Radial gradient glows */}
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.08)_0%,_transparent_70%)]" />

            {/* Animated background shapes */}
            <motion.div
              className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#0066ff]/05 rounded-[40%] blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
                rotate: [0, 45, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#0077ff]/08 rounded-[60%] blur-[80px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.08, 0.12, 0.08],
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* CallHalo component */}
            <div className="absolute inset-0 opacity-30">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          {/* ⭐ Elevate text content above the background with z-index */}
          <div className="container mx-auto px-4 md:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6 text-white"
              >
                Complete AI-Powered{" "}
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Client Retention Platform
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Three integrated technologies working together to solve your
                biggest challenges
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl
                     bg-gradient-to-r from-blue-500 to-blue-600
                     shadow-[0_8px_32px_rgba(59,130,246,0.2)]
                     hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]
                     transform hover:scale-[1.02] transition-all duration-300
                     group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative text-white">Book Your Demo</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Voice AI Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="voice-ai"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002451] via-[#001e3a] to-[#001428]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.06)_0%,_transparent_60%)]"></div>

            <motion.div
              className="absolute top-1/3 right-1/4 w-[40rem] h-[40rem] bg-[#0066ff]/05 rounded-[40%] blur-[120px]"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.05, 0.08, 0.05],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
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
                  <span className="text-white font-medium">Voice AI</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                  <span className="text-white">Human-like</span>{" "}
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Voice AI
                  </span>{" "}
                  <span className="text-white">for Scaled Communication</span>
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                  The average law firm spends 12-15 hours per week per staff
                  member on routine client communications. Kayse's Voice AI
                  transforms client relationships with:
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {[
                    "Natural Conversations: AI trained on legal terminology and client concerns",
                    "Case-Specific Updates: Personalized based on case status",
                    "Sentiment Detection: Identifies concerned clients during conversations",
                    "Automatic Documentation: Records all interactions in your case system",
                    "Multilingual Support: Communicates in multiple languages",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-accent mb-6">
                  Reduce staff communication workload by 12-15 hours weekly
                  while improving satisfaction.
                </p>
                <blockquote
                  className="p-8 rounded-[2.5rem] overflow-hidden backdrop-blur-xl mb-8 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  "Our paralegals used to spend 40% of their time on routine
                  calls. Kayse's Voice AI freed them to focus on higher-value
                  work while improving client satisfaction."
                  <div className="flex items-center mt-4">
                    <img
                      src="https://api.dicebear.com/9.x/dylan/svg?seed=Sarah&backgroundColor=transparent&facialHairProbability=0&hair=shaggy&hairColor=fff500&mood=superHappy&skinColor=ffd6c0"
                      alt="Sarah M."
                      className="w-12 h-12 rounded-full mr-4 bg-black"
                    />
                    <div>
                      <div className="font-semibold text-white">Sarah M.</div>
                      <div className="text-white/70 text-sm">
                        Legal Operations Director
                      </div>
                    </div>
                  </div>
                </blockquote>
                <a
                  href="/demo?solution=voice-ai"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.2)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">See Voice AI Demo</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>

              {/* Right Interactive Demo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent rounded-3xl blur-2xl scale-110 opacity-60"></div>

                {/* Additional floating elements for enhanced visual appeal */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-cyan-500/10 rounded-full blur-md animate-pulse delay-500"></div>

                {/* Interactive RetellWebAgent */}
                <div className="relative z-10 w-full max-w-md mx-auto">
                  <RetellWebAgent
                    onCallStart={() => console.log("Call started")}
                    onCallEnd={() => console.log("Call ended")}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sentiment Analysis Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="sentiment-analysis"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] via-[#001020] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.05)_0%,_transparent_70%)]"></div>

            <motion.div
              className="absolute bottom-1/3 left-1/4 w-[40rem] h-[40rem] bg-[#0077ff]/05 rounded-[60%] blur-[100px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.08, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent rounded-3xl blur-2xl group-hover:from-accent/30 transition-all duration-500"></div>
                <img
                  src="/ipad1.png"
                  alt="Sentiment Analysis Dashboard"
                  className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500"
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
                    Sentiment Analysis
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                  <span className="text-white">Proactive</span>{" "}
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Retention
                  </span>{" "}
                  <span className="text-white">through Analysis</span>
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                  Client satisfaction decreases by 32% when updates are delayed
                  more than 72 hours. Our proprietary sentiment analysis:
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {[
                    "Monitors Communication Patterns: Tracks frequency, tone, and content",
                    "Identifies Risk Signals: Recognizes early warning signs of attrition",
                    "Triggers Interventions: Adjusts communication or flags cases for follow-up",
                    "Provides Retention Insights: Delivers actionable data on satisfaction trends",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-accent mb-6">
                  Reduce client attrition by up to 40% or greater through early
                  intervention.
                </p>
                <blockquote
                  className="p-8 rounded-[2.5rem] overflow-hidden backdrop-blur-xl mb-8 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  "The sentiment analysis identified patterns we never would
                  have noticed. We now intervene with potentially dissatisfied
                  clients before they consider changing representation."
                  <div className="flex items-center mt-4">
                    <img
                      src="https://api.dicebear.com/9.x/dylan/svg?seed=&backgroundColor=transparent&facialHairProbability=0&hair=shortCurls&hairColor=ff543d&mood=superHappy&skinColor=ffd6c0"
                      alt="Michael R."
                      className="w-12 h-12 rounded-full mr-4 bg-black"
                    />
                    <div>
                      <div className="font-semibold text-white">Michael R.</div>
                      <div className="text-white/70 text-sm">
                        Managing Partner
                      </div>
                    </div>
                  </div>
                </blockquote>
                <a
                  href="/demo?solution=sentiment-analysis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">
                    See Sentiment Analysis Demo
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Portal Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="client-portal"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#001020] to-[#001428]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.05)_0%,_transparent_70%)]"></div>

            <motion.div
              className="absolute top-1/4 left-1/4 w-[45rem] h-[45rem] bg-[#0066ff]/05 rounded-[40%] blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.08, 0.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
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
                    Mobile Client Portal
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                  <span className="text-white">Client</span>{" "}
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Portal
                  </span>{" "}
                  <span className="text-white">That Clients Love</span>
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                  Generic client portals achieve only 23% adoption. Kayse's
                  specialized portal reaches 70%+ adoption because it's designed
                  specifically for legal clients. Our portal provides:
                </p>
                <ul className="space-y-4 mb-8 text-left">
                  {[
                    "24/7 Case Access: Check status anytime without calling",
                    "Timeline Visualization: Clear explanation of case progress",
                    "Document Management: Easy upload of required records",
                    "Secure Messaging: Direct communication with staff",
                    "Settlement Tracking: Transparent updates during resolution",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-accent mb-6">
                  Reduce inquiry calls by over 40% while improving satisfaction.
                </p>
                <blockquote
                  className="p-8 rounded-[2.5rem] overflow-hidden backdrop-blur-xl mb-8 relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  "Our clients love the portal—it answers their common questions
                  without calling us. Even better, they can talk to the AI about
                  their case from inside the client portal!"
                  <div className="flex items-center mt-4">
                    <img
                      src="https://api.dicebear.com/9.x/dylan/svg?seed=Jennifer&backgroundColor=transparent&facialHairProbability=0&hair=bangs&hairColor=1d5dff&mood=superHappy&skinColor=ffd6c0"
                      alt="Jennifer L."
                      className="w-12 h-12 rounded-full mr-4 bg-black"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        Jennifer L.
                      </div>
                      <div className="text-white/70 text-sm">
                        Client Services Manager
                      </div>
                    </div>
                  </div>
                </blockquote>
                <a
                  href="/demo?solution=client-portal"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">
                    See Client Portal Demo
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent rounded-3xl blur-3xl scale-95 opacity-50 group-hover:from-accent/30 group-hover:scale-100 group-hover:opacity-60 transition-all duration-500"></div>
                <img
                  src="/phone-2.png"
                  alt="Client Portal App"
                  className="relative w-full h-auto rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integrated Approach Section */}
        <section
          className="relative py-24 sm:py-32 pb-32 overflow-hidden"
          id="integrated-approach"
        >
          <div className="absolute inset-0">
            {/* Base gradient - transitioning to pure black at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] via-[#000a17] to-black"></div>

            {/* Radial gradient glows */}
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.08)_0%,_transparent_70%)]"></div>

            {/* Bottom area halos - positioned to continue into next section */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_85%_90%,_rgba(59,130,246,0.08)_0%,_transparent_60%)]"></div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_85%,_rgba(99,102,241,0.05)_0%,_transparent_70%)]"></div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_20%_95%,_rgba(139,92,246,0.05)_0%,_transparent_55%)]"></div>

            {/* CallHalo component */}
            <div className="absolute inset-0 opacity-30">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>

            {/* Final transition to black */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block mb-4 px-6 py-2 rounded-xl bg-gradient-to-r from-white/10 via-white/[0.07] to-transparent backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300">
                <span className="text-white font-medium">
                  Integrated Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                <span className="text-white">The Power of</span>{" "}
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Integration
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                While each component delivers significant value individually,
                the true power comes from seamless integration:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                "Voice AI conversations inform sentiment analysis",
                "Sentiment trends trigger personalized portal content",
                "Portal usage patterns optimize Voice AI responses",
                "All three components create a comprehensive retention strategy",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-[2rem] backdrop-blur-xl relative group transform-gpu transition-all duration-500
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_30px_rgba(0,0,0,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-white/90 text-center text-sm relative z-10">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.2)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.3)]
                           transform hover:scale-[1.02] transition-all duration-300 mb-16
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">
                    See How It All Works Together
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
