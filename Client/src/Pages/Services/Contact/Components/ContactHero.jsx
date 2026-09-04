import React from "react";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  floatingAnimation,
} from "../../../../Animations/Motions";

const ContactHero = () => {
  return (
    <section className="relative border-b border-ink-line">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={floatingAnimation}
          className="absolute right-[8%] top-20 h-36 w-36 rounded-full border border-brand-500/15"
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
          className="absolute right-[13%] top-28 h-24 w-24 rounded-full bg-brand-500/4"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(47,111,85,0.07),transparent_30%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUpVariants}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-3 py-1.5 text-xs font-medium text-ink-mute">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Get in touch
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          >
            Let's make placement season
            <span className="block text-brand-500">a little clearer.</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="mt-7 max-w-2xl text-base leading-7 text-ink-mute sm:text-lg"
          >
            Have a question, found something that could be better, or simply
            want to share an idea? We'd love to hear from you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
