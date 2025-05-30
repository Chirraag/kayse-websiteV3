import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  DollarSign,
  TrendingUp,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    practiceArea: "",
    challenge: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(
      "Thank you for requesting a demo! Our team will contact you shortly to confirm your appointment.",
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      practiceArea: "",
      challenge: "",
    });
  };

  const faqs = [
    {
      question: "How long is the demo?",
      answer: "Approximately 30 minutes, with additional time for questions.",
    },
    {
      question: "Who should attend?",
      answer:
        "Decision-makers involved with client management, operations, and technology.",
    },
    {
      question: "Is preparation needed?",
      answer:
        "No preparation required. Including specific challenges in your request helps us customize the presentation.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The demo showed us exactly how Kayse would work with our existing systems. Within two months of implementation, we reduced our client attrition by 38% and freed up hundreds of staff hours. The ROI was immediately apparent.",
      author: "Operations Director",
      firm: "Mass Tort Firm",
    },
    {
      quote:
        "I was skeptical about AI handling client communications until I saw the demo. Hearing the actual voice AI conversations convinced me this was different from anything else we'd tried. Our clients now get immediate responses 24/7, and our staff is freed to focus on case work.",
      author: "Managing Partner",
      firm: "Personal Injury Law Practice",
    },
    {
      quote:
        "The ROI analysis they provided during the demo proved accurate. We're saving over $15,000 monthly in administrative costs while improving client satisfaction scores.",
      author: "CFO",
      firm: "Full Service Firm",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* ── Hero Section ─────────────────────────────────────────────── */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          {/* Background layers */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000814] via-30% to-[#000a17] to-100%" />
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]" />

            {/* Animated shapes */}
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

            {/* Halo */}
            <div className="absolute inset-0 opacity-40">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          {/* Foreground content */}
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, staggerChildren: 0.2 },
                  },
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-white"
                >
                  Experience Kayse's
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent block my-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  AI Client Retention Platform
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-white"
                >
                  in Action
                </motion.span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: 0.6 },
                  },
                }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                See how our solution reduces client attrition by up to 40% or
                greater while freeing your team from routine tasks
              </motion.p>
            </div>
          </div>
        </section>

        {/* Demo Benefits Section */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="demo-benefits"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] from-0% via-[#001020] via-50% to-[#001428] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">
                  What You'll Experience in Your
                </span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Personalized Demo
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                During your 30-minute demo, you'll see:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <MessageCircle className="w-10 h-10 text-accent" />,
                  title: "Voice AI in Action",
                  description: "Hear actual client conversations",
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-accent" />,
                  title: "Sentiment Analysis Dashboard",
                  description: "See how we identify at-risk clients",
                },
                {
                  icon: <Users className="w-10 h-10 text-accent" />,
                  title: "Client Portal Interface",
                  description: "Experience the mobile portal",
                },
                {
                  icon: <CheckCircle2 className="w-10 h-10 text-accent" />,
                  title: "Integration Capabilities",
                  description: "Learn how Kayse connects with your systems",
                },
                {
                  icon: <DollarSign className="w-10 h-10 text-accent" />,
                  title: "ROI Analysis",
                  description:
                    "Receive a customized assessment for your practice",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                           ${index === 4 ? "lg:col-start-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-20 w-20 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 transition-all duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white text-center">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-center">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="demo-form"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] from-0% via-[#001630] via-50% to-[#001838] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">Request Your</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Personalized Demo
                  </span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]"
                >
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-white/40 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Work Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-white/40 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Law Firm Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-white/40 transition-all duration-300"
                        placeholder="Doe & Associates"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="practiceArea"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Primary Practice Area*
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white transition-all duration-300"
                      >
                        <option value="" className="bg-primary text-white">
                          Select Practice Area
                        </option>
                        <option
                          value="Mass Tort/Class Action"
                          className="bg-primary text-white"
                        >
                          Mass Tort/Class Action
                        </option>
                        <option
                          value="Personal Injury"
                          className="bg-primary text-white"
                        >
                          Personal Injury
                        </option>
                        <option
                          value="Disability/Social Security"
                          className="bg-primary text-white"
                        >
                          Disability/Social Security
                        </option>
                        <option
                          value="Family/Estate Law"
                          className="bg-primary text-white"
                        >
                          Family/Estate Law
                        </option>
                        <option
                          value="Other Legal Practice"
                          className="bg-primary text-white"
                        >
                          Other Legal Practice
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="challenge"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        What's Your Biggest Challenge Managing Client
                        Communication?*
                      </label>
                      <select
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white transition-all duration-300"
                      >
                        <option value="" className="bg-primary text-white">
                          Select Challenge
                        </option>
                        <option
                          value="Too many calls"
                          className="bg-primary text-white"
                        >
                          Too many calls
                        </option>
                        <option
                          value="Low engagement"
                          className="bg-primary text-white"
                        >
                          Low engagement
                        </option>
                        <option
                          value="High attrition"
                          className="bg-primary text-white"
                        >
                          High attrition
                        </option>
                        <option
                          value="Poor follow-up visibility"
                          className="bg-primary text-white"
                        >
                          Poor follow-up visibility
                        </option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">
                      Book My Personalized Demo
                    </span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories Carousel */}
        <section
          className="relative py-24 sm:py-32 overflow-hidden"
          id="success-stories"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001838] from-0% via-[#001a40] via-50% to-[#001c48] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">What Law Firms Are</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Saying
                </span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Testimonial Carousel */}
              <div className="relative">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
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
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={`https://api.dicebear.com/9.x/dylan/svg?seed=${testimonials[currentTestimonial].author}&backgroundColor=transparent&facialHairProbability=0&hair=bangs&hairColor=1d5dff&mood=superHappy&skinColor=ffd6c0`}
                      alt={testimonials[currentTestimonial].author}
                      className="w-12 h-12 rounded-full mr-4 bg-black"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-white/70 text-sm">
                        {testimonials[currentTestimonial].firm}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "w-8 bg-accent"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden" id="faq">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001c48] from-0% via-[#002050] via-50% to-[#002468] to-100%"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_40%_at_50%_25%,_rgba(147,197,253,0.2)_0%,_transparent_40%)]"></div>
            <div className="absolute inset-0 opacity-30">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">Questions About the</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Demo Process
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative rounded-[2rem] overflow-hidden backdrop-blur-xl
                             bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                             border border-white/10
                             shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-white/5 transition-colors rounded-[2rem]"
                      onClick={() =>
                        setExpandedFaq(expandedFaq === index ? null : index)
                      }
                    >
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-accent" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-accent" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-white/80">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002468] from-0% via-[#001e50] via-50% to-[#000814] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 tracking-[-0.03em] leading-[1.1]"
              >
                <span className="text-white">Ready to Transform Your</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Client Management?
                </span>
              </motion.h2>
              <motion.a
                href="#demo-form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                         bg-gradient-to-r from-blue-500 to-blue-600
                         shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                         hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                         transform hover:scale-[1.02] transition-all duration-300
                         group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white">
                  Schedule Your Demo Today
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
