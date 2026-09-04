import React from "react";
import { motion } from "framer-motion";
import { principles } from "../../../../Data/aboutData";
import {
  fadeLeftVariants,
  fadeUpVariants,
  staggerContainer,
} from "../../../../Animations/Motions";

const PrinciplesSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div variants={fadeLeftVariants}>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-500">
            Our approach
          </p>

          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Built around students,
            <span className="block text-ink-mute">not spreadsheets.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="divide-y divide-ink-line border-y border-ink-line"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={fadeUpVariants}
              className="grid gap-3 py-6 sm:grid-cols-[32px_1fr] sm:gap-5"
            >
              <span className="font-mono text-xs text-ink-mute">
                0{index + 1}
              </span>

              <div>
                <h3 className="text-[15px] font-semibold">{principle.title}</h3>

                <p className="mt-2 max-w-xl text-[13.5px] leading-6 text-ink-mute">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
