import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../../../Components/index";
import { features } from "../../../../Data/aboutData";

import {
  fadeUpVariants,
  staggerContainer,
  cardHover,
  iconHover,
} from "../../../../Animations/Motions";

const FeatureSection = () => {
  return (
    <section id="how-it-works" className="bg-paper-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-500">
            The workflow
          </p>

          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            From opportunity to offer.
          </h2>

          <p className="mt-4 text-[15px] leading-6 text-ink-mute">
            A simple flow designed around the way students actually experience
            campus placements.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={cardHover} initial="rest" whileHover="hover">
        <Card className="h-full">
          <div className="flex items-start justify-between gap-5">
            {/* Icon */}
            <motion.div
              variants={iconHover}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-line bg-white text-brand-500"
            >
              <Icon className="h-5 w-5" strokeWidth={1.7} />
            </motion.div>

            {/* Number */}
            <span className="font-mono text-xs text-ink-mute">
              {feature.number}
            </span>
          </div>

          <h3 className="mt-6 text-base font-semibold tracking-tight">
            {feature.title}
          </h3>

          <p className="mt-2 text-[13.5px] leading-6 text-ink-mute">
            {feature.description}
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default FeatureSection;
