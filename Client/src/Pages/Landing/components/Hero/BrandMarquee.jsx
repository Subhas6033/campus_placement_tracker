import { motion } from "framer-motion";

const brands = [
  "JGEC",
  "IIT Bombay",
  "NIT Trichy",
  "BITS Pilani",
  "VIT Vellore",
  "MIT",
  "Stanford",
];

const BrandMarquee = ({ reduce }) => {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 15 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mt-20 border-t border-ink-line pt-10"
    >
      <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#8a8d96]">
        Trusted by students from
      </p>

      <div className="relative mt-6 overflow-hidden">
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-y-0 left-0 z-10
            w-16
            bg-linear-to-r
            from-paper to-transparent
          "
        />

        {/* Right fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-y-0 right-0 z-10
            w-16
            bg-linear-to-l
            from-paper to-transparent
          "
        />

        <motion.div
          className="flex w-max items-center gap-12 sm:gap-16"
          animate={
            reduce
              ? undefined
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 28,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {[...brands, ...brands].map((brand, index) => (
            <span
              key={`${brand}-${index}`}
              className="
                shrink-0
                whitespace-nowrap
                font-display
                text-[15px]
                tracking-tight
                text-ink-mute/70
              "
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BrandMarquee;
