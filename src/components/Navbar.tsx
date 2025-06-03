import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>({
    solutions: false,
    practiceAreas: false,
    integrations: false,
    resources: false,
    whyKayse: false,
  });
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<{
    [key: string]: boolean;
  }>({
    solutions: false,
    practiceAreas: false,
    integrations: false,
    resources: false,
    whyKayse: false,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileSubmenuOpen({
          solutions: false,
          practiceAreas: false,
          integrations: false,
          resources: false,
          whyKayse: false,
        });
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (key: string) => {
    setDropdownOpen((prev) => {
      const newState = { ...prev };
      // Close all other dropdowns
      Object.keys(newState).forEach((k) => {
        newState[k] = k === key ? !prev[k] : false;
      });
      return newState;
    });
  };

  const toggleMobileSubmenu = (key: string) => {
    setMobileSubmenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-xl py-2 lg:py-3 shadow-xl"
          : "bg-transparent py-3 lg:py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
        <a href="/" className="flex items-center">
          <img
            src="/kayse-v2.png"
            alt="Kayse"
            className="h-6 sm:h-7 lg:h-8 -ml-1 sm:ml-0"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <a
            href="/solutions"
            className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all"
          >
            Solutions
          </a>

          <a
            href="/practice-areas"
            className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all"
          >
            Practice Areas
          </a>

          <a
            href="/integrations"
            className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all"
          >
            Integrations
          </a>

          <a
            href="/resources"
            className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all"
          >
            Resources
          </a>

          <a
            href="/why-kayse"
            className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all"
          >
            Why Kayse?
          </a>

          <a
            href="https://app.kayse.ai"
            className="px-6 py-2 rounded-xl bg-white text-blue-600 font-semibold 
                    shadow-lg hover:shadow-xl 
                    transform hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
          >
            Login
          </a>

          <a
            href="/demo"
            className="ml-2 px-6 py-2 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold 
                    shadow-lg shadow-accent/25 hover:shadow-accent/40 
                    transform hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
          >
            Try Kayse Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-1.5 sm:p-2 hover:bg-white/5 rounded-lg transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={20} className="sm:w-6 sm:h-6" />
          ) : (
            <Menu size={20} className="sm:w-6 sm:h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="lg:hidden absolute left-0 right-0 top-full bg-primary/95 backdrop-blur-xl border-t border-white/10 overflow-y-auto z-50"
            style={{
              maxHeight: "calc(100vh - 100%)",
            }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-3">
              <a
                href="/solutions"
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
              >
                Solutions
              </a>

              <a
                href="/practice-areas"
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
              >
                Practice Areas
              </a>

              <a
                href="/integrations"
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
              >
                Integrations
              </a>

              <a
                href="/resources"
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
              >
                Resources
              </a>

              <a
                href="/why-kayse"
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
              >
                Why Kayse?
              </a>

              <a
                href="/contact"
                className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
              >
                Contact Us
              </a>

              <a
                href="https://app.kayse.ai"
                className="block px-4 py-3 rounded-lg bg-white text-blue-600 font-semibold text-base sm:text-lg text-center my-2"
              >
                Login
              </a>

              <div className="pt-6">
                <a
                  href="/demo"
                  className="block w-full py-3.5 sm:py-4 px-6 rounded-xl bg-accent text-white text-center font-semibold text-base sm:text-lg whitespace-nowrap
                           shadow-lg shadow-accent/25 hover:shadow-accent/40 
                           transform hover:scale-[1.02] transition-all duration-300"
                >
                  Try Kayse Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
