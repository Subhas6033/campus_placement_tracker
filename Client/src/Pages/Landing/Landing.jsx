import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Common/Footer";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import GetStartedModal from "./components/GetStartedModal";

const Landing = () => {
  const navigate = useNavigate();
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  const openGetStarted = useCallback(() => setGetStartedOpen(true), []);
  const closeGetStarted = useCallback(() => setGetStartedOpen(false), []);

  const handleSignIn = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection onGetStarted={openGetStarted} onSignIn={handleSignIn} />
      <StatsStrip />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <GetStartedModal open={getStartedOpen} onClose={closeGetStarted} />
    </main>
  );
};

export default Landing;
