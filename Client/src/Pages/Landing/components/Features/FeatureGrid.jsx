import { motion } from "framer-motion";
import { features } from "../../../../Data/FeatureData";
import FeatureCard from "./FeatureCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FeatureGrid = ({ reduce }) => {
  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.08 }}
      className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          variants={reduce ? undefined : item}
          className="h-full"
        >
          <FeatureCard feature={feature} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureGrid;
