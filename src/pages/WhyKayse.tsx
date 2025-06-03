import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  Star,
  MessageSquare,
  Database,
  Phone,
  FileText,
  Calculator,
} from "lucide-react";
// Removed MUI imports - using custom implementation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

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

  // ROI Calculator States
  const [numStaff, setNumStaff] = useState(5);
  const [activeCases, setActiveCases] = useState(1000);
  const [avgCaseValue, setAvgCaseValue] = useState(15000);
  const [staffHours, setStaffHours] = useState(12);
  const [staffCost, setStaffCost] = useState(50);
  const [attritionRate, setAttritionRate] = useState(30);
  const [clientAcquisitionCost, setClientAcquisitionCost] = useState(500);
  const [attritionReduction, setAttritionReduction] = useState(35);
  const [kayseCost, setKayseCost] = useState(25000);
  const [showResults, setShowResults] = useState(false);

  // ROI Results States
  const [results, setResults] = useState({
    hoursSaved: 0,
    costSavings: 0,
    clientsRetained: 0,
    revenueRetained: 0,
    acquisitionSavings: 0,
    totalBenefit: 0,
    roi: 0,
    paybackMonths: "N/A",
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateROI = () => {
    const inquiryHandlingRate = 0.83;

    // Cost Savings from Reduced Staff Time
    const totalWeeklyHours = staffHours * numStaff;
    const weeklyHoursSaved = totalWeeklyHours * inquiryHandlingRate;
    const annualHoursSaved = weeklyHoursSaved * 52;
    const annualCostSavings = annualHoursSaved * staffCost;

    // Revenue Retained from Reduced Attrition
    const currentAttritionRateDecimal = attritionRate / 100;
    const attritionReductionDecimal = attritionReduction / 100;
    const actualAttritionReductionRate =
      currentAttritionRateDecimal * attritionReductionDecimal;
    const clientsRetainedAnnually = activeCases * actualAttritionReductionRate;
    const revenueRetainedAnnually = clientsRetainedAnnually * avgCaseValue;

    // Savings on Client Acquisition
    const acquisitionSavings = clientsRetainedAnnually * clientAcquisitionCost;

    // Total Annual Benefit
    const totalBenefit =
      annualCostSavings + revenueRetainedAnnually + acquisitionSavings;

    // ROI Calculation
    let roi = 0;
    if (kayseCost > 0) {
      roi = ((totalBenefit - kayseCost) / kayseCost) * 100;
    }

    // Payback Period
    let paybackMonths: string | number = "N/A";
    if (totalBenefit > 0) {
      paybackMonths = (kayseCost / totalBenefit) * 12;
      if (paybackMonths <= 0 && kayseCost <= 0) {
        paybackMonths = "Immediate";
      } else if (paybackMonths < 0.1) {
        paybackMonths = "< 0.1";
      } else if (paybackMonths > 1200) {
        paybackMonths = "> 100 years";
      } else {
        paybackMonths = paybackMonths.toFixed(1);
      }
    }

    setResults({
      hoursSaved: annualHoursSaved,
      costSavings: annualCostSavings,
      clientsRetained: Math.round(clientsRetainedAnnually),
      revenueRetained: revenueRetainedAnnually,
      acquisitionSavings: acquisitionSavings,
      totalBenefit: totalBenefit,
      roi: roi,
      paybackMonths: paybackMonths,
    });

    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative py-24 sm:py-32 overflow-hidden">
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
                <span className="text-white block">Purpose-Built for</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
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
                What makes Kayse different from generic CRMs, communication
                tools, and client portals
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
        <section
          className="relative py-16 bg-black overflow-hidden"
          id="comparison"
        >
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
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Generic Tools
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Three key comparisons that show why Kayse is the right choice
                for legal client retention.
              </p>
            </div>

            {/* FIXED: Enhanced layout with better image/text balance */}
            <motion.div
              className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
                border: "1px solid rgba(255,255,255,0.3)",
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
                        ? "bg-blue-500/15 text-blue-600 font-semibold"
                        : "bg-blue-500/8 text-gray-600 hover:bg-blue-500/12"
                    }`}
                  >
                    <Phone size={22} />
                    Traditional Communication Methods
                  </button>
                  <button
                    onClick={() => setValue(1)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      value === 1
                        ? "bg-blue-500/15 text-blue-600 font-semibold"
                        : "bg-blue-500/8 text-gray-600 hover:bg-blue-500/12"
                    }`}
                  >
                    <Database size={22} />
                    Generic CRMs with Newsletter
                  </button>
                  <button
                    onClick={() => setValue(2)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                      value === 2
                        ? "bg-blue-500/15 text-blue-600 font-semibold"
                        : "bg-blue-500/8 text-gray-600 hover:bg-blue-500/12"
                    }`}
                  >
                    <Users size={22} />
                    Salesforce
                  </button>
                </div>
              </div>

              <TabPanel value={value} index={0}>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                  {/* Image Section - Fixed sizing */}
                  <div className="w-full lg:w-1/2 lg:max-w-md mx-auto lg:mx-0">
                    <div className="relative mb-6 lg:mb-0 rounded-[2rem] overflow-hidden group">
                      <motion.img
                        src="/ipad5.png"
                        alt="Traditional Communication Methods"
                        className="w-full h-auto max-h-[400px] object-contain rounded-[2rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  {/* Text Section - Enhanced with more content and better spacing */}
                  <div className="w-full lg:w-1/2 flex items-center">
                    <div className="w-full px-2 lg:px-4">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
                        Kayse vs. Traditional Communication Methods
                      </h3>
                      <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Scale limitations of manual methods
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Manual calls and emails work for small caseloads
                              but become unsustainable as your practice grows.
                              When managing hundreds of cases, consistency
                              suffers.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Consistency challenges across large caseloads
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Maintaining consistent quality and frequency of
                              communication across hundreds of cases is nearly
                              impossible manually. Client experience varies
                              significantly.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Staff time investment: 12-15 hours per week per
                              staff
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Your team spends valuable hours on routine updates
                              that could be automated, reducing time available
                              for high-value legal work and strategy.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                  {/* Image Section - Fixed sizing */}
                  <div className="w-full lg:w-1/2 lg:max-w-md mx-auto lg:mx-0">
                    <div className="relative mb-6 lg:mb-0 rounded-2xl overflow-hidden group">
                      <motion.img
                        src="/ipad2.png"
                        alt="Generic CRM Solution"
                        className="w-full h-auto max-h-[400px] object-contain rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  {/* Text Section - Enhanced */}
                  <div className="w-full lg:w-1/2 flex items-center">
                    <div className="w-full px-2 lg:px-4">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
                        Kayse vs. Generic CRMs with Newsletter
                      </h3>
                      <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Personalized engagement vs. mass communication
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Kayse delivers individualized case updates, not
                              generic newsletters. Each client receives tailored
                              information about their specific case progress.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Legal timeline management
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Built specifically for the unique timelines and
                              communication needs of legal cases. Understands
                              discovery phases, settlement negotiations, and
                              trial prep.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Portal adoption rate: 23% for generic vs. 70%+ for
                              Kayse
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Our purpose-built portal achieves dramatically
                              higher client engagement through intuitive design
                              that legal clients actually want to use.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                  {/* Image Section - Fixed sizing */}
                  <div className="w-full lg:w-1/2 lg:max-w-md mx-auto lg:mx-0">
                    <div className="relative mb-6 lg:mb-0 rounded-2xl overflow-hidden group">
                      <motion.img
                        src="/ipad3.png"
                        alt="Salesforce Solution"
                        className="w-full h-auto max-h-[400px] object-contain rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  {/* Text Section - Enhanced */}
                  <div className="w-full lg:w-1/2 flex items-center">
                    <div className="p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm w-full">
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-900">
                        Kayse vs. Salesforce
                      </h3>
                      <ul className="space-y-5">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Legal terminology and workflows
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Pre-configured for legal practice areas, not
                              requiring extensive customization. Understands
                              depositions, mediation, and settlement processes.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Implementation cost differences
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Weeks vs. months of implementation, with
                              significantly lower total cost of ownership. No
                              need for expensive consultants or custom
                              development.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-gray-900 text-base">
                              Case expense recoverability advantage
                            </strong>
                            <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                              Unlike Salesforce, Kayse can be billed as a
                              recoverable case expense for PI firms, making the
                              investment cost-neutral in many cases.
                            </p>
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
                href="/demo"
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
                <span className="relative text-white">
                  See How Kayse Compares
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="technology"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#001020] to-[#001428]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Our</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
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
                <h3 className="text-xl font-semibold mb-4 text-white text-center">
                  Legal AI Training
                </h3>
                <p className="text-white/80 text-center">
                  Voice AI trained on legal terminology, understanding case
                  types, procedural terms, and client concerns specific to
                  different practice areas
                </p>
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
                <h3 className="text-xl font-semibold mb-4 text-white text-center">
                  Specialized Sentiment Analysis
                </h3>
                <p className="text-white/80 text-center">
                  Proprietary technology identifies early warning signs unique
                  to legal client relationships, preventing attrition before it
                  happens
                </p>
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
                <h3 className="text-xl font-semibold mb-4 text-white text-center">
                  Integration Philosophy
                </h3>
                <p className="text-white/80 text-center">
                  Cohesive approach delivers superior results by seamlessly
                  connecting with your existing legal practice management
                  systems
                </p>
              </motion.div>
            </div>

            <div className="text-center">
              <motion.a
                href="/demo"
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
                  Learn More About Our Technology
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Enterprise Solutions Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="enterprise-solutions"
        >
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
                  <span className="text-white block">Enterprise Solutions</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
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
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    Customized Implementation
                  </h3>
                  <p className="text-white/80 mb-4">
                    Tailored to your practice areas with specialized
                    configurations for:
                  </p>
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
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    ROI-Focused Pricing
                  </h3>
                  <p className="text-white/80 mb-4">
                    Structured for measurable returns:
                  </p>
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

        {/* ROI Calculator Section - ENHANCED */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="roi-calculator"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#000a17] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>

            {/* Enhanced animated gradient orbs */}
            <motion.div
              className="absolute top-20 left-1/4 w-96 h-96 bg-[#0066ff]/20 rounded-full blur-[150px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#3e9dff]/20 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Calculate Your</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Potential ROI
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                See how quickly Kayse can deliver positive returns for your
                practice. Use our ROI calculator below to get a customized
                projection based on your firm's specific metrics.
              </p>
            </div>

            {/* Enhanced ROI Calculator with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div
                className="relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(59,130,246,0.05) 50%, rgba(255,255,255,0.03) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2), 0 0 80px rgba(59,130,246,0.1)",
                }}
              >
                {/* Subtle inner glow effect */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#3e9dff]/5 via-transparent to-[#0066ff]/5 pointer-events-none"></div>

                {/* Calculator Inputs with enhanced styling */}
                <div className="grid md:grid-cols-2 gap-8 relative">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white pb-2 border-b border-white/20 backdrop-blur-sm">
                      Your Firm & Caseload
                    </h3>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Number of Staff Handling Client Communications:
                      </label>
                      <input
                        type="number"
                        value={numStaff}
                        onChange={(e) => setNumStaff(Number(e.target.value))}
                        min="1"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Average Active Mass Tort Cases Annually:
                      </label>
                      <input
                        type="number"
                        value={activeCases}
                        onChange={(e) => setActiveCases(Number(e.target.value))}
                        min="10"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Average Potential Value per Mass Tort Case ($):
                      </label>
                      <input
                        type="number"
                        value={avgCaseValue}
                        onChange={(e) =>
                          setAvgCaseValue(Number(e.target.value))
                        }
                        min="1000"
                        step="100"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white pb-2 border-b border-white/20 backdrop-blur-sm">
                      Current Operations (Without Kayse.ai)
                    </h3>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Avg. Weekly Staff Hours on Routine Communications (per
                        staff):
                      </label>
                      <input
                        type="number"
                        value={staffHours}
                        onChange={(e) => setStaffHours(Number(e.target.value))}
                        min="1"
                        max="40"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                      <p className="text-xs text-white/50 mt-1">
                        Kayse.ai estimates 12-15 hours/week.
                      </p>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Average Hourly Staff Cost ($) (Fully Burdened):
                      </label>
                      <input
                        type="number"
                        value={staffCost}
                        onChange={(e) => setStaffCost(Number(e.target.value))}
                        min="10"
                        step="5"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Current Annual Client Attrition Rate (%):
                      </label>
                      <input
                        type="number"
                        value={attritionRate}
                        onChange={(e) =>
                          setAttritionRate(Number(e.target.value))
                        }
                        min="0"
                        max="100"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                      <p className="text-xs text-white/50 mt-1">
                        Industry estimates suggest up to 40% for mass torts.
                      </p>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Average Client Acquisition Cost (CAC) ($):
                      </label>
                      <input
                        type="number"
                        value={clientAcquisitionCost}
                        onChange={(e) =>
                          setClientAcquisitionCost(Number(e.target.value))
                        }
                        min="0"
                        step="50"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Kayse Impact Section with enhanced styling */}
                <div className="mt-8 space-y-6">
                  <h3 className="text-xl font-semibold text-white pb-2 border-b border-white/20 backdrop-blur-sm">
                    Kayse.ai Impact & Investment
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white/80 mb-3">
                        Estimated Attrition Reduction with Kayse.ai (%):{" "}
                        <span className="font-semibold text-accent px-3 py-1 rounded-full bg-[#3e9dff]/20 backdrop-blur-sm">
                          {attritionReduction}%
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          value={attritionReduction}
                          onChange={(e) =>
                            setAttritionReduction(Number(e.target.value))
                          }
                          min="27"
                          max="42"
                          className="w-full h-3 bg-transparent rounded-full appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #3e9dff 0%, #3e9dff ${((attritionReduction - 27) / 15) * 100}%, rgba(255,255,255,0.2) ${((attritionReduction - 27) / 15) * 100}%, rgba(255,255,255,0.2) 100%)`,
                            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3)",
                            WebkitAppearance: "none",
                          }}
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{
                            left: `calc(${((attritionReduction - 27) / 15) * 100}% - 12px)`,
                            transition: "left 0.1s ease",
                          }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#3e9dff] to-[#0066ff] shadow-[0_2px_6px_rgba(62,157,255,0.5),0_0_20px_rgba(62,157,255,0.3)] border-2 border-white/80 hover:shadow-[0_4px_12px_rgba(62,157,255,0.7),0_0_30px_rgba(62,157,255,0.5)] hover:scale-110 transition-all duration-300"></div>
                        </div>
                      </div>
                      <p className="text-xs text-white/50 mt-2">
                        Kayse.ai estimates 27-42% reduction.
                      </p>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2">
                        Estimated Annual Kayse.ai Cost ($):
                      </label>
                      <input
                        type="number"
                        value={kayseCost}
                        onChange={(e) => setKayseCost(Number(e.target.value))}
                        min="0"
                        step="1000"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 transition-all duration-300
                                 bg-white/10 backdrop-blur-md border border-white/20
                                 hover:bg-white/15 hover:border-white/30
                                 focus:bg-white/20 focus:border-[#3e9dff]/50 focus:outline-none focus:ring-2 focus:ring-[#3e9dff]/20"
                        style={{
                          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      />
                      <p className="text-xs text-white/50 mt-1">
                        Enter your estimated or quoted annual cost. Note: Kayse
                        may be a recoverable case expense.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full mt-8 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.4)]
                           hover:shadow-[0_12px_48px_rgba(59,130,246,0.6)]
                           transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300
                           group relative overflow-hidden text-white"
                  style={{
                    boxShadow:
                      "0 8px 32px rgba(59,130,246,0.4), inset 0 1px 1px rgba(255,255,255,0.2)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Calculate ROI
                  </span>
                </button>

                {/* Enhanced Results Section */}
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 p-6 rounded-2xl relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.05) 50%, rgba(59,130,246,0.1) 100%)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3e9dff]/5 via-transparent to-[#0066ff]/5 pointer-events-none"></div>

                    <h3 className="text-2xl font-semibold text-white text-center mb-8 relative">
                      Estimated Annual Impact with Kayse.ai
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                      {[
                        {
                          label: "Staff Hours Saved",
                          value: formatNumber(results.hoursSaved),
                          icon: Clock,
                        },
                        {
                          label: "Operational Cost Savings",
                          value: formatCurrency(results.costSavings),
                          icon: DollarSign,
                        },
                        {
                          label: "Clients Retained",
                          value: formatNumber(results.clientsRetained),
                          icon: Users,
                        },
                        {
                          label: "Revenue Retained",
                          value: formatCurrency(results.revenueRetained),
                          icon: TrendingUp,
                        },
                        {
                          label: "Acquisition Savings",
                          value: formatCurrency(results.acquisitionSavings),
                          icon: DollarSign,
                        },
                        {
                          label: "Total Annual Benefit",
                          value: formatCurrency(results.totalBenefit),
                          icon: DollarSign,
                        },
                        {
                          label: "Estimated ROI",
                          value:
                            results.roi > 9999
                              ? ">9999%"
                              : `${results.roi.toFixed(1)}%`,
                          icon: TrendingUp,
                        },
                        {
                          label: "Payback Period",
                          value:
                            typeof results.paybackMonths === "string"
                              ? results.paybackMonths
                              : `${results.paybackMonths} Months`,
                          icon: Clock,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="text-center p-4 rounded-xl relative overflow-hidden group"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            boxShadow:
                              "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.05)",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#3e9dff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative">
                            <div className="text-sm text-white/60 mb-2 flex items-center justify-center gap-2">
                              <item.icon className="w-4 h-4" />
                              {item.label}
                            </div>
                            <div className="text-2xl font-bold text-accent">
                              {item.value}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="text-center mt-8 relative">
                      <p className="text-lg text-white/80 mb-4">
                        Ready to see how Kayse.ai can achieve these results for
                        your firm?
                      </p>
                      <a
                        href="/demo"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                                 bg-gradient-to-r from-green-500 to-green-600
                                 shadow-[0_8px_32px_rgba(34,197,94,0.4)]
                                 hover:shadow-[0_12px_48px_rgba(34,197,94,0.6)]
                                 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300
                                 group relative overflow-hidden text-white"
                        style={{
                          boxShadow:
                            "0 8px 32px rgba(34,197,94,0.4), inset 0 1px 1px rgba(255,255,255,0.2)",
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">
                          Book Your Personalized Demo
                        </span>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Assumptions Section */}
                <div
                  className="mt-8 p-4 rounded-xl relative"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <h4 className="font-semibold text-white/80 mb-2">
                    Calculator Assumptions:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-white/60 space-y-1">
                    <li>
                      Staff time savings are based on Kayse.ai handling a
                      significant portion (est. 83%) of routine client
                      inquiries.
                    </li>
                    <li>
                      Client retention improvements are based on Kayse.ai's
                      stated range of 27-42% reduction in attrition.
                    </li>
                    <li>
                      Calculations assume the average values provided are
                      representative of the firm's overall mass tort practice.
                    </li>
                    <li>
                      The potential for Kayse.ai costs to be recoverable case
                      expenses is noted but not factored directly into the ROI
                      calculation unless the user adjusts the annual cost input
                      accordingly.
                    </li>
                  </ul>
                  <p className="text-xs text-white/50 mt-4 italic text-center">
                    Disclaimer: This calculator provides an estimate based on
                    the inputs provided and Kayse.ai's general performance
                    metrics. Actual results may vary depending on specific firm
                    operations, case types, market conditions, and
                    implementation details.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Different Testimonial Section to avoid duplicate */}
        <section
          id="testimonial"
          className="relative py-24 sm:py-32 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#000a17] to-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              className="relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl max-w-4xl mx-auto"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-accent mr-1"
                    fill="#007fff"
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6 text-white/90 italic">
                "Before Kayse, we missed 35% of after-hours calls. Now our AI
                captures these leads and begins intake immediately. Our
                conversion rate increased by 41%."
              </blockquote>
              <div className="flex items-center">
                <img
                  src="https://api.dicebear.com/9.x/dylan/svg?seed=Michael&backgroundColor=transparent&facialHairProbability=50&hair=shortCurls&hairColor=ff543d&mood=superHappy&skinColor=ffd6c0"
                  alt="Michael T."
                  className="w-12 h-12 rounded-full mr-4 bg-black"
                />
                <div>
                  <div className="font-semibold text-white">Michael T.</div>
                  <div className="text-white/70 text-sm">
                    Personal Injury Attorney
                  </div>
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
