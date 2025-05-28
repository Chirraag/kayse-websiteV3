import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setMobileSubmenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/90 backdrop-blur-xl py-2 lg:py-3 shadow-xl' : 'bg-transparent py-3 lg:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center relative">
        <a href="/" className="flex items-center">
          <img src="/kayse-v2.png" alt="Kayse" className="h-6 sm:h-7 lg:h-10 -ml-1 sm:ml-0" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <div className="relative group">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all"
            >
              Solutions
              <ChevronDown size={16} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 p-3 rounded-xl bg-primary-light border border-white/10 shadow-2xl backdrop-blur-xl"
                >
                  <div className="grid gap-2">
                    <a href="/solutions/retention" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all">
                      <span className="text-white">Smart Content Delivery</span>
                    </a>
                    <a href="/solutions/engagement" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all">
                      <span className="text-white">AI Client Updates</span>
                    </a>
                    <a href="/solutions/tracking" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all">
                      <span className="text-white">Mobile Client Portal App</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <a href="/support" className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all">
            Support
          </a>
          
          <a href="/contact" className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all">
            Contact Us
          </a>
          
          <a href="/login" className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all">
            Login
          </a>
          
          <a
            href="/demo"
            className="ml-2 px-6 py-2 rounded-xl bg-accent hover:bg-accent-light text-white font-semibold 
                    shadow-lg shadow-accent/25 hover:shadow-accent/40 
                    transform hover:scale-[1.02] transition-all duration-300"
          >
            Try Kayse Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-1.5 sm:p-2 hover:bg-white/5 rounded-lg transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-[52px] sm:top-[60px] left-0 right-0 bottom-0 bg-primary/95 backdrop-blur-xl border-t border-white/10 overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-3">
              <div>
                <button
                  onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileSubmenuOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <AnimatePresence>
                  {mobileSubmenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      <a href="/solutions/retention" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/5 text-white/80 text-sm sm:text-base">
                        <ChevronRight size={16} className="text-white/50" />
                        Smart Content Delivery
                      </a>
                      <a href="/solutions/engagement" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/5 text-white/80 text-sm sm:text-base">
                        <ChevronRight size={16} className="text-white/50" />
                        AI Client Updates
                      </a>
                      <a href="/solutions/tracking" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-white/5 text-white/80 text-sm sm:text-base">
                        <ChevronRight size={16} className="text-white/50" />
                        Mobile Client Portal App
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="h-px bg-white/10"></div>
              
              <a href="/support" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg">
                Support
              </a>
              <a href="/contact" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg">
                Contact Us
              </a>
              <a href="/login" className="block px-4 py-3 rounded-lg hover:bg-white/5 text-white text-base sm:text-lg">
                Login
              </a>
              
              <div className="pt-6">
                <a
                  href="/demo"
                  className="block w-full py-3.5 sm:py-4 px-6 rounded-xl bg-accent text-white text-center font-semibold text-base sm:text-lg
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