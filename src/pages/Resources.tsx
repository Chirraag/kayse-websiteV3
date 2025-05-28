import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, BarChart, MessageCircle, Download, CheckCircle2, Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallHalo from '../components/CallHalo';

const Resources: React.FC = () => {
  const caseStudies = [
    {
      title: "Mass Tort Firm Case Study",
      description: "How a firm with 2,500+ cases reduced attrition by 27-42%",
      image: "/lap-1.png",
      category: "Case Study",
      metrics: "2,500+ cases • 27-42% reduction",
      practiceArea: "Mass Tort"
    },
    {
      title: "Personal Injury Practice Study",
      description: "Managing client expectations during treatment",
      image: "/lap-2.png",
      category: "Case Study",
      metrics: "35% improved satisfaction",
      practiceArea: "Personal Injury"
    },
    {
      title: "Family Law Firm Analysis",
      description: "Balancing emotional support with efficient communication",
      image: "/lap-3.png",
      category: "Case Study",
      metrics: "45% fewer client complaints",
      practiceArea: "Family Law"
    }
  ];

  const research = [
    {
      title: "Client Satisfaction Study",
      description: "Key findings from 1,200+ legal clients",
      category: "Research",
      readTime: "15 min read",
      highlights: ["Communication frequency impact", "Satisfaction drivers", "Retention predictors"]
    },
    {
      title: "Communication Frequency Analysis",
      description: "Optimal timing for client updates",
      category: "Research",
      readTime: "12 min read",
      highlights: ["Weekly vs. monthly updates", "Practice area variations", "Client preferences"]
    },
    {
      title: "Attrition Risk Factor Research",
      description: "Early warning signs of dissatisfaction",
      category: "Research",
      readTime: "18 min read",
      highlights: ["Top 10 risk indicators", "Prevention strategies", "Intervention timing"]
    }
  ];

  const guides = [
    {
      title: "Legal Client Communication Playbook",
      description: "Best practices for engagement",
      category: "Guide",
      readTime: "20 min read",
      topics: ["Communication templates", "Timing strategies", "Channel preferences"]
    },
    {
      title: "Case Resolution Phase Guide",
      description: "Strategies for final stages",
      category: "Guide",
      readTime: "15 min read",
      topics: ["Settlement communication", "Managing expectations", "Post-resolution follow-up"]
    },
    {
      title: "Client Portal Adoption Guide",
      description: "Maximizing digital resource usage",
      category: "Guide",
      readTime: "10 min read",
      topics: ["Onboarding strategies", "Usage metrics", "Engagement tactics"]
    }
  ];

  const blogPosts = [
    {
      title: "5 Warning Signs Your Clients Are About to Leave",
      description: "Learn to identify the subtle indicators that a client is considering changing representation.",
      category: "Blog",
      readTime: "4 min read",
      date: "May 15, 2025",
      image: "/blog-1.png"
    },
    {
      title: "How to Scale Your Law Firm Without Adding Staff",
      description: "Strategies for growing your practice while maintaining lean operations through technology.",
      category: "Blog",
      readTime: "5 min read",
      date: "May 8, 2025",
      image: "/blog-2.png"
    },
    {
      title: "The Psychology of Client Communication in Legal Matters",
      description: "Understanding the emotional needs of clients during different phases of legal representation.",
      category: "Blog",
      readTime: "6 min read",
      date: "May 1, 2025",
      image: "/blog-3.png"
    },
    {
      title: "AI Ethics in Legal Client Communication",
      description: "Navigating the ethical considerations of using AI for client communication in legal settings.",
      category: "Blog",
      readTime: "7 min read",
      date: "April 24, 2025",
      image: "/blog-4.png"
    }
  ];

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
        <span className="text-white">Client Retention Insights for</span>
        <span
          className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
          style={{ backgroundSize: '200% 100%', backgroundPosition: '60% 0' }}
        >
          Law Firms
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
      >
        Research, guides, case studies, and tools to improve client retention
      </motion.p>
    </div>
  </div>
</section>

        {/* Case Studies Section */}
        <section className="relative py-20 bg-black overflow-hidden" id="case-studies">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] from-0% via-[#001020] via-50% to-[#001428] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>
            
            {/* CallHalo component */}
            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Real Results from</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Law Firms
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Explore how leading practices have transformed their client retention
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.a
                  key={index}
                  href={`/resources/case-studies/${study.title.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block"
                >
                  <div className="relative mb-4 rounded-[2rem] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-accent/80 text-white text-xs font-medium rounded-full mb-2">
                        {study.practiceArea}
                      </span>
                      <p className="text-white/80 text-sm font-medium">{study.metrics}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-white/70">{study.description}</p>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.a
                href="/resources?filter=case-studies"
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
                <span className="relative text-white">View All Case Studies</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200 relative" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Featured Resource - Mass Tort Case Study */}
        <section className="relative py-20 bg-gradient-to-b from-black to-[#000a17] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] from-0% via-[#001630] via-50% to-[#001838] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-8 md:p-12 rounded-[2.5rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500"
              >
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                  <span>Featured Case Study</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                  Case Study: Mass Tort Firm Transformation
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Challenge</h3>
                    <p className="text-white/70">A national firm handling 2,500+ Camp Lejeune cases struggled with client communication and retention during complex MDL proceedings.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Solution</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Implemented Kayse Voice AI for routine updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Deployed sentiment analysis to identify at-risk clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Launched client portal with case-specific milestones</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Results</h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>83% of routine inquiries handled by AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Up to 40% or greater reduction in client attrition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>25-30 staff hours weekly reallocated to case advancement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>System ROI achieved within two months</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <a 
                    href="/resources/case-studies/mass-tort-transformation" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">Download Full Case Study</span>
                    <Download className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform duration-200 relative" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#000a17] to-[#001e45] overflow-hidden" id="research">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001838] from-0% via-[#001a40] via-50% to-[#001c48] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.15)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Legal Client Retention</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Research
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Access our latest research on factors affecting client retention
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {research.map((report, index) => (
                <motion.a
                  key={index}
                  href={`/resources/research/${report.title.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                           hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-16 w-16 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 transition-all duration-300">
                        <BarChart className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        {report.category}
                      </span>
                      <span className="text-white/60 text-sm">{report.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                      {report.title}
                    </h3>
                    <p className="text-white/70 mb-4">{report.description}</p>
                    <ul className="space-y-1 mb-6">
                      {report.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-white/60 text-sm">• {highlight}</li>
                      ))}
                    </ul>
                    <div className="flex items-center text-accent group-hover:text-white transition-colors duration-300">
                      <span className="mr-2">Access research</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.a
                href="/resources?filter=research"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-2xl
                         bg-white/10 backdrop-blur-sm border border-white/10
                         hover:bg-white/15 hover:border-white/20
                         transform hover:scale-[1.02] transition-all duration-300
                         group"
              >
                <span className="text-white">Explore Research</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#001e45] to-[#003c8f] overflow-hidden" id="guides">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001c48] from-0% via-[#001e50] via-50% to-[#002058] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Client Retention Strategy</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Guides
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Practical resources to improve your client retention
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.a
                  key={index}
                  href={`/resources/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                           bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                           border border-white/10
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                           group transform-gpu transition-all duration-500 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                           hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="rounded-full bg-gradient-to-br from-white/20 to-white/5 h-16 w-16 flex items-center justify-center border border-white/10 shadow-lg shadow-white/10 group-hover:shadow-white/20 group-hover:from-white/30 transition-all duration-300">
                        <BookOpen className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                        {guide.category}
                      </span>
                      <span className="text-white/60 text-sm">{guide.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                      {guide.title}
                    </h3>
                    <p className="text-white/70 mb-4">{guide.description}</p>
                    <div className="mb-6">
                      <p className="text-white/60 text-sm mb-2">Topics covered:</p>
                      <ul className="space-y-1">
                        {guide.topics.map((topic, idx) => (
                          <li key={idx} className="text-white/60 text-sm">• {topic}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-accent group-hover:text-white transition-colors duration-300">
                      <span className="mr-2">Download guide</span>
                      <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.a
                href="/resources?filter=guides"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-2xl
                         bg-white/10 backdrop-blur-sm border border-white/10
                         hover:bg-white/15 hover:border-white/20
                         transform hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-white">Download Guides</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative py-20 bg-[#000a17] overflow-hidden" id="blog">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#002058] from-0% via-[#001e50] via-50% to-[#000814] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Latest</span>
                <span className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundPosition: "60% 0",
                      }}>
                  Insights
                </span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                Stay updated with our latest articles on client retention and practice management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.a
                  key={index}
                  href={`/resources/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group block"
                >
                  <div className="relative mb-4 rounded-[1.5rem] overflow-hidden backdrop-blur-xl
                                bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                                border border-white/10 aspect-w-16 aspect-h-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 flex items-center justify-center">
                      <MessageCircle className="w-16 h-16 text-white/20" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/60 text-sm">{post.date}</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/70 line-clamp-2">{post.description}</p>
                </motion.a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.a
                href="/resources?filter=blog"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-2xl
                         bg-white/10 backdrop-blur-sm border border-white/10
                         hover:bg-white/15 hover:border-white/20
                         transform hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-white">View All Articles</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;