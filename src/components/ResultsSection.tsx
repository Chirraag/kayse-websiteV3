import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star, UserCheck, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import CallHalo from './CallHalo';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatProps> = ({ value, suffix, label, icon }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<NodeJS.Timeout>();
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    // Reset counter when component unmounts or leaves viewport
    return () => {
      if (countRef.current) {
        clearTimeout(countRef.current);
      }
      setCount(0);
      setHasAnimated(false);
    };
  }, []);

  const startCounting = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    setCount(0);

    const startCounting = () => {
      const duration = 2000; // 2 seconds duration
      const steps = 60; // 60 steps for smooth animation
      const increment = value / steps;
      let current = 0;
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        current = Math.min(value, Math.ceil(step * increment));
        setCount(current);
        
        if (current >= value) {
          clearInterval(timer);
        }
      }, duration / steps);
      
      return timer;
    };
    
    countRef.current = setTimeout(() => {
      const timer = startCounting();
      return () => clearInterval(timer);
    }, 100);
  };
  
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      onViewportEnter={() => startCounting()}
      onViewportLeave={() => {
        setCount(0);
        setHasAnimated(false);
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/70">{label}</div>
    </motion.div>
  );
};

const ResultsSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="testimonials">
      {/* BACKGROUND - transitioning cleanly to pure black */}
      <div className="absolute inset-0">
        {/* Base gradient - transitioning to #000a17 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e40af] from-0% via-[#1e2847] via-60% to-[#000a17] to-100%"></div>
        
        {/* Halo effect behind heading */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_40%_at_50%_25%,_rgba(147,197,253,0.2)_0%,_transparent_40%)]"></div>
        
        {/* Bottom area halos - positioned to continue into next section */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_85%_90%,_rgba(59,130,246,0.15)_0%,_transparent_60%)]"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_85%,_rgba(99,102,241,0.1)_0%,_transparent_70%)]"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_20%_95%,_rgba(139,92,246,0.1)_0%,_transparent_55%)]"></div>
        
        {/* CallHalo with consistent opacity */}
        <div className="absolute inset-0 opacity-40">
          <CallHalo isRinging={false} isCallActive={false} />
        </div>
        
        {/* Final transition to #000a17 */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#000a17] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6 relative z-10">
            <span className="text-white">Proven</span>
            <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"> Results</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light relative z-10">
            Real-world outcomes from law firms using the Kayse platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="card-glass p-6 rounded-xl">
            <StatCounter 
              value={27} 
              suffix="%" 
              label="Reduction in client attrition" 
              icon={<UserCheck className="w-6 h-6 text-accent" />} 
            />
          </div>
          <div className="card-glass p-6 rounded-xl">
            <StatCounter 
              value={30} 
              suffix="+" 
              label="Staff hours saved weekly" 
              icon={<Clock className="w-6 h-6 text-accent" />} 
            />
          </div>
          <div className="card-glass p-6 rounded-xl">
            <StatCounter 
              value={18} 
              suffix="K" 
              label="Monthly admin cost savings" 
              icon={<DollarSign className="w-6 h-6 text-accent" />} 
            />
          </div>
          <div className="card-glass p-6 rounded-xl">
            <StatCounter 
              value={31} 
              suffix="" 
              label="NPS points improvement" 
              icon={<TrendingUp className="w-6 h-6 text-accent" />} 
            />
          </div>
        </div>
        
        {/* Enhanced testimonial card with better glass morphism */}
        <motion.div 
          className="relative p-8 md:p-10 mb-16 rounded-[2.5rem] overflow-hidden backdrop-blur-xl"
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
              <div className="font-semibold">Jennifer R.</div>
              <div className="text-white/70 text-sm">Mass Tort Practice Manager</div>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center">
          <motion.a
            href="/resources#case-studies"
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
            <span className="relative text-white">See More Success Stories</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;