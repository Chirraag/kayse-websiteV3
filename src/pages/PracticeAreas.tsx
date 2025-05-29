import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
  Briefcase,
  Users,
  Building2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const PracticeAreas: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Areas", icon: null, count: 10 },
    {
      id: "litigation",
      label: "Litigation",
      icon: <Briefcase className="w-4 h-4" />,
      count: 2,
    },
    {
      id: "personal",
      label: "Personal",
      icon: <Users className="w-4 h-4" />,
      count: 6,
    },
    {
      id: "business",
      label: "Business",
      icon: <Building2 className="w-4 h-4" />,
      count: 2,
    },
  ];

  const practiceAreas = [
    {
      id: "mass-tort",
      title: "Mass Tort Law",
      category: "litigation",
      icon: "⚖️",
      tagline: "Managing thousands of cases with personalized attention",
      challenges: [
        "High volume of similar client inquiries overwhelming staff",
        "Difficulty maintaining consistent communication across large dockets",
        "Managing client expectations throughout lengthy proceedings",
        "Up to 40% attrition during extended litigation",
      ],
      solutions: [
        "Voice AI provides consistent updates across large client volumes",
        "Sentiment Analysis identifies at-risk clients before attrition",
        "Mobile Portal gives clients 24/7 visibility with case milestones",
        "Strategic Workflows automate follow-up based on case triggers",
      ],
      testimonial:
        "Handling 2,500+ Camp Lejeune cases, Kayse's Voice AI now manages 83% of inquiries. The retention improvement paid for the system within two months.",
      author: "Jennifer R., Mass Tort Manager",
      stats: {
        retention: "+27%",
        timeSaved: "30hrs/week",
        satisfaction: "+31 NPS",
      },
    },
    {
      id: "personal-injury",
      title: "Personal Injury Law",
      category: "personal",
      icon: "🚗",
      tagline: "24/7 support when clients need it most",
      challenges: [
        "After-hours calls going to voicemail",
        "Clients feeling uninformed about case progress",
        "Staff overwhelmed by status update calls",
        "Inefficient intake processes losing potential clients",
      ],
      solutions: [
        "Voice AI captures critical details immediately after accidents",
        "Sentiment Analysis identifies when clients need reassurance",
        "Mobile Portal tracks treatment progress and case status",
        "Automated Follow-ups manage medical appointment tracking",
      ],
      testimonial:
        "Before Kayse, we missed 35% of after-hours calls. Now our AI captures these leads and begins intake immediately. Our conversion rate increased by 41%.",
      author: "Michael T., Personal Injury Attorney",
      stats: {
        retention: "+22%",
        timeSaved: "25hrs/week",
        satisfaction: "+28 NPS",
      },
    },
    {
      id: "disability",
      title: "Disability/Social Security Law",
      category: "personal",
      icon: "♿",
      tagline: "Compassionate support through complex processes",
      challenges: [
        "Managing client anxiety during extended application processes",
        "Efficiently collecting and organizing medical documentation",
        "Handling high volumes of status update requests",
        "Coordinating with medical providers and government agencies",
      ],
      solutions: [
        "Voice AI provides compassionate responses to anxious clients",
        "Sentiment Analysis identifies when clients need additional reassurance",
        "Mobile Portal shows application status with 24/7 access",
        "Document Collection streamlines gathering of medical records",
      ],
      testimonial:
        "Our disability clients often have anxiety about their cases. Kayse's Voice AI now handles these calls with empathy while our staff focuses on advancing cases. Our satisfaction scores increased 47%.",
      author: "Sarah M., Disability Law Associate",
      stats: {
        retention: "+34%",
        timeSaved: "28hrs/week",
        satisfaction: "+47 NPS",
      },
    },
    {
      id: "employment",
      title: "Employment Law",
      category: "business",
      icon: "💼",
      tagline: "Efficient screening and documentation for workplace disputes",
      challenges: [
        "Efficiently screening potential claims across various employment issues",
        "Managing statute of limitations for different claim types",
        "Collecting and organizing workplace documentation",
        "Handling confidential and sensitive client communications",
      ],
      solutions: [
        "Voice AI conducts initial screenings for discrimination, harassment, and wage claims",
        "Sentiment Analysis identifies client concerns during sensitive disputes",
        "Mobile Portal provides secure document sharing for workplace evidence",
        "Timeline Management implements reminders for critical deadlines",
      ],
      testimonial:
        "Employment cases require careful documentation. Kayse has transformed how we manage client relationships, automating updates while ensuring clients feel supported. We've reduced administrative time by 28 hours weekly.",
      author: "David L., Employment Law Partner",
      stats: {
        retention: "+19%",
        timeSaved: "28hrs/week",
        satisfaction: "+24 NPS",
      },
    },
    {
      id: "immigration",
      title: "Immigration Law",
      category: "personal",
      icon: "🌎",
      tagline: "Multilingual support for diverse client needs",
      challenges: [
        "Communicating across language barriers",
        "Managing long and unpredictable case timelines",
        "Efficiently collecting necessary documentation",
        "Keeping clients informed about changing regulations",
      ],
      solutions: [
        "Voice AI provides multilingual support for diverse clients",
        "Sentiment Analysis detects anxiety patterns common in immigration cases",
        "Mobile Portal offers step-by-step application status tracking",
        "Document Checklists create automated requests for required documentation",
      ],
      testimonial:
        "Our clients come from diverse backgrounds with varying English proficiency. Kayse's multilingual capabilities have dramatically improved communication. The automated document collection alone has saved us countless hours.",
      author: "Maria G., Immigration Attorney",
      stats: {
        retention: "+31%",
        timeSaved: "35hrs/week",
        satisfaction: "+38 NPS",
      },
    },
    {
      id: "workers-comp",
      title: "Workers' Compensation Law",
      category: "personal",
      icon: "🏗️",
      tagline: "Streamlined tracking for injury claims",
      challenges: [
        "Tracking treatment compliance and medical appointments",
        "Managing ongoing communication with insurance adjusters",
        "Documenting changing work restrictions and recovery progress",
        "Ensuring timely filing of required forms",
      ],
      solutions: [
        "Voice AI provides clear explanations of benefit calculations",
        "Sentiment Analysis identifies frustration during extended disability periods",
        "Mobile Portal offers specialized medical treatment tracking",
        "Benefit Explanation delivers clear communication about available benefits",
      ],
      testimonial:
        "Workers' compensation cases involve constant communication with clients, medical providers, and insurance companies. Kayse has automated much of this process, ensuring nothing falls through the cracks.",
      author: "Robert J., Workers' Comp Attorney",
      stats: {
        retention: "+25%",
        timeSaved: "22hrs/week",
        satisfaction: "+29 NPS",
      },
    },
    {
      id: "criminal",
      title: "Criminal Defense Law",
      category: "litigation",
      icon: "🛡️",
      tagline: "24/7 emergency support for critical moments",
      challenges: [
        "Responding to urgent after-hours client situations",
        "Managing client anxiety throughout the legal process",
        "Efficiently collecting case information and evidence",
        "Preparing clients for court appearances",
      ],
      solutions: [
        "Voice AI provides 24/7 emergency response with attorney escalation",
        "Sentiment Analysis identifies elevated anxiety requiring intervention",
        "Mobile Portal features secure, confidential access to case information",
        "Court Preparation creates automated guidance for upcoming appearances",
      ],
      testimonial:
        "Criminal cases often start with urgent calls at all hours. Kayse ensures we never miss these critical moments, while providing immediate guidance until our attorneys can engage.",
      author: "Thomas W., Criminal Defense Attorney",
      stats: {
        retention: "+21%",
        timeSaved: "24hrs/week",
        satisfaction: "+26 NPS",
      },
    },
    {
      id: "family",
      title: "Family Law",
      category: "personal",
      icon: "👨‍👩‍👧‍👦",
      tagline: "Compassionate support for emotional legal matters",
      challenges: [
        "Responding compassionately to emotional client inquiries",
        "Efficiently collecting financial and personal documentation",
        "Managing frequent requests for updates",
        "Handling sensitive child custody and support matters",
      ],
      solutions: [
        "Voice AI features empathetic communication for emotional conversations",
        "Sentiment Analysis identifies emotional escalation requiring attorney attention",
        "Mobile Portal includes specialized features for co-parenting coordination",
        "Document Organization simplifies collection of financial disclosures",
      ],
      testimonial:
        "Family law clients often need reassurance outside business hours. Kayse provides that support while efficiently gathering documentation. Our clients feel better supported, and our team spends less time on administrative tasks.",
      author: "Jennifer P., Family Law Attorney",
      stats: {
        retention: "+29%",
        timeSaved: "26hrs/week",
        satisfaction: "+35 NPS",
      },
    },
    {
      id: "bankruptcy",
      title: "Bankruptcy Law",
      category: "business",
      icon: "📊",
      tagline: "Simplifying complex financial documentation",
      challenges: [
        "Efficiently collecting comprehensive financial documentation",
        "Managing credit counseling and education requirements",
        "Explaining complex bankruptcy processes to anxious clients",
        "Tracking payment plans and compliance requirements",
      ],
      solutions: [
        "Voice AI provides clear explanations of bankruptcy concepts",
        "Sentiment Analysis identifies financial anxiety patterns",
        "Mobile Portal features specialized bankruptcy process tracking",
        "Document Collection implements systematic gathering of financial records",
      ],
      testimonial:
        "Bankruptcy clients are often overwhelmed by documentation requirements. Kayse has transformed our practice by automating collection and providing 24/7 support. Our preparation time decreased by 35% while improving accuracy.",
      author: "Michael R., Bankruptcy Attorney",
      stats: {
        retention: "+18%",
        timeSaved: "20hrs/week",
        satisfaction: "+22 NPS",
      },
    },
    {
      id: "estate",
      title: "Estate Planning Law",
      category: "personal",
      icon: "🏛️",
      tagline: "Building lasting client relationships",
      challenges: [
        "Explaining complex estate planning concepts clearly",
        "Efficiently gathering comprehensive asset information",
        "Managing document reviews and updates over time",
        "Maintaining long-term client relationships between updates",
      ],
      solutions: [
        "Voice AI explains estate planning concepts in understandable terms",
        "Sentiment Analysis identifies appropriate timing for plan updates",
        "Mobile Portal provides secure access to estate documents",
        "Asset Documentation streamlines collection of property and accounts",
      ],
      testimonial:
        "Estate planning requires building lasting relationships. Kayse helps us maintain these connections through automated check-ins and life event monitoring. Our client retention has increased 28% since implementation.",
      author: "Elizabeth T., Estate Planning Attorney",
      stats: {
        retention: "+28%",
        timeSaved: "18hrs/week",
        satisfaction: "+32 NPS",
      },
    },
  ];

  const filteredAreas =
    selectedCategory === "all"
      ? practiceAreas
      : practiceAreas.filter((area) => area.category === selectedCategory);

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#001428] to-[#002451]" />
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.20)_0%,_transparent_70%)]" />

            {/* Animated background shapes */}
            <motion.div
              className="absolute top-20 left-10 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 bg-[#0088ff]/15 rounded-[40%] blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.35, 0.25],
                rotate: [0, 45, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-32 right-20 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-48 bg-[#0099ff]/20 rounded-[60%] blur-[80px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.25, 0.2],
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

          {/* ⭐ Elevate text content with its own stacking context */}
          <div className="container mx-auto px-4 md:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.4] mb-8"
              >
                <span className="text-white mb-4 block">
                  Intelligent Client Retention for
                </span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Every Practice Area
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Our technology adapts to the unique client communication needs
                of various legal specialties
              </motion.p>

              {/* Summary tiles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
              >
                {/* tile 1 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px]
                        bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                        border border-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                        group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Capture Every Client
                  </h3>
                  <p className="text-sm text-white/70">
                    24/7 AI-powered intake
                  </p>
                </div>

                {/* tile 2 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px]
                        bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                        border border-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                        group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                        flex flex-col items-center justify-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Streamline Communication
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Reduce routine inquiries
                  </p>
                </div>

                {/* tile 3 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px]
                        bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                        border border-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                        group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Boost Retention
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Increase client satisfaction
                  </p>
                </div>

                {/* tile 4 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px]
                        bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                        border border-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                        group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Maximize Efficiency
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Automate repetitive tasks
                  </p>
                </div>

                {/* tile 5 */}
                <div
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl min-h-[140px]
                        bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                        border border-white/10
                        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                        group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                        md:col-span-1 col-span-2"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    Grow Your Practice
                  </h3>
                  <p className="text-sm text-white/70 text-center">
                    Scale without increasing staff
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Practice Areas Section with Card Grid */}
        <section className="relative py-16 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002451] via-[#001428] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>

            {/* CallHalo component */}
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">
                    Select your practice area to see how
                  </span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Kayse can be customized
                  </span>
                  <span className="text-white"> for your needs</span>
                </h2>
              </motion.div>

              {/* Enhanced Filter Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      relative px-6 py-3 rounded-2xl font-medium transition-all duration-300
                      flex items-center gap-2 group
                      ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] transform hover:scale-[1.02]"
                          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 backdrop-blur-sm"
                      }
                    `}
                  >
                    {category.icon}
                    <span>{category.label}</span>
                    <span
                      className={`
                      px-2 py-0.5 rounded-full text-xs font-medium
                      ${
                        selectedCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-white/10 text-white/60"
                      }
                    `}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* Practice Areas Card Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="wait">
                  {filteredAreas.map((area, index) => (
                    <motion.div
                      key={area.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredCard(area.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedArea(area)}
                      className="relative cursor-pointer group"
                    >
                      <div
                        className="relative h-full rounded-[2rem] overflow-hidden backdrop-blur-xl
                                    bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                                    border border-white/10
                                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                                    transform-gpu transition-all duration-500 
                                    hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                                    hover:scale-[1.02] hover:border-accent/30"
                      >
                        {/* Hover glow effect */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 
                                      group-hover:from-accent/10 group-hover:to-accent/5 
                                      transition-all duration-500"
                        ></div>

                        <div className="relative p-6 flex flex-col h-full">
                          {/* Icon and Title */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{area.icon}</span>
                              <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                                {area.title}
                              </h3>
                            </div>
                          </div>

                          {/* Tagline */}
                          <p className="text-white/70 text-sm mb-6 flex-grow">
                            {area.tagline}
                          </p>

                          {/* Quick Stats */}
                          <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="text-center p-2 rounded-lg bg-white/5">
                              <div className="text-accent text-sm font-semibold">
                                {area.stats.retention}
                              </div>
                              <div className="text-white/60 text-xs">
                                Retention
                              </div>
                            </div>
                            <div className="text-center p-2 rounded-lg bg-white/5">
                              <div className="text-accent text-sm font-semibold">
                                {area.stats.timeSaved}
                              </div>
                              <div className="text-white/60 text-xs">Saved</div>
                            </div>
                            <div className="text-center p-2 rounded-lg bg-white/5">
                              <div className="text-accent text-sm font-semibold">
                                {area.stats.satisfaction}
                              </div>
                              <div className="text-white/60 text-xs">Score</div>
                            </div>
                          </div>

                          {/* Learn More Button */}
                          <button
                            className="w-full py-3 rounded-xl bg-white/10 text-white font-medium
                                           group-hover:bg-accent group-hover:text-white
                                           transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedArea && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedArea(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-[2rem]
                         bg-gradient-to-br from-[#001428] via-[#000a17] to-[#000a17]
                         border border-white/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 
                           transition-colors z-10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl">{selectedArea.icon}</span>
                    <div>
                      <h3 className="text-3xl font-semibold text-white mb-2">
                        {selectedArea.title}
                      </h3>
                      <p className="text-white/70">{selectedArea.tagline}</p>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Challenges */}
                    <div className="relative p-6 rounded-[1.5rem] bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20">
                      <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                        Challenges We Solve
                      </h4>
                      <ul className="space-y-3">
                        {selectedArea.challenges.map(
                          (challenge: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-white/80"
                            >
                              <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                              <span className="text-sm">{challenge}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="relative p-6 rounded-[1.5rem] bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        Kayse Solutions
                      </h4>
                      <ul className="space-y-3">
                        {selectedArea.solutions.map(
                          (solution: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-white/80"
                            >
                              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2"></div>
                              <span className="text-sm">{solution}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Success Story */}
                  <div
                    className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl
                                bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5
                                border border-accent/30 mb-8"
                  >
                    <p className="text-white/90 italic mb-3 text-lg">
                      "{selectedArea.testimonial}"
                    </p>
                    <p className="text-white font-medium">
                      — {selectedArea.author}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`/demo`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                               bg-gradient-to-r from-blue-500 to-blue-600
                               shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                               hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                               transform hover:scale-[1.02] transition-all duration-300
                               group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative text-white">
                        Request a Demo Tailored for {selectedArea.title}
                      </span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                    </a>
                    <button
                      onClick={() => setSelectedArea(null)}
                      className="px-8 py-4 text-lg font-semibold rounded-2xl
                               bg-white/10 text-white hover:bg-white/15
                               border border-white/20 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default PracticeAreas;
