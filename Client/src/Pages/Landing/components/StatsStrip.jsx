import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "500+", label: "Companies tracked", hint: "across 20+ sectors" },
  { value: "10k", label: "Active students", hint: "this placement season" },
  { value: "92%", label: "Offer conversion", hint: "for active users" },
  { value: "₹24L", label: "Average CTC", hint: "for top performers" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const StatsStrip = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative -mt-12 px-6 sm:-mt-16">
      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-ink-line-strong overflow-hidden rounded-xl border border-ink-line-strong bg-white shadow-[0_12px_32px_-16px_rgba(14,17,22,0.15)] sm:grid-cols-4"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            variants={reduce ? undefined : item}
            className={`p-6 sm:p-8 ${
              idx === 0 || idx === 2 ? "border-r border-ink-line-strong" : ""
            } ${idx < 2 ? "border-b border-ink-line-strong sm:border-b-0" : ""}`}
          >
            <p className="font-display text-[32px] font-medium leading-none tracking-tight text-ink sm:text-[40px]">
              {stat.value}
            </p>
            <p className="mt-2 text-[13px] font-medium text-ink">
              {stat.label}
            </p>
            <p className="mt-0.5 text-[12px] text-ink-mute">{stat.hint}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsStrip;
