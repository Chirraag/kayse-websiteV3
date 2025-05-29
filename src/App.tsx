import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div
      className="min-h-screen bg-primary font-manrope"
      key={location.pathname}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <Router basename="/">
      <div className="relative">
        <div className="fixed inset-0 bg-primary" />
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
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
              </PageWrapper>
            }
          />
          <Route
            path="/solutions"
            element={
              <PageWrapper>
                <Solutions />
              </PageWrapper>
            }
          />
          <Route
            path="/practice-areas"
            element={
              <PageWrapper>
                <PracticeAreas />
              </PageWrapper>
            }
          />
          <Route
            path="/integrations"
            element={
              <PageWrapper>
                <Integrations />
              </PageWrapper>
            }
          />
          <Route
            path="/why-kayse"
            element={
              <PageWrapper>
                <WhyKayse />
              </PageWrapper>
            }
          />
          <Route
            path="/resources"
            element={
              <PageWrapper>
                <Resources />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/faq"
            element={
              <PageWrapper>
                <FAQ />
              </PageWrapper>
            }
          />
          <Route
            path="/demo"
            element={
              <PageWrapper>
                <Demo />
              </PageWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
