import { motion, useReducedMotion } from "framer-motion";
import { Card } from "../../../Components/Common/Card";
import { testimonials } from "../../../Data/Testimonials";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SectionHeading = ({ reduce, eyebrow, title, intro }) => (
  <motion.div
    initial={reduce ? undefined : { opacity: 0, y: 16 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55 }}
    className="mx-auto max-w-2xl text-center"
  >
    <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-mute">
      {eyebrow}
    </p>
    <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-normal tracking-[-0.022em] text-ink">
      {title}
    </h2>
    <p className="mt-3 text-[15px] leading-[1.6] text-ink-mute">{intro}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          reduce={reduce}
          eyebrow="Loved by students"
          title="Real stories. Real offers."
          intro="Hear from students who turned their placement season into a placement success."
        />

        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={reduce ? undefined : item}
              className={idx === 1 ? "lg:translate-y-4" : ""}
            >
              <Card className="h-full p-7!">
                {/* Quote glyph */}
                <span
                  className="font-display text-[44px] leading-none text-ink"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <p className="mt-1 text-[15px] leading-[1.6] text-ink">
                  {t.quote}
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-ink-line pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-[12px] font-semibold tracking-tight text-paper">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-semibold text-ink">
                      {t.name}
                    </p>
                    <p className="truncate text-[12px] text-ink-mute">
                      {t.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
