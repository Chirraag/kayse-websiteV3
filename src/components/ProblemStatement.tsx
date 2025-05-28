import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Clock, Users, UserMinus, Scale } from "lucide-react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

const TimelineStage: React.FC<{
  title: string;
  description?: string;
  attrition?: string;
  delay: number;
  active: boolean;
  isLast?: boolean;
}> = ({ title, description, attrition, delay, active, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative pl-8 ${isLast ? "pb-0" : "pb-12"} border-l-2 ${
        active ? "border-white" : "border-white/20"
      } ${isLast ? "border-l-0" : ""}`}
    >
      <div
        className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 
        ${active ? "bg-white border-white" : "bg-white/20 border-white/20"}`}
      />
      <div className="mb-2">
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        {description && <p className="text-white/70 mt-2">{description}</p>}
        {attrition && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-400/30 rounded-lg">
            <AlertCircle className="w-4 h-4 text-red-300" />
            <span className="text-red-200 text-sm">{attrition}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ChallengeCard: React.FC<{
  icon: React.ReactNode;
  number?: number;
  title: string;
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.li
      className="flex gap-4 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-14 w-14 flex items-center justify-center flex-shrink-0 
                    border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 
                    transition-all duration-300"
      >
        <div className="text-white">{icon}</div>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors duration-300">
          {title}
        </h4>
        <p className="text-white/90 leading-relaxed">{description}</p>
      </div>
    </motion.li>
  );
};

const ProblemStatement: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [glowPosition, setGlowPosition] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // Shift activeStage forward by 2 positions to fix synchronization
    const stageSequence = [2, 3, 4, 5, 5, 0, 1, 4, 3, 2, 1]; // activeStage shifted forward
    const forwardFlags = [
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    const glowPositions = [
      0, 0.125, 0.375, 0.625, 0.875, 1.0, 1.0, 0.875, 0.625, 0.375, 0.125,
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setActiveStage(stageSequence[currentIndex]);
      setIsForward(forwardFlags[currentIndex]);
      setGlowPosition(glowPositions[currentIndex]);
      currentIndex = (currentIndex + 1) % stageSequence.length;
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="problems">
      {/* Background Elements */}
      <div className="absolute left-[2%] right-[2%] top-0 bottom-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#001e45] to-[#003c8f] rounded-[2.5rem]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute left-[2%] right-[2%] top-0 bottom-0 overflow-hidden rounded-[2.5rem]">
        <motion.div
          className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#0066ff]/10 rounded-[40%] blur-[100px]"
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
          className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-[#0077ff]/15 rounded-[60%] blur-[80px]"
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
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative max-w-6xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
              <span className="text-white">Mass Tort Client</span>
              <span
                className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "60% 0",
                }}
              >
                {" "}
                Management Challenges
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Mass tort litigation creates unique challenges for law firms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              className="col-span-2 relative p-8 md:p-10 rounded-[2rem] overflow-hidden backdrop-blur-xl
                          bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                          border border-white/10
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                          group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-6 text-white">
                Common Challenges
              </h3>
              <ul className="space-y-6">
                <ChallengeCard
                  icon={<Users className="w-6 h-6 text-white" />}
                  title="Scale"
                  description="Managing thousands of similar cases while providing personalized attention"
                  delay={0.1}
                />
                <ChallengeCard
                  icon={<Clock className="w-6 h-6 text-white" />}
                  title="Time"
                  description="Lengthy proceedings (3-7+ years) increase client anxiety and attrition risk"
                  delay={0.2}
                />
                <ChallengeCard
                  icon={<AlertCircle className="w-6 h-6 text-white" />}
                  title="Resources"
                  description="Staff overwhelmed by routine client communications instead of advancing cases"
                  delay={0.3}
                />
                <ChallengeCard
                  icon={<UserMinus className="w-6 h-6 text-white" />}
                  title="Retention"
                  description="Up to 40% of mass tort clients change or cancel legal representation during litigation"
                  delay={0.4}
                />
              </ul>
            </div>

            <div className="col-span-2 pt-12">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-6 text-center">
                <span className="text-white">Mass Tort</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Litigation Timeline
                </span>
              </h3>
              <p className="text-white/70 mb-8 text-lg text-center">
                Mass tort cases typically span 3-7+ years, with up to 40% client
                attrition during litigation
              </p>

              {/* Mobile Timeline */}
              {isMobile && (
                <div className="relative pl-4 pb-4">
                  <TimelineStage
                    title="Intake"
                    description="Initial case evaluation and client onboarding"
                    delay={0.1}
                    active={activeStage >= 0}
                  />
                  <TimelineStage
                    title="Case Review"
                    description="Detailed analysis of case merit and documentation"
                    attrition="15% attrition risk"
                    delay={0.2}
                    active={activeStage >= 1}
                  />
                  <TimelineStage
                    title="MDL Formation"
                    description="Cases consolidated into multi-district litigation"
                    delay={0.3}
                    active={activeStage >= 2}
                  />
                  <TimelineStage
                    title="Discovery"
                    description="Evidence gathering and expert testimony"
                    attrition="25% attrition risk"
                    delay={0.4}
                    active={activeStage >= 3}
                  />
                  <TimelineStage
                    title="Settlement"
                    description="Negotiation and resolution phase"
                    delay={0.5}
                    active={activeStage >= 4}
                  />
                  <TimelineStage
                    title="Disbursement"
                    description="Final distribution of settlement funds"
                    delay={0.6}
                    active={activeStage >= 5}
                    isLast={true}
                  />
                </div>
              )}

              {/* Desktop Timeline with Curved Dotted Line */}
              {!isMobile && (
                <div className="relative h-[400px] w-full">
                  {/* Timeline Container with proper bounds */}
                  <div className="relative h-full px-8">
                    {/* Start and End Labels positioned at dotted line start/end */}
                    <div className="absolute top-0 left-0 right-0">
                      {/* from/intake - shifted left by 13% */}
                      <div
                        className="absolute"
                        style={{ left: "1%", top: "90px" }}
                      >
                        <div className="text-gray-400 text-xl font-light mb-1">
                          from
                        </div>
                        <div className="text-5xl font-light">
                          <span className="bg-gradient-to-r from-[#3e9dff] to-white bg-clip-text text-transparent">
                            inta
                          </span>
                          <span className="text-white">ke</span>
                        </div>
                      </div>

                      {/* "to" - positioned independently */}
                      <div
                        className="absolute"
                        style={{
                          left: "82%",
                          top: "220px",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div className="text-gray-400 text-xl font-light">
                          to
                        </div>
                      </div>

                      {/* "disbursement" - keeps its original position */}
                      <div
                        className="absolute"
                        style={{
                          left: "100%",
                          top: "245px",
                          transform: "translateX(-100%)",
                          textAlign: "right",
                        }}
                      >
                        <div className="text-5xl font-light">
                          <span className="bg-gradient-to-r from-[#3e9dff] to-white bg-clip-text text-transparent">
                            disburse
                          </span>
                          <span className="text-white">ment</span>
                        </div>
                      </div>
                    </div>

                    {/* Curved Dotted Line */}
                    <div className="absolute top-24 left-0 right-0 h-56">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 800 400"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        {/* Gradient definition for subtle blue in middle */}
                        <defs>
                          <linearGradient
                            id="progressGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgba(255, 255, 255, 0.9)"
                            />
                            <stop
                              offset="50%"
                              stopColor="rgba(255, 255, 255, 1)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgba(255, 255, 255, 0.9)"
                            />
                          </linearGradient>
                        </defs>

                        {/* Static solid line */}
                        <path
                          d={Array.from({ length: 100 }, (_, i) => {
                            const t = i / 99;
                            const x = 48 + t * 600;
                            const y = 200 + Math.sin(t * Math.PI * 4) * 160;
                            return i === 0 ? `M${x},${y}` : `L${x},${y}`;
                          }).join(" ")}
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />

                        {/* Glowing progress line */}
                        <motion.path
                          d={Array.from({ length: 100 }, (_, i) => {
                            const t = i / 99;
                            const x = 48 + t * 600;
                            const y = 200 + Math.sin(t * Math.PI * 4) * 160;
                            return i === 0 ? `M${x},${y}` : `L${x},${y}`;
                          }).join(" ")}
                          stroke="url(#progressGradient)"
                          strokeWidth="12"
                          strokeLinecap="round"
                          fill="none"
                          animate={{
                            pathLength: [
                              0, 0.125, 0.375, 0.625, 0.875, 1.0, 0.875, 0.625,
                              0.375, 0.125, 0,
                            ],
                          }}
                          transition={{
                            duration: 28, // 28 seconds for full forward + backward cycle
                            times: [
                              0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
                              1.0,
                            ],
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            filter: "blur(7px)",
                            opacity: 0.9,
                          }}
                        />
                      </svg>

                      {/* Separate layer for circular dots that won't get stretched */}
                      <div className="absolute inset-0">
                        {/* Intake - Starting Point */}
                        <motion.div
                          className="absolute w-3 h-3 rounded-full bg-[#ff4a4a]"
                          style={{
                            left: "5.5%",
                            top: "48%",
                            transform: "translate(-50%, -50%)",
                            filter:
                              "drop-shadow(0 0 12px rgba(62, 157, 255, 0.8))",
                          }}
                          animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0,
                          }}
                        />

                        {/* Case Review - First Peak */}
                        <motion.div
                          className="absolute w-3 h-3 rounded-full bg-[#ff4a4a]"
                          style={{
                            left: "15%",
                            top: "88%",
                            transform: "translate(-50%, -50%)",
                            filter:
                              "drop-shadow(0 0 12px rgba(62, 157, 255, 0.8))",
                          }}
                          animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* MDL Formation - First Valley */}
                        <motion.div
                          className="absolute w-3 h-3 rounded-full bg-[#ff4a4a]"
                          style={{
                            left: "33.8%",
                            top: "8.2%",
                            transform: "translate(-50%, -50%)",
                            filter:
                              "drop-shadow(0 0 12px rgba(62, 157, 255, 0.8))",
                          }}
                          animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        />

                        {/* Discovery - Second Peak */}
                        <motion.div
                          className="absolute w-3 h-3 rounded-full bg-[#ff4a4a]"
                          style={{
                            left: "52.5%",
                            top: "88%",
                            transform: "translate(-50%, -50%)",
                            filter:
                              "drop-shadow(0 0 12px rgba(62, 157, 255, 0.8))",
                          }}
                          animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        />

                        {/* Settlement - Second Valley */}
                        <motion.div
                          className="absolute w-3 h-3 rounded-full bg-[#ff4a4a]"
                          style={{
                            left: "71.3%",
                            top: "8%",
                            transform: "translate(-50%, -50%)",
                            filter:
                              "drop-shadow(0 0 12px rgba(62, 157, 255, 0.8))",
                          }}
                          animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5,
                          }}
                        />

                        {/* Disbursement - End Point */}
                        <motion.div
                          className="absolute w-3 h-3 rounded-full bg-[#ff4a4a]"
                          style={{
                            left: "80.5%",
                            top: "49%",
                            transform: "translate(-50%, -50%)",
                            filter:
                              "drop-shadow(0 0 12px rgba(62, 157, 255, 0.8))",
                          }}
                          animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                          }}
                        />
                      </div>
                    </div>

                    {/* Stage Labels positioned on the curve */}
                    <div className="absolute top-24 left-0 right-0 h-56">
                      {/* case review - positioned at FIRST HUMP (moved more down) */}
                      <motion.div
                        className="absolute"
                        style={{
                          left: "10.5%", // shifted left by 13% from 12%
                          top: "230px", // moved more down from 200px
                          transform: "translateX(-50%)",
                        }}
                        animate={{
                          opacity: activeStage === 1 && isForward ? 1 : 0.8,
                          scale: activeStage === 1 && isForward ? 1.1 : 1,
                          y: activeStage === 1 && isForward ? -2 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="text-center">
                          <p className="text-white text-lg md:text-xl font-semibold mb-2">
                            case review
                          </p>
                          <motion.div
                            className="px-2 py-1 bg-red-500/60 border border-red-400/80 rounded-md backdrop-blur-sm"
                            initial={{ opacity: 0, y: 5, scale: 0.9 }}
                            animate={{
                              opacity:
                                activeStage >= 1 &&
                                activeStage <= 4 &&
                                isForward
                                  ? 1
                                  : 0,
                              y:
                                activeStage >= 1 &&
                                activeStage <= 4 &&
                                isForward
                                  ? 0
                                  : 5,
                              scale: activeStage === 1 && isForward ? 1.1 : 1,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <div className="flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 text-red-200" />
                              <span className="text-red-200 text-xs font-semibold">
                                15% attrition
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* mdl formation - positioned at FIRST TROUGH (moved up) */}
                      <motion.div
                        className="absolute"
                        style={{
                          left: "28.5%", // shifted left by 13% from 34%
                          top: "-30px", // moved up from 10px
                          transform: "translateX(-50%)",
                        }}
                        animate={{
                          opacity: activeStage === 2 && isForward ? 1 : 0.8,
                          scale: activeStage === 2 && isForward ? 1.1 : 1,
                          y: activeStage === 2 && isForward ? -2 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="text-center">
                          <p className="text-white text-lg md:text-xl font-semibold">
                            MDL formation
                          </p>
                        </div>
                      </motion.div>

                      {/* settlement - positioned at SECOND TROUGH (moved more up) */}
                      <motion.div
                        className="absolute"
                        style={{
                          left: "67%", // shifted left by 13% from 77%
                          top: "-25px", // moved more up from 10px
                          transform: "translateX(-50%)",
                        }}
                        animate={{
                          opacity: activeStage === 4 && isForward ? 1 : 0.8,
                          scale: activeStage === 4 && isForward ? 1.1 : 1,
                          y: activeStage === 4 && isForward ? -2 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="text-center">
                          <p className="text-white text-lg md:text-xl font-semibold">
                            settlement
                          </p>
                        </div>
                      </motion.div>

                      {/* discovery - positioned at SECOND HUMP (moved down) */}
                      <motion.div
                        className="absolute"
                        style={{
                          left: "48%", // shifted left by 13% from 55%
                          top: "230px", // moved down from 200px
                          transform: "translateX(-50%)",
                        }}
                        animate={{
                          opacity: activeStage === 3 && isForward ? 1 : 0.8,
                          scale: activeStage === 3 && isForward ? 1.1 : 1,
                          y: activeStage === 3 && isForward ? -2 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <div className="text-center">
                          <p className="text-white text-lg md:text-xl font-semibold mb-2">
                            discovery
                          </p>
                          <motion.div
                            className="px-2 py-1 bg-red-500/60 border border-red-400/80 rounded-md backdrop-blur-sm"
                            initial={{ opacity: 0, y: 5, scale: 0.9 }}
                            animate={{
                              opacity:
                                activeStage >= 3 &&
                                activeStage <= 4 &&
                                isForward
                                  ? 1
                                  : 0,
                              y:
                                activeStage >= 3 &&
                                activeStage <= 4 &&
                                isForward
                                  ? 0
                                  : 5,
                              scale: activeStage === 3 && isForward ? 1.1 : 1,
                            }}
                            transition={{
                              duration: 0.8,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            <div className="flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 text-red-200" />
                              <span className="text-red-200 text-xs font-semibold">
                                25% attrition
                              </span>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;