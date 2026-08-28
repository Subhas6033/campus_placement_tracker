import { motion, useReducedMotion } from "framer-motion";
import {
  FiBriefcase,
  FiTarget,
  FiBookOpen,
  FiBarChart2,
  FiBell,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    icon: FiBriefcase,
    eyebrow: "Pipeline",
    title: "Application tracking",
    description:
      "Every application lives on one board. Drag a card from Applied to Offer and watch your season come into focus.",
    points: ["Kanban pipeline", "Status history", "Custom tags"],
  },
  {
    icon: FiTarget,
    eyebrow: "Discovery",
    title: "Company discovery",
    description:
      "Browse 500+ visiting companies — filter by role, CTC, eligibility, and deadline. Save the ones that fit.",
    points: ["Live eligibility", "CTC + role filters", "Saved searches"],
  },
  {
    icon: FiBookOpen,
    eyebrow: "Prep",
    title: "Interview prep",
    description:
      "Curated question banks, company-specific prep guides, and AI mock interviews to sharpen your edge.",
    points: ["Question bank", "Mock interviews", "Prep guides"],
  },
  {
    icon: FiBarChart2,
    eyebrow: "Insight",
    title: "Real-time analytics",
    description:
      "See your conversion funnel, skill gaps, and readiness score next to every company you target.",
    points: ["Conversion funnel", "Skill map", "Readiness score"],
  },
  {
    icon: FiBell,
    eyebrow: "Alerts",
    title: "Smart alerts",
    description:
      "Instant notifications when a company opens applications or your status changes. Never miss a deadline.",
    points: ["Open / close windows", "Status updates", "Daily digest"],
  },
  {
    icon: FiUsers,
    eyebrow: "Network",
    title: "Peer collaboration",
    description:
      "Share referrals, swap interview notes, and learn from seniors who've been through this season.",
    points: ["Referrals", "Interview notes", "Senior threads"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturesSection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-mute">
              Features
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.75rem)] font-normal leading-[1.06] tracking-[-0.022em] text-ink">
              Everything you need,
              <br />
              <span className="text-ink-mute">
                from first shortlist to final offer.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-ink-mute lg:col-span-5">
            One workspace replaces the spreadsheets, the WhatsApp groups, and
            the panic. Each module is built to fade into the background until
            you need it.
          </p>
        </motion.div>

        <div className="mt-14">
          <div className="rule" />
        </div>

        {/* Features — editorial rows */}
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={feature.title}
                variants={reduce ? undefined : item}
                className="group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex shrink-0 flex-col items-start">
                    <span className="font-mono text-[10.5px] tracking-[0.18em] text-[#8a8d96]">
                      {num}
                    </span>
                    <span className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-line bg-paper-soft text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2f6f55]">
                      {feature.eyebrow}
                    </p>
                    <h3 className="mt-1.5 font-display text-[20px] font-medium tracking-tight text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-mute">
                      {feature.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                      {feature.points.map((p) => (
                        <li
                          key={p}
                          className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-mute"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#2f6f55]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
