import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#000a17]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-white/80">
              Have questions? We're here to help.
            </p>
          </div>

          <motion.a
            href="/contact"
            className="block p-8 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent
                     border border-accent/20 backdrop-blur-sm
                     hover:from-accent/30 hover:via-accent/20 hover:to-transparent
                     transform hover:scale-[1.02] transition-all duration-300
                     group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Contact Us</h3>
                  <p className="text-white/70">
                    Get a personalized response within 24 hours
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div>
            <img src="/kayse-v2.png" alt="Kayse" className="h-8 mb-6" />
            <p className="text-white/70 mb-0 md:mb-6 opacity-0">
              The AI Client Retention Platform Built for High-Volume Law Firms
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/kayse/"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-white/70"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kayseapp/"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-white/70"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kayseapp"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 text-white/70"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="/integrations"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Resources
                </a>
              </li>
              {/* Mobile-only additional links */}
              <li className="md:hidden">
                <a
                  href="/why-kayse"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Why Kayse
                </a>
              </li>
              <li className="md:hidden">
                <a
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li className="md:hidden">
                <a
                  href="/demo"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Demo Request
                </a>
              </li>
              <li className="md:hidden">
                <a
                  href="/blog"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li className="md:hidden">
                <a
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* More Links - Desktop Only */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-6 opacity-0">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/why-kayse"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Why Kayse
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/demo"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Demo Request
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:info@kayse.ai"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  info@kayse.ai
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a
                  href="tel:+18666452973"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  (866) 645-2973
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2025 Kayse AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/privacy"
                className="text-white/50 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/50 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="/accessibility"
                className="text-white/50 hover:text-white text-sm transition-colors duration-300"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
