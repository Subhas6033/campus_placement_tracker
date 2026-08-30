import { motion, useReducedMotion } from "framer-motion";
import HeroContent from "./Hero/Herocontent";
import ProductPreview from "./Hero/Productpreview";
import BrandMarquee from "./Hero/BrandMarquee";

const HeroSection = ({ onGetStarted, onSignIn }) => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-paper"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          right-[-15%] top-[15%]
          h-125 w-125
          rounded-full
          bg-[#2f6f55]/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[-15%] top-[40%]
          h-87.5 w-87.5
          rounded-full
          bg-[#b88947]/2.5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-12"
        >
          <HeroContent
            item={item}
            onGetStarted={onGetStarted}
            onSignIn={onSignIn}
          />

          <motion.div variants={item} className="lg:col-span-5">
            <ProductPreview reduce={reduce} />
          </motion.div>
        </motion.div>

        <BrandMarquee reduce={reduce} />
      </div>
    </section>
  );
};

export default HeroSection;
