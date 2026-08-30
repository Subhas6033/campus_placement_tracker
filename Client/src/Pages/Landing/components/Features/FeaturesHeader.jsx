import { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FeaturesHeader = ({ reduce }) => {
  const avatars = useMemo(() => {
    const used = new Set();

    while (used.size < 4) {
      used.add(Math.floor(Math.random() * 70) + 1);
    }

    return [...used].map((id) => `https://i.pravatar.cc/100?img=${id}`);
  }, []);

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-4xl text-center"
    >
      <HeaderEyebrow />

      <h2 className="font-display text-[clamp(2.35rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.045em] text-ink">
        Your entire placement journey.
        <br />
        <span className="bg-linear-to-r from-[#2f6f55] via-[#2f6f55] to-[#b88947] bg-clip-text text-transparent">
          One intelligent workspace.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-ink-mute sm:text-[16px]">
        Replace scattered spreadsheets, WhatsApp groups, bookmarks, and
        last-minute panic with a single workspace designed around how students
        actually prepare and apply.
      </p>

      <TrustAvatars avatars={avatars} />
    </motion.div>
  );
};

const HeaderEyebrow = () => {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3.5 py-1.5 shadow-sm">
      <Sparkles className="h-3.5 w-3.5 text-[#2f6f55]" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2f6f55]">
        Everything in one place
      </span>
    </div>
  );
};

const TrustAvatars = ({ avatars }) => {
  return (
    <div className="mt-7 flex items-center justify-center gap-3">
      <div className="flex -space-x-2">
        {avatars.map((avatar) => (
          <img
            key={avatar}
            src={avatar}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 rounded-full border-2 border-paper object-cover"
          />
        ))}
      </div>

      <p className="text-xs text-ink-mute">
        Trusted by <span className="font-semibold text-ink">10,000+</span>{" "}
        students
      </p>
    </div>
  );
};

export default FeaturesHeader;
