import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../../Animations/Motions";

const AboutFooter = () => {
  return (
    <motion.footer
      variants={fadeUpVariants}
      className="mx-auto max-w-7xl px-5 pb-10 pt-2 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-2 border-t border-ink-line pt-5 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
        <span>Campus Placement Tracker</span>

        <span>Built to make placement season a little simpler.</span>
      </div>
    </motion.footer>
  );
};

export default AboutFooter;
