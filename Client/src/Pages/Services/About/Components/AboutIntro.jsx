import React from "react";
import { motion } from "framer-motion";
import { stats } from "../../../../Data/aboutData";
import {
  fadeLeftVariants,
  fadeRightVariants,
  lineRevealVariants,
} from "../../../../Animations/Motions";

const AboutIntro = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <motion.div variants={fadeLeftVariants}>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-500">
            Why we built it
          </p>

          <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Placement season shouldn't feel like managing four different
            systems.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-mute">
            Between spreadsheets, college notices, job portals, interview notes,
            deadlines, and messages, it is easy to lose track of what matters.
            This application brings those moving pieces into one simple
            workspace.
          </p>
        </motion.div>

        <motion.div
          variants={fadeRightVariants}
          className="grid grid-cols-3 gap-2"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-ink-line pl-3 first:border-l-0 first:pl-0"
            >
              <p className="font-display text-3xl font-medium">{stat.value}</p>

              <p className="mt-1 text-[11px] leading-4 text-ink-mute">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={lineRevealVariants}
        className="mt-14 h-px w-full bg-ink-line"
      />
    </section>
  );
};

export default AboutIntro;
