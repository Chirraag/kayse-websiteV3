import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  ArrowRight,
  MessageCircle,
  Database,
  Bot,
  Users,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

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
      id={`objection-tabpanel-${index}`}
      aria-labelledby={`objection-tab-${index}`}
      {...other}
      className="py-6"
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const ObjectionAddressing: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section
      className="relative py-8 sm:py-16 lg:py-24 overflow-hidden"
      id="objections"
    >
      {/* ALL GRADIENT TRANSITION HAPPENS HERE - from black to light */}
      <div className="absolute inset-0">
        {/* Full gradient transition from black (matching solution) to light slate */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1e2847] via-40% to-[#1e40af] to-90%"></div>

        {/* Light blue accent in lower portion */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,_rgba(147,197,253,0.2)_0%,_transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 tracking-[-0.03em] leading-[1.1]">
            <span className="text-white">The Difference Between</span>
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              {" "}
              Communication
            </span>
            <span className="text-white"> and</span>
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              {" "}
              Connection
            </span>
          </h2>
        </div>

        {/* UPDATED: Much lighter, brighter content card */}
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
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginBottom: 4,
            }}
          >
            {/* UPDATED: Tabs with better contrast for light background */}
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "1rem",
                },
                "& .MuiTabs-root": {
                  minHeight: { xs: "48px", sm: "56px" },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#3e9dff",
                  height: "3px",
                  borderRadius: "1.5px",
                },
                "& .MuiTab-root": {
                  minHeight: { xs: "48px", sm: "56px" },
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  fontWeight: 500,
                  color: "rgba(0, 0, 0, 0.6)",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  borderRadius: "1rem",
                  margin: "0.25rem",
                  padding: { xs: "0.375rem 0.75rem", sm: "0.5rem 1rem" },
                  "&.Mui-selected": {
                    color: "#3e9dff",
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    fontWeight: 600,
                  },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.12)",
                  },
                },
              }}
            >
              <Tab
                label="Beyond Calls, Texts & Emails"
                icon={<MessageCircle size={22} />}
                iconPosition="start"
              />
              <Tab
                label="Beyond Generic CRMs"
                icon={<Database size={22} />}
                iconPosition="start"
              />
              <Tab
                label="Beyond Salesforce"
                icon={<Bot size={22} />}
                iconPosition="start"
              />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
              <div className="lg:max-w-xl">
                <div className="relative mb-6 rounded-[2rem] overflow-hidden group">
                  <motion.img
                    src="/lap-2.png"
                    alt="CRM Solution"
                    className="w-full h-auto rounded-[2rem] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div>
                {/* UPDATED: Lighter content boxes */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-900">
                    "I already call, text, and email my clients"
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                    The challenge isn't whether you're communicating, but
                    whether your team can maintain consistent, personalized
                    outreach when handling hundreds or thousands of clients
                    simultaneously over extended timelines.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Our AI-powered retention platform doesn't replace your
                    existing channels—it amplifies them. Rather than your staff
                    members spending 12-15 hours per week each on routine
                    updates, our human-like voice AI handles these
                    automatically, freeing your team for higher-value tasks.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative mb-6 rounded-2xl overflow-hidden group">
                  <motion.img
                    src="/lap-1.png"
                    alt="Generic CRM Solution"
                    className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    "I already have a CRM and send newsletters"
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    While newsletters are valuable for general updates, they
                    don't address the individual client's need for personalized
                    case status information or emotional reassurance during
                    lengthy proceedings.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Kayse enhances your CRM and other apps by adding
                    intelligent, automated 1:1 communications that respond to
                    each client's specific case status and emotional needs—with
                    sentiment analysis that continuously monitors communication
                    patterns for signs of frustration, confusion, or
                    disengagement that typically precede client attrition.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative mb-6 rounded-2xl overflow-hidden group">
                  <motion.img
                    src="/lap-3.png"
                    alt="Salesforce Solution"
                    className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/90 to-white/95 border border-blue-200/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    "I already have Salesforce"
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unlike Salesforce, which is designed for general business
                    and sales environments, our solution is purpose-built for
                    legal client retention:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 text-blue-500">•</span>
                      <span>
                        Our voice AI is specifically trained on legal client
                        conversations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 text-blue-500">•</span>
                      <span>
                        Our sentiment analysis recognizes the unique emotional
                        patterns that precede client dissatisfaction in long
                        litigation processes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 text-blue-500">•</span>
                      <span>
                        Our mobile client portal achieves 70%+ adoption rates
                        because it's designed specifically for clients who need
                        simplified case tracking
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Plus, unlike Salesforce's implementation costs that aren't
                    recoverable, Kayse is billable as a case expense to each
                    client file for injury firms.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </motion.div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <motion.a
            href="/why-kayse"
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
            <span className="relative text-white">See How We Compare</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ObjectionAddressing;
