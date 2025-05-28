import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, X, Users, Clock, DollarSign, TrendingUp, Star, MessageSquare, Database, Phone, FileText, Calculator } from 'lucide-react';
// Removed MUI imports - using custom implementation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallHalo from '../components/CallHalo';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`comparison-tabpanel-${index}`}
      aria-labelledby={`comparison-tab-${index}`}
      {...other}
      className="py-6"
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const WhyKayse: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001428] to-[#002451]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
            
            {/* Animated background shapes */}
            <motion.div
              className="absolute top-20 left-10 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 bg-[#0066ff]/10 rounded-[40%] blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
            
            {/* CallHalo component */}
            <div className="absolute inset-0 opacity-40">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6"
              >
                <span className="text-white">Purpose-Built for</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Legal Client Retention
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                What makes Kayse different from generic CRMs, communication tools, and client portals
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a 
                  href="/demo" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Book Your Demo</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="relative py-16 bg-black overflow-hidden" id="comparison">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002451] via-[#001428] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Beyond</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Generic Tools
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Three key comparisons that show why Kayse is the right choice for legal client retention.
              </p>
            </div>

            {/* KEPT: Light, bright content card as specified */}
            <motion.div
              className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-b border-black/10 mb-6">
                {/* Custom Tabs Implementation */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                  <button
                    onClick={() => setValue(0)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      value === 0 
                        ? 'bg-blue-500/15 text-blue-600 font-semibold' 
                        : 'bg-blue-500/8 text-gray-600 hover:bg-blue-500/12'
                    }`}
                  >
                    <Phone size={22} />
                    Traditional Communication Methods
                  </button>
                  <button
                    onClick={() => setValue(1)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      value === 1 
                        ? 'bg-blue-500/15 text-blue-600 font-semibold' 
                        : 'bg-blue-500/8 text-gray-600 hover:bg-blue-500/12'
                    }`}
                  >
                    <Database size={22} />
                    Generic CRMs with Newsletter
                  </button>
                  <button
                    onClick={() => setValue(2)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      value === 2 
                        ? 'bg-blue-500/15 text-blue-600 font-semibold' 
                        : 'bg-blue-500/8 text-gray-600 hover:bg-blue-500/12'
                    }`}
                  >
                    <Users size={22} />
                    Salesforce
                  </button>
                </div>
              </div>

                <TabPanel value={value} index={0}>
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
                    <div className="lg:max-w-xl">
                      <div className="relative mb-6 rounded-[2rem] overflow-hidden group">
                        <motion.img
                          src="/lap-2.png"
                          alt="Traditional Communication Methods"
                          className="w-full h-auto rounded-[2rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-900">
                          Kayse vs. Traditional Communication Methods
                        </h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Scale limitations of manual methods</strong>
                              <p className="text-gray-700 mt-1">Manual calls and emails work for small caseloads but become unsustainable as your practice grows</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Consistency challenges across large caseloads</strong>
                              <p className="text-gray-700 mt-1">Maintaining consistent quality and frequency of communication across hundreds of cases is nearly impossible manually</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Staff time investment: 12-15 hours per week per staff</strong>
                              <p className="text-gray-700 mt-1">Your team spends valuable hours on routine updates that could be automated</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="relative mb-6 rounded-2xl overflow-hidden group">
                        <motion.img
                          src="/lap-1.png"
                          alt="Generic CRM Solution"
                          className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">
                          Kayse vs. Generic CRMs with Newsletter
                        </h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Personalized engagement vs. mass communication</strong>
                              <p className="text-gray-700 mt-1">Kayse delivers individualized case updates, not generic newsletters</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Legal timeline management</strong>
                              <p className="text-gray-700 mt-1">Built specifically for the unique timelines and communication needs of legal cases</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Portal adoption rate: 23% for generic vs. 70%+ for Kayse</strong>
                              <p className="text-gray-700 mt-1">Our purpose-built portal achieves dramatically higher client engagement</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value={value} index={2}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="relative mb-6 rounded-2xl overflow-hidden group">
                        <motion.img
                          src="/lap-3.png"
                          alt="Salesforce Solution"
                          className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-4 text-blue-900">Kayse vs. Salesforce</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Legal terminology and workflows</strong>
                              <p className="text-gray-700 mt-1">Pre-configured for legal practice areas, not requiring extensive customization</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Implementation cost differences</strong>
                              <p className="text-gray-700 mt-1">Weeks vs. months of implementation, with significantly lower total cost of ownership</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-gray-900">Case expense recoverability advantage</strong>
                              <p className="text-gray-700 mt-1">Unlike Salesforce, Kayse can be billed as a recoverable case expense for PI firms</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabPanel>
            </motion.div>

            <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
              <motion.a
                href="/why-kayse/comparison"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl
                         bg-gradient-to-r from-blue-500 to-blue-600
                         shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                         hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                         transform hover:scale-[1.02] transition-all duration-300
                         group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white">See Detailed Comparisons</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden" id="technology">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#001020] to-[#001428]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Our</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Technology
                </span>
                <span className="text-white"> Difference</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                What makes Kayse uniquely suited for legal client retention
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-20 w-20 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 transition-all duration-300">
                    <MessageSquare className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">Legal AI Training</h3>
                <p className="text-white/80 text-center">Voice AI trained on legal terminology, understanding case types, procedural terms, and client concerns specific to different practice areas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-20 w-20 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 transition-all duration-300">
                    <TrendingUp className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">Specialized Sentiment Analysis</h3>
                <p className="text-white/80 text-center">Proprietary technology identifies early warning signs unique to legal client relationships, preventing attrition before it happens</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-20 w-20 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 transition-all duration-300">
                    <Database className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">Integration Philosophy</h3>
                <p className="text-white/80 text-center">Cohesive approach delivers superior results by seamlessly connecting with your existing legal practice management systems</p>
              </motion.div>
            </div>

            <div className="text-center">
              <motion.a
                href="/why-kayse/technology"
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
                <span className="relative text-white">Learn More About Our Technology</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden" id="pricing-approach">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] via-[#001020] to-[#000a17]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_40%_at_50%_25%,_rgba(147,197,253,0.2)_0%,_transparent_40%)]"></div>
            <div className="absolute inset-0 opacity-30">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">Enterprise Solutions</span>
                  <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                        style={{
                          backgroundSize: "200% 100%",
                          backgroundPosition: "60% 0",
                        }}>
                    Tailored to Your Practice
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-semibold mb-6 text-white">Customized Implementation</h3>
                  <p className="text-white/80 mb-4">Tailored to your practice areas with specialized configurations for:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Personal injury case workflows</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Mass tort client management</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Multi-jurisdiction compliance</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Custom intake processes</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-2xl font-semibold mb-6 text-white">ROI-Focused Pricing</h3>
                  <p className="text-white/80 mb-4">Structured for measurable returns:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/80">
                      <DollarSign className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Positive return typically within 1-2 months</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <DollarSign className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Case expense options available</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <DollarSign className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Often billable as recoverable case expense</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80">
                      <DollarSign className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Custom ROI analysis during consultation</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden" id="roi-calculator">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#000a17] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Calculate Your</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Potential ROI
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                See how quickly Kayse can deliver positive returns for your practice. Use our ROI calculator below to get a customized projection based on your firm's specific metrics.
              </p>
            </div>

            {/* ROI Calculator Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative p-12 rounded-[2.5rem] overflow-hidden backdrop-blur-xl
                            bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                            border border-white/10
                            shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                            text-center">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-24 w-24 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10">
                    <Calculator className="w-12 h-12 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">ROI Calculator Coming Soon</h3>
                <p className="text-white/70 mb-8">Our interactive ROI calculator will help you visualize your potential returns based on your firm's specific metrics.</p>
              </div>
            </motion.div>

            <div className="text-center mt-12">
              <p className="text-lg text-white/80 mb-8">Ready to discuss your results?</p>
              <motion.a
                href="/demo-request?type=consultation"
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
                <span className="relative text-white">Book a Consultation</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#000a17] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div 
              className="relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl max-w-4xl mx-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-accent mr-1" fill="#007fff" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 text-white/90 italic">
                "Handling a docket of 2,500+ Camp Lejeune cases, we were drowning in routine client calls and we later found out that most cases were missing intake information to proceed with each case. Kayse's Voice AI now handles 83% of these inquiries, providing consistent updates while our legal team focuses on advancing the litigation. The client retention improvement alone paid for the system within two months."
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://api.dicebear.com/9.x/dylan/svg?seed=Maria&backgroundColor=transparent&facialHairProbability=0&hair=bangs&hairColor=1d5dff&mood=superHappy&skinColor=ffd6c0"
                  alt="Jennifer R."
                  className="w-12 h-12 rounded-full mr-4 bg-black"
                />
                <div>
                  <div className="font-semibold text-white">Jennifer R.</div>
                  <div className="text-white/70 text-sm">Mass Tort Practice Manager</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyKayse;