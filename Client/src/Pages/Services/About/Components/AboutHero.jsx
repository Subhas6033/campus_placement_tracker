import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../Components/index";

import {
  fadeUpVariants,
  floatingAnimation,
  buttonMotion,
} from "../../../../Animations/Motions";

const AboutHero = ({ onStoryClick }) => {
  const scrollToWorkflow = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative border-b border-ink-line">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={floatingAnimation}
          className="absolute right-[8%] top-24 h-40 w-40 rounded-full border border-brand-500/15"
        />

        <motion.div
          animate={{
            y: [0, 12, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute right-[13%] top-32 h-28 w-28 rounded-full bg-brand-500/4"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(47,111,85,0.07),transparent_30%)]" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariants}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-3 py-1.5 text-xs font-medium text-ink-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              About Campus Placement Tracker
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpVariants}
            className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Your placement journey,
            <span className="block text-brand-500">organized.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-7 max-w-2xl text-base leading-7 text-ink-mute sm:text-lg"
          >
            Campus Placement Tracker is a focused workspace built to help
            students navigate placement season with less chaos and more
            clarity—from discovering companies to celebrating the final offer.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.div {...buttonMotion}>
              <Button variant="accent" size="lg" onClick={onStoryClick}>
                Our story
              </Button>
            </motion.div>

            <motion.div {...buttonMotion}>
              <Button variant="secondary" size="lg" onClick={scrollToWorkflow}>
                How it works
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
