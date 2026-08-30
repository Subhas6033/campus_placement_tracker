import { motion, useReducedMotion } from "framer-motion";
import {
  FiBriefcase,
  FiTarget,
  FiBookOpen,
  FiBarChart2,
  FiBell,
  FiUsers,
  FiCheck,
  FiArrowUpRight,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";
import { Sparkles, Zap, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: FiBriefcase,
    eyebrow: "PIPELINE",
    title: "Application tracking",
    description:
      "Manage every application from one clean workspace. Move opportunities from Applied to Offer without losing context.",
    points: ["Kanban pipeline", "Status history", "Custom tags"],
    color: "#2f6f55",
    badge: "Most used",
  },
  {
    icon: FiTarget,
    eyebrow: "DISCOVERY",
    title: "Company discovery",
    description:
      "Discover visiting companies and instantly filter opportunities by role, CTC, eligibility, and deadline.",
    points: ["Live eligibility", "CTC + role filters", "Saved searches"],
    color: "#b88947",
    badge: "New",
  },
  {
    icon: FiBookOpen,
    eyebrow: "PREPARATION",
    title: "Interview prep",
    description:
      "Prepare with curated question banks, company-specific guides, and realistic AI mock interviews.",
    points: ["Question bank", "Mock interviews", "Prep guides"],
    color: "#635bff",
    badge: "Popular",
  },
  {
    icon: FiBarChart2,
    eyebrow: "INSIGHTS",
    title: "Real-time analytics",
    description:
      "Understand your funnel, identify skill gaps, and know exactly where to focus your preparation.",
    points: ["Conversion funnel", "Skill map", "Readiness score"],
    color: "#3395ff",
  },
  {
    icon: FiBell,
    eyebrow: "AUTOMATION",
    title: "Smart alerts",
    description:
      "Stay ahead of application windows, status changes, deadlines, and important placement updates.",
    points: ["Application windows", "Status updates", "Daily digest"],
    color: "#e74c3c",
  },
  {
    icon: FiUsers,
    eyebrow: "NETWORK",
    title: "Peer collaboration",
    description:
      "Learn from students and seniors through referrals, interview experiences, and placement discussions.",
    points: ["Referrals", "Interview notes", "Senior threads"],
    color: "#8e44ad",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stats = [
  {
    label: "Companies tracked",
    value: "500+",
    icon: FiTarget,
  },
  {
    label: "Active students",
    value: "10K+",
    icon: FiUsers,
  },
  {
    label: "Applications managed",
    value: "50K+",
    icon: FiBriefcase,
  },
  {
    label: "Success rate",
    value: "94%",
    icon: Award,
  },
];

const FeaturesSection = () => {
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#fafaf9] py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#2f6f55]/[0.035] blur-3xl" />

        <div className="absolute -right-40 top-[35%] h-[420px] w-[420px] rounded-full bg-[#b88947]/[0.035] blur-3xl" />

        <div
          className="
            absolute inset-0 opacity-[0.035]
            [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ───────────────── HEADER ───────────────── */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#2f6f55]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2f6f55]">
              Everything in one place
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.35rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.045em] text-ink">
            Your entire placement journey.
            <br />
            <span className="bg-gradient-to-r from-[#2f6f55] via-[#2f6f55] to-[#b88947] bg-clip-text text-transparent">
              One intelligent workspace.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-ink-mute sm:text-[16px]">
            Replace scattered spreadsheets, WhatsApp groups, bookmarks, and
            last-minute panic with a single workspace designed around how
            students actually prepare and apply.
          </p>

          {/* Trust */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?random=${Math.random()}`}
                  alt=""
                  className="h-7 w-7 rounded-full border-2 border-paper object-cover"
                />
              ))}
            </div>

            <p className="text-xs text-ink-mute">
              Trusted by <span className="font-semibold text-ink">10,000+</span>{" "}
              students
            </p>
          </div>
        </motion.div>

        {/* ───────────────── FEATURE GRID ───────────────── */}
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.08 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={reduce ? undefined : item}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-black/[0.07]
                  bg-white
                  p-6
                  shadow-[0_1px_2px_rgba(0,0,0,0.03)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-black/[0.12]
                  hover:shadow-[0_16px_45px_rgba(0,0,0,0.07)]
                "
              >
                {/* Top accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: feature.color }}
                />

                {/* Background glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: feature.color }}
                />

                <div className="relative">
                  {/* Card header */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-xl
                        border border-black/[0.06]
                        bg-[#fafaf9]
                        transition-all duration-300
                        group-hover:scale-105
                      "
                      style={{
                        color: feature.color,
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <span className="font-mono text-[10px] font-medium text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Eyebrow + badge */}
                  <div className="mt-6 flex min-h-[18px] items-center gap-2">
                    <span
                      className="text-[9px] font-bold tracking-[0.16em]"
                      style={{ color: feature.color }}
                    >
                      {feature.eyebrow}
                    </span>

                    {feature.badge && (
                      <span className="rounded-full bg-[#2f6f55]/[0.08] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#2f6f55]">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="mt-2 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 min-h-[72px] text-[13.5px] leading-[1.65] text-ink-mute">
                    {feature.description}
                  </p>

                  {/* Feature list */}
                  <div className="mt-5 space-y-2.5 border-t border-black/[0.06] pt-5">
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-[12px] text-ink-mute"
                      >
                        <span
                          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: `${feature.color}12`,
                            color: feature.color,
                          }}
                        >
                          <FiCheck className="h-2.5 w-2.5" />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ───────────────── PRODUCT VALUE STRIP ───────────────── */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="
            mt-6 overflow-hidden rounded-2xl
            border border-black/[0.07]
            bg-ink
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Copy */}
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2f6f55]/20 blur-3xl"
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
                  <Zap className="h-3.5 w-3.5 text-[#b88947]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    Built for placement season
                  </span>
                </div>

                <h3 className="mt-5 max-w-xl font-display text-[28px] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[34px]">
                  Less time managing your applications.
                  <span className="text-white/45">
                    {" "}
                    More time becoming the candidate companies want.
                  </span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
                  Everything stays connected — applications, companies,
                  preparation, analytics, and deadlines.
                </p>

                <button
                  className="
                    mt-7 inline-flex items-center gap-2 rounded-xl
                    bg-white px-5 py-3
                    text-[13px] font-semibold text-ink
                    shadow-lg
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:cursor-pointer
                  "
                  onClick={() => navigate("/signup")}
                >
                  Start your free trial
                  <FiArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-2 border-t border-white/8 lg:border-l lg:border-t-0">
              {[
                {
                  icon: FiTrendingUp,
                  title: "Stay ahead",
                  text: "Know what needs your attention next.",
                },
                {
                  icon: FiClock,
                  title: "Save hours",
                  text: "Stop maintaining scattered trackers.",
                },
                {
                  icon: Shield,
                  title: "Never miss",
                  text: "Important deadlines stay visible.",
                },
                {
                  icon: Award,
                  title: "Prepare smarter",
                  text: "Focus preparation where it matters.",
                },
              ].map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="
                      border-b border-r border-white/[0.08]
                      p-6 transition-colors
                      hover:bg-white/[0.025]
                      last:border-b-0
                    "
                  >
                    <Icon className="h-5 w-5 text-white/50" />

                    <h4 className="mt-5 text-sm font-semibold text-white">
                      {value.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-5 text-white/40">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ───────────────── STATS ───────────────── */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 border-y border-black/[0.07]"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-black/[0.07] sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="
                    flex items-center justify-center gap-3
                    px-4 py-6
                    sm:py-7
                  "
                >
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
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
