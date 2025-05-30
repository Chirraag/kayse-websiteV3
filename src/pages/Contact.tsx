import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
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
                <span className="text-white">Get in Touch with</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Kayse
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Our team is ready to help you explore how our AI platform can
                transform your practice
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          className="relative py-20 bg-black overflow-hidden"
          id="contact-form"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] from-0% via-[#001020] via-50% to-[#001428] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>

            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                  Contact Us
                </h2>

                {/* Additional Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    <a
                      href="tel:+18666452973"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      (866) 645-2973
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-white/80">
                      Monday-Friday, 8am-6pm ET
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                          bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                          border border-white/10
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                          transform-gpu"
                >
                  <div className="grid grid-cols-1 gap-6 mb-6">
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
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                                 bg-white/10 border border-white/20 text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                                 transition-all duration-300"
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
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                                 bg-white/10 border border-white/20 text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                                 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                                 bg-white/10 border border-white/20 text-white placeholder-white/50
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                                 transition-all duration-300"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-white/80 mb-2 text-sm"
                      >
                        What Are You Interested In?*
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                                 bg-white/10 border border-white/20 text-white
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                                 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-primary text-white">
                          Select an option
                        </option>
                        <option
                          value="General Inquiry"
                          className="bg-primary text-white"
                        >
                          General Inquiry
                        </option>
                        <option
                          value="Partnership"
                          className="bg-primary text-white"
                        >
                          Partnership
                        </option>
                        <option
                          value="Support"
                          className="bg-primary text-white"
                        >
                          Support
                        </option>
                        <option
                          value="Integration"
                          className="bg-primary text-white"
                        >
                          Integration
                        </option>
                        <option value="Media" className="bg-primary text-white">
                          Media
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-white/80 mb-2 text-sm"
                    >
                      Message/Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl backdrop-blur-sm
                               bg-white/10 border border-white/20 text-white placeholder-white/50
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50
                               transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
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
                      Get In Touch With The Team
                    </span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section
          className="relative py-20 bg-gradient-to-b from-black to-[#000a17] overflow-hidden"
          id="quick-links"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] from-0% via-[#001630] via-50% to-[#000814] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Quick</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Access
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.a
                href="/demo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                         hover:scale-[1.02] text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Schedule a Demo
                </h3>
                <div className="flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Book a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                         hover:scale-[1.02] text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Support
                </h3>
                <div className="flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Contact Support</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                         hover:scale-[1.02] text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Partnership Inquiries
                </h3>
                <div className="flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Discuss Partnership</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
