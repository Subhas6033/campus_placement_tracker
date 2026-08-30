import { motion } from "framer-motion";

const FloatingAlert = ({ reduce }) => {
  return (
    <motion.div
      initial={
        reduce
          ? undefined
          : {
              opacity: 0,
              x: 15,
              rotate: 6,
            }
      }
      animate={
        reduce
          ? undefined
          : {
              opacity: 1,
              x: 0,
              rotate: 3,
            }
      }
      transition={{
        delay: 0.95,
        duration: 0.6,
      }}
      className="
        absolute -right-4 top-10
        hidden
        rounded-xl
        border border-ink-line-strong
        bg-ink
        p-3
        text-paper
        shadow-[0_12px_24px_-10px_rgba(14,17,22,0.35)]
        sm:block
      "
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a8d96]">
        New alert
      </p>

      <p className="mt-1 text-[12px] font-medium">Microsoft opens</p>

      <p className="text-[11px] text-[#cfd1d6]">Closes in 2 days</p>
    </motion.div>
  );
};

export default FloatingAlert;
