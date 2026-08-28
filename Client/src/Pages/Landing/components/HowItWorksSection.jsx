import { motion, useReducedMotion } from "framer-motion";
import { FiUserPlus, FiSend, FiAward } from "react-icons/fi";

const steps = [
  {
    icon: FiUserPlus,
    number: "01",
    title: "Set up your profile",
    description:
      "Add your resume, skills, and target roles. We'll surface the companies that fit you best.",
    chips: ["Resume", "Skills", "Targets"],
  },
  {
    icon: FiSend,
    number: "02",
    title: "Track every application",
    description:
      "Apply with one click and watch each opportunity move through your personal pipeline.",
    chips: ["One-click apply", "Pipeline view", "Reminders"],
  },
  {
    icon: FiAward,
    number: "03",
    title: "Ace the interview",
    description:
      "Prep with curated questions, attend the interview, and update your status — all in one place.",
    chips: ["Question bank", "Mock AI", "Notes"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const HowItWorksSection = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      {/* Dotted grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(246,245,241,0.6) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#b88947]">
            How it works
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] font-normal tracking-[-0.022em] text-paper">
            From signup to offer letter.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#cfd1d6]">
            Three deliberate steps that take the chaos out of your placement
            season.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 lg:grid-cols-3 lg:gap-0"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={reduce ? undefined : item}
                  className="relative"
                >
                  {/* Connector line on desktop */}
                  {idx < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-12 hidden h-px w-full -translate-y-1/2 bg-linear-to-r from-[#2a313d] via-ink-mute to-transparent lg:block"
                    />
                  )}

                  <div className="relative px-2 lg:px-10">
                    {/* Number + icon stack */}
                    <div className="flex items-center gap-4">
                      <span className="font-display text-[44px] font-normal leading-none tracking-tight text-[#2f6f55]">
                        {step.number}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-soft bg-ink-soft text-[#b88947]">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[20px] font-medium tracking-tight text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-[#cfd1d6]">
                      {step.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-md border border-ink-soft bg-ink-soft px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.15em] text-[#a8abb3]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
