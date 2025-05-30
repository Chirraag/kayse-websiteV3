import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemStatement from "./components/ProblemStatement";
import SolutionOverview from "./components/SolutionOverview";
import ObjectionAddressing from "./components/ObjectionAddressing";
import ResultsSection from "./components/ResultsSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Solutions from "./pages/Solutions";
import PracticeAreas from "./pages/PracticeAreas";
import Integrations from "./pages/Integrations";
import WhyKayse from "./pages/WhyKayse";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Demo from "./pages/Demo";

function App() {
  // Ensure background is always set
  useEffect(() => {
    document.body.style.backgroundColor = "#000a17";
    document.documentElement.style.backgroundColor = "#000a17";

    // Create a style element to override any other styles
    const style = document.createElement("style");
    style.textContent = `
      html, body, #root {
        background-color: #000a17 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Multiple layers of background protection */}
      <div
        className="fixed inset-0 bg-primary -z-50"
        style={{ backgroundColor: "#000a17" }}
      />

      <div
        className="min-h-screen bg-primary font-manrope"
        style={{ backgroundColor: "#000a17" }}
      >
        <Router basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main>
                    <HeroSection />
                    <ProblemStatement />
                    <SolutionOverview />
                    <ObjectionAddressing />
                    <ResultsSection />
                    <FinalCTA />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/why-kayse" element={<WhyKayse />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
