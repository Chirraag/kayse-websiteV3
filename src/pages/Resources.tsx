import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const Resources: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practiceArea: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const guides = [
    {
      id: "30-day-warning",
      title: "The 30-Day Warning System",
      subtitle:
        "How Top Mass Tort Firms Spot and Keep 37% More Clients Before They Leave",
      description:
        "Learn to identify critical communication pattern changes that signal when clients are considering switching firms. This guide reveals the four warning signs that appear 30-45 days before clients leave and provides intervention strategies that have helped firms retain 37% more at-risk clients.",
      takeaways: [
        "Recognize the 4 early warning signs of client departure",
        "Implement systematic monitoring for firms with 500+ cases",
        "Use proven intervention techniques within the critical 30-day window",
      ],
    },
    {
      id: "client-warning-signs",
      title: "Law Firm Client Warning Signs",
      subtitle: "The Two-Week Window to Stop Clients From Switching Firms",
      description:
        "Discover what high-risk client questions really mean and how to address the concerns behind them. Based on analysis showing 83% of certain questions come within 14 days of contacting competitors, this guide provides response strategies to keep clients from leaving.",
      takeaways: [
        'Decode the "questions behind the questions"',
        "Master the Trust Triangle of client concerns",
        "Implement the five-step response process for high-risk questions",
      ],
    },
    {
      id: "5-month-cliff",
      title: "The 5-Month Cliff",
      subtitle: "Preventing Client Drop-Off in Long Cases",
      description:
        "Understand why client patience typically expires after just 5 months while cases take 3-7 years. This guide helps you bridge the expectation gap with strategies that maintain engagement throughout lengthy proceedings.",
      takeaways: [
        "Address the 4 stages of timeline-related client anxiety",
        "Create milestone-based communication strategies",
        "Implement proven techniques to extend client patience",
      ],
    },
    {
      id: "5-month-warning",
      title: "The 5-Month Client Warning",
      subtitle: "How Law Firms Keep Clients During Long Cases",
      description:
        'Learn to combat the "Legal Time Crisis" where modern clients expect immediate responses but cases move slowly. This guide provides a framework for meeting today\'s communication expectations without overwhelming your team.',
      takeaways: [
        "Understand the four forces transforming legal communication",
        "Calculate the real cost of client impatience to your firm",
        "Build systems that satisfy modern client expectations",
      ],
    },
    {
      id: "silent-exit",
      title: "The Silent Exit",
      subtitle: "Why 72% of Mass Tort Clients Leave Without Warning",
      description:
        "Uncover the hidden concerns that 72% of departing clients never voice. This guide reveals the five worries clients keep secret and provides strategies to identify dissatisfaction 45 days before clients leave.",
      takeaways: [
        "Recognize the 5 hidden worries mass tort clients won't share",
        "Spot subtle warning signs of unspoken concerns",
        "Implement proactive strategies to address silent dissatisfaction",
      ],
    },
    {
      id: "call-fatigue",
      title: "Client Call Fatigue",
      subtitle: "Protecting Your Law Firm's Best Staff",
      description:
        "Protect your most valuable team members from burnout while maintaining excellent client service. This guide shows how caring staff members absorb client stress and provides strategies to prevent the emotional exhaustion that leads to turnover.",
      takeaways: [
        "Identify the 5 stages of staff burnout progression",
        "Implement firm-wide strategies to reduce emotional drain",
        "Use technology to handle routine communications automatically",
      ],
    },
  ];

  const handleGuideRequest = (guideId: string) => {
    setSelectedGuide(guideId);
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", { ...formData, guide: selectedGuide });
    alert(
      "Thank you! Your guide is on its way to your inbox. You should receive it within the next few minutes. Please check your spam folder if you don't see it soon.",
    );
    setFormData({ name: "", email: "", practiceArea: "" });
    setShowModal(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    alert(
      "Thank you for subscribing! You'll receive our latest insights and resources.",
    );
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000814] via-30% to-[#000a17] to-100%" />
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]" />

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
                <span className="text-white">Essential Resources for</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Law Firm Client Retention
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Expert guides and insights to help you reduce client attrition
                and improve satisfaction during lengthy legal proceedings
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl mx-auto mt-12"
              >
                <div
                  className="relative p-8 md:p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl
                             bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                             border border-white/10
                             shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_30px_rgba(0,0,0,0.2)]
                             group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_0_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3e9dff]/5 via-transparent to-[#3e9dff]/5 opacity-50"></div>
                  <div className="relative z-10">
                    <p className="text-lg text-white/90 leading-relaxed">
                      Every law firm faces the challenge of keeping clients
                      engaged during multi-year cases. Our resource library
                      provides actionable strategies based on research from over{" "}
                      <span className="text-accent font-semibold">
                        42,000 client conversations
                      </span>
                      . Request our guides to learn how leading firms reduce
                      client attrition by up to{" "}
                      <span className="text-accent font-semibold">40%</span>{" "}
                      while freeing their teams from routine communication
                      tasks.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section
          className="relative py-20 bg-black overflow-hidden"
          id="guides"
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
                <span className="text-white">Client Retention</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Strategy Guides
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Access our comprehensive guides developed from real-world data
                and proven strategies used by successful mass tort and personal
                injury firms. Each guide will be delivered directly to your
                inbox.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]"
                >
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {guide.title}
                  </h3>
                  <p className="text-accent mb-4 font-medium">
                    {guide.subtitle}
                  </p>
                  <p className="text-white/70 mb-6">{guide.description}</p>

                  <div className="mb-6">
                    <p className="text-white/80 font-semibold mb-2">
                      Key Takeaways:
                    </p>
                    <ul className="space-y-2">
                      {guide.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleGuideRequest(guide.id)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_6px_20px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_8px_28px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">Get This Guide</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#001428] to-[#001e45] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] from-0% via-[#001838] via-50% to-[#001e45] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Coming</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Soon
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
                We're continually developing new resources to help law firms
                improve client retention. Check back regularly for:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {[
                {
                  title: "Case Studies",
                  description: "Real success stories from firms using Kayse",
                },
                {
                  title: "Industry Research",
                  description: "Data-driven insights on client behavior",
                },
                {
                  title: "Best Practices Blog",
                  description: "Timely tips for client communication",
                },
                {
                  title: "Webinar Library",
                  description: "Expert sessions on retention strategies",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 rounded-[1.5rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                  Newsletter Signup
                </h3>
                <p className="text-white/70 mb-6 text-center">
                  Stay informed about new resources and retention strategies.
                  Join our mailing list for exclusive insights and early access
                  to new guides.
                </p>

                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    placeholder="Email Address"
                    className="flex-1 px-4 py-3 rounded-xl backdrop-blur-sm
                             bg-white/10 border border-white/20 text-white placeholder-white/50
                             focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                             transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_6px_20px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_8px_28px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden whitespace-nowrap"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">Subscribe</span>
                    <Mail className="w-4 h-4 text-white relative" />
                  </button>
                </form>
                <p className="text-white/50 text-sm mt-4 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#001e45] to-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001e45] from-0% via-[#001838] via-50% to-[#000814] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">See How Technology</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Amplifies These Strategies
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light mb-12">
                While these guides provide proven strategies for improving
                client retention, implementing them at scale requires the right
                technology. Kayse's AI-powered platform automatically applies
                these best practices across your entire client base.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
                {[
                  "Automatically detect warning signs across all communications",
                  "Provide 24/7 responses that address hidden client concerns",
                  "Protect staff from burnout while improving client satisfaction",
                  "Reduce attrition by up to 40% while saving 25-30 hours weekly",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-left">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/demo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                         bg-gradient-to-r from-blue-500 to-blue-600
                         shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                         hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                         transform hover:scale-[1.02] transition-all duration-300
                         group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white">See Kayse in Action</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Guide Request Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full"
          >
            <div
              className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-[#000a17] via-[#001428] to-[#001838]
                         border border-white/20
                         shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]"
            >
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <span className="text-white text-2xl">×</span>
              </button>

              <h3 className="text-2xl font-semibold mb-2 text-white text-center">
                Get Your Free Guide
              </h3>
              <p className="text-white/70 mb-8 text-center">
                Enter your details below and we'll send your guide immediately
              </p>

              <form onSubmit={handleFormSubmit}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                               bg-white/10 border border-white/20 text-white placeholder-white/50
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                               transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Work Email*
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                               bg-white/10 border border-white/20 text-white placeholder-white/50
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                               transition-all duration-300"
                      placeholder="john@lawfirm.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-practiceArea"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Primary Practice Area*
                    </label>
                    <select
                      id="modal-practiceArea"
                      value={formData.practiceArea}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          practiceArea: e.target.value,
                        })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                               bg-white/10 border border-white/20 text-white
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                               transition-all duration-300 appearance-none cursor-pointer"
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

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">
                      Send Me The Guide
                    </span>
                    <Download className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform duration-200 relative" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Resources;
