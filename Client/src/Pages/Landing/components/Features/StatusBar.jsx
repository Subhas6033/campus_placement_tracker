import { motion } from "framer-motion";
import { stats } from "../../../../Data/FeatureData";

const StatsBar = ({ reduce }) => {
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="mt-12 border-y border-black/[0.07]"
    >
      <div className="grid grid-cols-2 divide-x divide-y divide-black/[0.07] sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </motion.div>
  );
};

const StatItem = ({ stat }) => {
  const Icon = stat.icon;

  return (
    <div className="flex items-center justify-center gap-3 px-4 py-6 sm:py-7">
      <div className="hidden h-8 w-8 items-center justify-center rounded-lg bg-[#2f6f55]/[0.07] sm:flex">
        <Icon className="h-4 w-4 text-[#2f6f55]" />
      </div>

      <div>
        <div className="font-display text-[20px] font-bold tracking-tight text-ink">
          {stat.value}
        </div>

        <div className="mt-0.5 text-[10px] font-medium text-ink-mute">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
