import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiCheckCircle, FiMail, FiArrowRight } from "react-icons/fi";
import { Input } from "../../../Components/Common/Input";
import Button from "../../../Components/Common/Button";
import Modal from "../../../Components/Common/Modal";

const CTASection = () => {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError("Email is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setEmail("");
    setShowSuccess(true);
  };

  return (
    <section className="bg-paper px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-ink-soft bg-ink px-6 py-16 text-paper shadow-[0_24px_60px_-20px_rgba(14,17,22,0.35)] sm:px-12 sm:py-20"
        >
          {/* Decorative grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(246,245,241,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,245,241,0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#b88947]">
                Get early access
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.85rem,3.2vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.022em] text-paper">
                Take the stress out of placements.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-[1.6] text-[#cfd1d6]">
                Join thousands of students who turned their placement season
                into a placement success story. Setup takes under a minute.
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-2 text-[13px] text-[#cfd1d6] sm:grid-cols-2">
                {[
                  "Free forever for students",
                  "No credit card required",
                  "Setup in 2 minutes",
                  "Cancel any time",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#2f6f55] bg-[#2f6f55]/15 text-brand-300">
                      <FiCheckCircle className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-ink-soft bg-ink-soft/60 p-5 backdrop-blur"
                noValidate
              >
                <label
                  htmlFor="cta-email"
                  className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#8a8d96]"
                >
                  College email
                </label>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="you@college.edu"
                    disabled={submitting}
                    autoComplete="email"
                    className={`
                      h-11 w-full rounded-md border bg-ink px-3.5
                      text-[14px] text-paper placeholder:text-[#6f737b]
                      outline-none transition-colors
                      focus:ring-2 focus:ring-[#2f6f55]/30
                      ${
                        error
                          ? "border-danger focus:border-danger"
                          : "border-[#2a313d] focus:border-[#2f6f55]"
                      }
                    `}
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="md"
                    loading={submitting}
                    className="h-11! sm:w-auto!"
                  >
                    <FiMail className="h-4 w-4" />
                    Join
                  </Button>
                </div>
                {error ? (
                  <p className="mt-1.5 text-xs text-[#e89e92]">{error}</p>
                ) : (
                  <p className="mt-1.5 text-xs text-[#8a8d96]">
                    We'll only email you about placements. No spam.
                  </p>
                )}
              </form>

              <a
                href="#features"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-[#cfd1d6] hover:text-paper"
              >
                Or explore the platform
                <FiArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="You're on the list!"
        description="Check your inbox to confirm and unlock early access."
        size="sm"
        footer={
          <Button
            variant="primary"
            size="md"
            onClick={() => setShowSuccess(false)}
          >
            Got it
          </Button>
        }
      >
        <div className="flex flex-col items-center gap-3 py-2 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#2f6f55]/10 text-[#2f6f55]">
            <FiCheckCircle className="h-6 w-6" />
          </span>
          <p className="text-[14px] leading-[1.6] text-ink-mute">
            We&apos;ve sent a confirmation to your email. Click the link to
            activate your account and start tracking placements.
          </p>
        </div>
      </Modal>
    </section>
  );
};

export default CTASection;
