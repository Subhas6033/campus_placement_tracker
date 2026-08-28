import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiPlay, FiCheck } from "react-icons/fi";
import { ArrowUpRight, Briefcase, Building2, Calendar } from "lucide-react";
import Button from "../../../Components/Common/Button";

const HeroSection = ({ onGetStarted, onSignIn }) => {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Subtle paper grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-paper"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-12"
        >
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-line-strong bg-paper-soft px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-mute">
                <span className="live-dot" />
                Season 2026 is live
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,5.6vw,5rem)] font-normal leading-[1.02] tracking-tight text-ink"
            >
              The placement tracker
              <br />
              that{" "}
              <span className="relative inline-block">
                <span className="relative z-10">actually works.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-[#b88947]/30"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-[16px] leading-[1.6] text-ink-mute"
            >
              Discover visiting companies, manage every application, prep for
              interviews, and watch offers land — all in one quiet, focused
              workspace.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onGetStarted}
                className="h-12! px-5! text-[14px]!"
              >
                Get started free
                <FiArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={onSignIn}
                className="h-12! px-4! text-[14px]!"
              >
                <FiPlay className="h-4 w-4" />
                Watch demo
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-ink-mute"
            >
              {[
                "Free for students",
                "No card required",
                "Setup in 2 minutes",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <FiCheck className="h-3.5 w-3.5 text-[#2f6f55]" />
                  {t}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-3 border-t border-ink-line pt-6"
            >
              <div className="flex -space-x-1.5">
                {["bg-[#235740]", "bg-[#b88947]", "bg-ink", "bg-[#3a3f4a]"].map(
                  (c, i) => (
                    <span
                      key={i}
                      className={`h-7 w-7 rounded-full border-2 border-paper ${c}`}
                    />
                  ),
                )}
              </div>
              <p className="text-[12.5px] leading-5 text-ink-mute">
                <span className="font-semibold text-ink">10,000+</span> students
                tracking placements this season
              </p>
            </motion.div>
          </div>

          {/* Product preview */}
          <motion.div
            variants={item}
            className="lg:col-span-5"
            aria-hidden="true"
          >
            <ProductPreview />
          </motion.div>
        </motion.div>

        {/* Brand strip */}
        <div className="mt-20 border-t border-ink-line pt-10">
          <p className="text-center font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#8a8d96]">
            Trusted by students from
          </p>
          <div className="mt-6 grid grid-cols-3 items-center gap-y-6 sm:grid-cols-6">
            {[
              "IIT Bombay",
              "NIT Trichy",
              "BITS Pilani",
              "VIT Vellore",
              "MIT",
              "Stanford",
            ].map((brand) => (
              <span
                key={brand}
                className="text-center font-display text-[15px] tracking-tight text-ink-mute/70"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* Inline product preview — a dashboard mock, not a gradient blob */
const ProductPreview = () => {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="relative overflow-hidden rounded-2xl border border-ink-line-strong bg-white shadow-[0_24px_60px_-20px_rgba(14,17,22,0.25)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-ink-line bg-paper-soft px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b88947]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#cfd1d6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line-strong" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8d96]">
            tracker.app / pipeline
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#8a8d96]" />
        </div>

        <div className="grid grid-cols-5">
          {/* Sidebar */}
          <aside className="col-span-1 border-r border-ink-line bg-paper-soft p-3">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a8d96]">
              Stages
            </div>
            <ul className="mt-3 space-y-1.5">
              {[
                { name: "Applied", count: 12 },
                { name: "Shortlisted", count: 5, active: true },
                { name: "Interview", count: 3 },
                { name: "Offer", count: 1 },
              ].map((s) => (
                <li
                  key={s.name}
                  className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[11px] ${
                    s.active ? "bg-ink text-paper" : "text-ink-mute"
                  }`}
                >
                  <span>{s.name}</span>
                  <span className="font-mono text-[10px] opacity-70">
                    {s.count}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Card list */}
          <div className="col-span-4 space-y-2 p-4">
            {[
              {
                company: "Stripe",
                role: "SDE Intern",
                ctc: "₹1.2L/mo",
                stage: "Shortlisted",
                color: "#635bff",
                icon: Building2,
              },
              {
                company: "Razorpay",
                role: "Frontend Engineer",
                ctc: "₹18 LPA",
                stage: "Interview — Round 2",
                color: "#3395ff",
                icon: Briefcase,
              },
              {
                company: "Cred",
                role: "Product Engineer",
                ctc: "₹22 LPA",
                stage: "Applied · 2 days ago",
                color: "#000000",
                icon: Calendar,
              },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.company}
                  className="flex items-center gap-3 rounded-lg border border-ink-line bg-white p-3"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: row.color }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12.5px] font-semibold text-ink">
                      {row.company}{" "}
                      <span className="font-normal text-ink-mute">
                        · {row.role}
                      </span>
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-ink-mute">
                      {row.stage}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md border border-ink-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-mute">
                    {row.ctc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating chip — readiness */}
      <div className="absolute -left-6 bottom-10 hidden -rotate-3 rounded-xl border border-ink-line-strong bg-white p-3 shadow-[0_12px_24px_-10px_rgba(14,17,22,0.2)] sm:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a8d96]">
          Readiness
        </p>
        <p className="mt-1 font-display text-[24px] font-medium leading-none text-ink">
          84
          <span className="ml-1 text-[12px] font-normal text-ink-mute">
            /100
          </span>
        </p>
        <div className="mt-2 h-1 w-24 overflow-hidden rounded-full bg-ink-line">
          <div className="h-full w-[84%] bg-[#2f6f55]" />
        </div>
      </div>

      {/* Floating chip — alert */}
      <div className="absolute -right-4 top-10 hidden rotate-3 rounded-xl border border-ink-line-strong bg-ink p-3 text-paper shadow-[0_12px_24px_-10px_rgba(14,17,22,0.35)] sm:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a8d96]">
          New alert
        </p>
        <p className="mt-1 text-[12px] font-medium">Microsoft opens</p>
        <p className="text-[11px] text-[#cfd1d6]">Closes in 2 days</p>
      </div>
    </div>
  );
};

export default HeroSection;
