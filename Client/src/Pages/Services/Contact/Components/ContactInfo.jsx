import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../../../Components/index";
import {
  fadeUpVariants,
  staggerContainer,
  cardHover,
  iconHover,
} from "../../../../Animations/Motions";
import { contactInfo } from "../../../../Data/contactData";

const ContactInfo = () => {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} variants={fadeUpVariants}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Card className="h-full">
                    <motion.div
                      variants={iconHover}
                      className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line bg-white text-brand-500"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </motion.div>

                    <h3 className="text-base font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13.5px] leading-6 text-ink-mute">
                      {item.description}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-4 inline-block text-sm font-medium text-brand-500 transition-colors hover:text-brand-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-4 text-sm font-medium text-brand-500">
                        {item.value}
                      </p>
                    )}
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
