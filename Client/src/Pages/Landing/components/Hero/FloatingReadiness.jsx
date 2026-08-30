import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const FloatingReadiness = ({ reduce }) => {
  return (
    <motion.div
      initial={
        reduce
          ? undefined
          : {
              opacity: 0,
              x: -15,
              rotate: -6,
            }
      }
      animate={
        reduce
          ? undefined
          : {
              opacity: 1,
              x: 0,
              rotate: -3,
            }
      }
      transition={{
        delay: 0.8,
        duration: 0.6,
      }}
      className="
        absolute -left-6 bottom-10
        hidden
        rounded-xl
        border border-ink-line-strong
        bg-white
        p-3
        shadow-[0_12px_24px_-10px_rgba(14,17,22,0.2)]
        sm:block
      "
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a8d96]">
        Readiness
      </p>

      <div className="mt-1 flex items-center gap-2">
        <p className="font-display text-[24px] font-medium leading-none text-ink">
          84
        </p>

        <span className="text-[12px] text-ink-mute">/100</span>

        <TrendingUp className="h-3.5 w-3.5 text-[#2f6f55]" />
      </div>

      <div className="mt-2 h-1 w-24 overflow-hidden rounded-full bg-ink-line">
        <motion.div
          initial={reduce ? undefined : { width: 0 }}
          animate={reduce ? undefined : { width: "84%" }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="h-full bg-[#2f6f55]"
        />
      </div>
    </motion.div>
  );
};

export default FloatingReadiness;
