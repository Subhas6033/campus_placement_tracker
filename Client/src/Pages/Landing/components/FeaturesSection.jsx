import { useReducedMotion } from "framer-motion";
import FeaturesBackground from "./Features/FeaturesBackground";
import FeaturesHeader from "./Features/FeaturesHeader";
import FeatureGrid from "./Features/FeatureGrid";
import ValueStrip from "./Features/ValueStrip";
import StatsBar from "./Features/StatusBar";

const FeaturesSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#fafaf9] py-24 sm:py-32"
    >
      <FeaturesBackground />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FeaturesHeader reduce={reduce} />
        <FeatureGrid reduce={reduce} />
        <ValueStrip reduce={reduce} />
        <StatsBar reduce={reduce} />
      </div>
    </section>
  );
};

export default FeaturesSection;
