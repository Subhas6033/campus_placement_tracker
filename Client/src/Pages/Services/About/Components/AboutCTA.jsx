import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../Components/index";
import { scaleInVariants, buttonMotion } from "../../../../Animations/Motions";
import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="px-5 pb-10 sm:px-8 lg:px-10">
      <motion.div
        variants={scaleInVariants}
        className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-ink p-8 text-paper sm:p-12 lg:p-16"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-paper/50">
              Ready when you are
            </p>

            <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Make your placement journey easier to manage.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-paper/65">
              Keep opportunities, applications, preparation, and progress
              together—so you can spend less time organizing and more time
              preparing.
            </p>
          </div>

          <motion.div {...buttonMotion}>
            <Button
              variant="accent"
              size="lg"
              onClick={() => navigate("/signup")}
            >
              Start tracking
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
