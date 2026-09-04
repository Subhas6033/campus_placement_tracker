import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../../Animations/Motions";
import AboutHero from "./Components/AboutHero";
import AboutIntro from "./Components/AboutIntro";
import FeatureSection from "./Components/AboutFeature";
import PrinciplesSection from "./Components/AboutPrinciples";
import AboutCTA from "./Components/AboutCTA";
import AboutFooter from "./Components/AboutFooter";
import StoryModal from "./Components/StoryModal";

const About = () => {
  const [showStory, setShowStory] = useState(false);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen overflow-hidden bg-paper text-ink"
    >
      <AboutHero onStoryClick={() => setShowStory(true)} />
      <AboutIntro />
      <FeatureSection />
      <PrinciplesSection />
      <AboutCTA />
      <AboutFooter />
      <StoryModal open={showStory} onClose={() => setShowStory(false)} />
    </motion.main>
  );
};

export default About;
