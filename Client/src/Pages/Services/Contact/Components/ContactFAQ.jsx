import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../../../Components/index";
import {
  fadeUpVariants,
  staggerContainer,
  iconHover,
} from "../../../../Animations/Motions";
import { faqs } from "../../../../Data/contactData";

const ContactFAQ = () => {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand-500">
            Frequently asked
          </p>

          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Before you reach out.
          </h2>

          <p className="mt-4 text-[15px] leading-6 text-ink-mute">
            A few quick answers to common questions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {faqs.map((faq) => {
            const Icon = faq.icon;

            return (
              <motion.div key={faq.question} variants={fadeUpVariants}>
                <Card className="h-full">
                  <motion.div
                    variants={iconHover}
                    initial="rest"
                    whileHover="hover"
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-white text-brand-500"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </motion.div>

                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-[13.5px] leading-6 text-ink-mute">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
