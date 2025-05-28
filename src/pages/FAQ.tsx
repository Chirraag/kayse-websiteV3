import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallHalo from '../components/CallHalo';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">{question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-accent" />
          ) : (
            <Plus className="w-5 h-5 text-accent" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-white/80 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const aboutKayseTech = [
    {
      question: "What is Kayse and how does it work?",
      answer: (
        <div>
          <p className="mb-4">Kayse is an AI-powered client retention platform specifically built for high-volume law firms. Key features include:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Human-like voice AI that conducts natural conversations</li>
            <li>Sentiment analysis to identify at-risk clients early</li>
            <li>Mobile client portal with 70%+ adoption rates</li>
            <li>Seamless integration with existing practice management systems</li>
          </ul>
          <p><a href="/demo" className="text-accent hover:underline">Book a demo</a> to see Kayse in action for your practice area.</p>
        </div>
      )
    },
    {
      question: "Will clients know they're talking to an AI?",
      answer: (
        <div>
          <p className="mb-4">Our Voice AI is designed for natural, human-like conversations:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>86% of callers cannot distinguish from human staff in blind tests</li>
            <li>Natural speech patterns, pauses, and conversational flow</li>
            <li>Clear disclosure as required by legal ethics rules</li>
            <li>Clients often prefer the consistent, empathetic service</li>
          </ul>
          <p><a href="/contact" className="text-accent hover:underline">Contact us</a> to hear sample conversations.</p>
        </div>
      )
    },
    {
      question: "Can AI handle complex legal conversations?",
      answer: (
        <div>
          <p className="mb-4">Yes, Kayse's AI is specifically trained for legal contexts:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Trained on thousands of real legal client interactions</li>
            <li>Understands practice-specific terminology and procedures</li>
            <li>Recognizes when to escalate to human attorneys</li>
            <li>Creates detailed records for compliance purposes</li>
          </ul>
          <p>Learn more about our <a href="/technology" className="text-accent hover:underline">AI technology</a>.</p>
        </div>
      )
    },
    {
      question: "What languages does Kayse support?",
      answer: (
        <div>
          <p className="mb-4">Currently supporting:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>English - Full legal terminology support</li>
            <li>Spanish - Native speaker quality, not translated</li>
            <li>More languages coming soon based on client needs</li>
          </ul>
          <p><a href="/demo" className="text-accent hover:underline">Request a demo</a> in your preferred language.</p>
        </div>
      )
    }
  ];

  const implementationIntegration = [
    {
      question: "How long does implementation take?",
      answer: (
        <div>
          <p className="mb-4">Most firms are operational within 2-4 weeks:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Week 1: System integration and data migration</li>
            <li>Week 2: Customization for your practice area</li>
            <li>Week 3-4: Team training and go-live support</li>
            <li>Dedicated implementation specialist throughout</li>
          </ul>
          <p>Get a custom <a href="/demo" className="text-accent hover:underline">implementation timeline</a> for your firm.</p>
        </div>
      )
    },
    {
      question: "I'm not tech-savvy. Is this complicated to set up?",
      answer: (
        <div>
          <p className="mb-4">Zero technical knowledge required:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Our team handles 100% of setup and configuration</li>
            <li>No software to install or maintain</li>
            <li>Simple web-based dashboard for your team</li>
            <li>Ongoing support from dedicated success manager</li>
          </ul>
          <p><a href="/contact" className="text-accent hover:underline">Talk to our team</a> about worry-free implementation.</p>
        </div>
      )
    },
    {
      question: "Which practice management systems does Kayse integrate with?",
      answer: (
        <div>
          <p className="mb-4">We integrate with all major legal platforms:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Clio, MyCase, Filevine, Litify</li>
            <li>PracticePanther, Needles Ngage, TrialWorks</li>
            <li>SmartAdvocate, CASEpeer, GrowPath</li>
            <li>Custom integrations available for proprietary systems</li>
          </ul>
          <p>Don't see your system? <a href="/contact" className="text-accent hover:underline">Contact us</a> - we've never met a system we couldn't integrate.</p>
        </div>
      )
    },
    {
      question: "How much training time is required?",
      answer: (
        <div>
          <p className="mb-4">Minimal time investment:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>45-minute onboarding session to understand your practice</li>
            <li>We handle all AI training based on your requirements</li>
            <li>30-minute staff training on dashboard and features</li>
            <li>Ongoing improvements without additional training</li>
          </ul>
          <p><a href="/demo" className="text-accent hover:underline">Schedule your onboarding</a> at your convenience.</p>
        </div>
      )
    }
  ];

  const businessValueROI = [
    {
      question: "What's the ROI for implementing Kayse?",
      answer: (
        <div>
          <p className="mb-4">Most firms see positive ROI within 2-3 months:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>25-40% reduction in client attrition</li>
            <li>30+ hours saved per week on routine communications</li>
            <li>15-30% increase in client satisfaction scores</li>
            <li>40-60% reduction in client communication costs</li>
          </ul>
          <p>Get a <a href="/demo" className="text-accent hover:underline">custom ROI calculation</a> based on your firm's metrics.</p>
        </div>
      )
    },
    {
      question: "How is Kayse priced?",
      answer: (
        <div>
          <p className="mb-4">Flexible pricing models to fit your practice:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Per-case model for contingency fee practices</li>
            <li>Subscription model for flat fee/hourly practices</li>
            <li>Can be billed as case expense for PI/mass tort</li>
            <li>Volume discounts for large firms</li>
          </ul>
          <p><a href="/demo" className="text-accent hover:underline">Request pricing</a> tailored to your firm size and practice area.</p>
        </div>
      )
    },
    {
      question: "I already have staff handling calls. Why add another expense?",
      answer: (
        <div>
          <p className="mb-4">Kayse reduces costs while improving service:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Handle unlimited volume without adding staff</li>
            <li>24/7/365 availability captures after-hours opportunities</li>
            <li>Consistent quality without training or turnover issues</li>
            <li>Free your team for higher-value legal work</li>
          </ul>
          <p>See how much you could save with our <a href="/calculator" className="text-accent hover:underline">ROI calculator</a>.</p>
        </div>
      )
    },
    {
      question: "How does this compare to offshore call centers?",
      answer: (
        <div>
          <p className="mb-4">Superior results at lower total cost:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>30-40% lower total cost when including hidden expenses</li>
            <li>No language barriers or cultural misunderstandings</li>
            <li>Zero training time or quality control issues</li>
            <li>Complete visibility with recordings and transcripts</li>
          </ul>
          <p><a href="/demo" className="text-accent hover:underline">Compare solutions</a> side-by-side.</p>
        </div>
      )
    }
  ];

  const clientExperience = [
    {
      question: "Will AI make my firm seem impersonal?",
      answer: (
        <div>
          <p className="mb-4">Actually, clients report more personalized service:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Consistent empathy and professionalism every time</li>
            <li>Remembers all client details and case history</li>
            <li>No bad days, rushed conversations, or impatience</li>
            <li>94-96% client satisfaction ratings</li>
          </ul>
          <p>Read <a href="/case-studies" className="text-accent hover:underline">client testimonials</a> about their experience.</p>
        </div>
      )
    },
    {
      question: "What features are included in the client portal?",
      answer: (
        <div>
          <p className="mb-4">Comprehensive mobile-first portal includes:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Real-time case status tracking</li>
            <li>Secure document upload/download</li>
            <li>Appointment scheduling and reminders</li>
            <li>Direct messaging with your team</li>
            <li>Personalized FAQs for their case type</li>
          </ul>
          <p>See a <a href="/demo" className="text-accent hover:underline">live portal demo</a> customized for your practice.</p>
        </div>
      )
    },
    {
      question: "How do you achieve such high portal adoption rates?",
      answer: (
        <div>
          <p className="mb-4">Our 70%+ adoption rate comes from:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Intuitive design requiring no technical expertise</li>
            <li>Mobile-first approach for on-the-go access</li>
            <li>Automated onboarding that guides setup</li>
            <li>Voice AI helps clients navigate during calls</li>
          </ul>
          <p>Learn about our <a href="/technology" className="text-accent hover:underline">user experience design</a>.</p>
        </div>
      )
    },
    {
      question: "How can I control what's being said to clients?",
      answer: (
        <div>
          <p className="mb-4">Complete transparency and control:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Review and approve all AI response templates</li>
            <li>Full recordings and transcripts of every interaction</li>
            <li>Real-time alerts for important conversations</li>
            <li>More oversight than with human staff</li>
          </ul>
          <p><a href="/demo" className="text-accent hover:underline">See our monitoring dashboard</a> in action.</p>
        </div>
      )
    }
  ];

  // All FAQs
  const allFAQs = [
    { category: "About Kayse AI Technology", items: aboutKayseTech },
    { category: "Implementation & Integration", items: implementationIntegration },
    { category: "Business Value & ROI", items: businessValueROI },
    { category: "Client Experience", items: clientExperience }
  ];

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Navbar />
      <main>
        {/* Hero Section */}
{/* ── Hero Section ─────────────────────────────────────────────── */}
<section className="relative py-24 sm:py-32 overflow-hidden">
  {/* Background layers */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000814] via-30% to-[#000a17] to-100%" />
    <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]" />

    {/* Animated blobs */}
    <motion.div
      className="absolute top-20 left-10 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 bg-[#0066ff]/10 rounded-[40%] blur-[100px]"
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2], rotate: [0, 45, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-32 right-20 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-48 bg-[#0077ff]/15 rounded-[60%] blur-[80px]"
      animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15], rotate: [0, -30, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6"
      >
        <span className="text-white">Frequently Asked</span>
        <span
          className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
          style={{ backgroundSize: '200% 100%', backgroundPosition: '60% 0' }}
        >
          Questions
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
      >
        Get answers about our legal client retention platform
      </motion.p>
    </div>
  </div>
</section>

        {/* FAQ Content */}
        <section className="relative py-20 bg-black overflow-hidden" id="faq-content">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] from-0% via-[#001020] via-50% to-[#001428] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>
            
            {/* CallHalo component */}
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {allFAQs.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex} 
                  className="mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-semibold mb-8 tracking-[-0.03em] text-white">{category.category}</h2>
                  <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-xl
                              bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                              border border-white/10
                              shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                              p-6 transform-gpu">
                    {category.items.map((faq, index) => (
                      <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Related Resources */}
              <motion.div 
                className="mt-20 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-white text-center tracking-[-0.03em]">Related Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <a href="/case-studies" className="relative group rounded-[1.5rem] overflow-hidden backdrop-blur-xl
                                                   bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                                                   border border-white/10
                                                   shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                                                   p-6 transform-gpu transition-all duration-500 
                                                   hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                                                   hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">Case Studies</h3>
                    <p className="text-white/60">See how firms like yours improved client retention with Kayse</p>
                  </a>
                  <a href="/technology" className="relative group rounded-[1.5rem] overflow-hidden backdrop-blur-xl
                                                bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                                                border border-white/10
                                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                                                p-6 transform-gpu transition-all duration-500 
                                                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                                                hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">Technology Overview</h3>
                    <p className="text-white/60">Learn about our AI and sentiment analysis technology</p>
                  </a>
                  <a href="/calculator" className="relative group rounded-[1.5rem] overflow-hidden backdrop-blur-xl
                                                bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                                                border border-white/10
                                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                                                p-6 transform-gpu transition-all duration-500 
                                                hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                                                hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">ROI Calculator</h3>
                    <p className="text-white/60">Calculate your potential savings and revenue impact</p>
                  </a>
                </div>
              </motion.div>

              {/* Still Have Questions */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-6 text-white tracking-[-0.03em]">Still Have Questions?</h2>
                <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                  Our team is ready to answer any questions and show you exactly how Kayse can transform your firm's client retention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">Contact Us</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                  </a>
                  <a 
                    href="/demo" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                             bg-white/10 backdrop-blur-sm border border-white/10
                             hover:bg-white/15 hover:border-white/20
                             transform hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="text-white">Book a Demo</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] from-0% via-[#001630] via-50% to-[#000814] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
            
            {/* Animated background elements */}
            <motion.div
              className="absolute top-20 right-10 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-[#0066ff]/8 rounded-[40%] blur-[120px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 60, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-32 left-10 w-24 md:w-32 lg:w-48 h-24 md:h-32 lg:h-48 bg-[#0077ff]/12 rounded-[60%] blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -45, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              
              {/* Main CTA Content */}
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
                  <span className="text-white">Transform Your Practice</span><br />
                  <span className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent"
                        style={{ backgroundSize: '200% 100%', backgroundPosition: '60% 0' }}>
                    In Just 30 Days
                  </span>
                </h2>
                <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                  Join 500+ law firms using Kayse to revolutionize their client retention
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                className="grid md:grid-cols-3 gap-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { stat: "40%", label: "Reduction in Client Attrition", sublabel: "Average across all practice areas" },
                  { stat: "2-3 Months", label: "Time to Full ROI", sublabel: "Most firms see positive returns quickly" },
                  { stat: "24/7/365", label: "Client Support Coverage", sublabel: "Never miss another opportunity" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                             bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                             border border-white/10
                             shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                             group transform-gpu transition-all duration-500
                             hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                             hover:scale-[1.02] text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{item.stat}</div>
                      <div className="text-xl font-semibold text-white mb-2">{item.label}</div>
                      <div className="text-white/60 text-sm">{item.sublabel}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Value Proposition */}
              <motion.div 
                className="relative p-8 md:p-12 rounded-[2.5rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5
                         border border-accent/20
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_25px_50px_-12px_rgba(0,127,255,0.25)]
                         mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-semibold text-white mb-6">Why Law Firms Choose Kayse</h3>
                    <div className="space-y-4">
                      {[
                        "Reduce client attrition by up to 40% with AI-powered sentiment analysis",
                        "Free up 30+ hours weekly by automating routine client communications", 
                        "Capture every opportunity with 24/7 availability and instant response",
                        "Integrate seamlessly with your existing practice management system",
                        "Get complete visibility with recordings and analytics of every interaction"
                      ].map((benefit, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                          </div>
                          <span className="text-white/90 leading-relaxed">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative inline-block mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent/10 rounded-full blur-2xl"></div>
                      <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-full p-8 border border-white/10">
                        <div className="text-6xl md:text-7xl font-bold text-accent">30</div>
                        <div className="text-white font-semibold">Day Implementation</div>
                      </div>
                    </div>
                    <p className="text-white/70 mb-6">Most firms are fully operational within 30 days, with dedicated support throughout the process.</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.a
                    href="/demo"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold rounded-2xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                             hover:shadow-[0_16px_50px_rgba(59,130,246,0.5)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden min-w-[280px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">Book Your Free Demo</span>
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
                  </motion.a>
                  
                  <div className="text-white/60 text-lg">or</div>
                  
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 text-xl font-semibold rounded-2xl
                             bg-white/10 backdrop-blur-sm border border-white/20
                             hover:bg-white/15 hover:border-white/30
                             transform hover:scale-[1.02] transition-all duration-300
                             min-w-[280px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-white">Talk to Our Team</span>
                  </motion.a>
                </div>
                
                <p className="text-white/60 mt-6 text-lg">
                  <span className="font-semibold text-accent">Free consultation</span> • No setup fees • Cancel anytime
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;