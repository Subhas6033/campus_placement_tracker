import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { brands } from "../../../../Data/College";

const BrandItem = ({ brand }) => {
  return (
    <div
      className="
        group/brand flex shrink-0 items-center gap-2.5
        rounded-full
        border border-ink-line/70
        bg-white/70
        px-4 py-2.5
        shadow-[0_1px_2px_rgba(0,0,0,0.02)]
        backdrop-blur-sm
        transition-all duration-300
        hover:border-[#2f6f55]/20
        hover:bg-white
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]
      "
    >
      {/* College mark */}
      <span
        aria-hidden="true"
        className="
          flex h-7 w-7 shrink-0 items-center justify-center
          rounded-full
          bg-paper
          font-mono text-[9px] font-semibold
          uppercase
          tracking-tight
          text-ink-mute
          ring-1 ring-black/5
          transition-colors duration-300
          group-hover/brand:bg-[#2f6f55]/8
          group-hover/brand:text-[#2f6f55]
        "
      >
        {brand
          .split(" ")
          .slice(0, 2)
          .map((word) => word[0])
          .join("")}
      </span>

      <span
        className="
          whitespace-nowrap
          font-display
          text-[13px]
          font-medium
          tracking-[-0.01em]
          text-ink-mute
          transition-colors duration-300
          group-hover/brand:text-ink
        "
      >
        {brand}
      </span>

      <FiArrowUpRight
        aria-hidden="true"
        className="
          h-3.5 w-3.5
          text-black/20
          opacity-0
          transition-all duration-300
          group-hover/brand:translate-x-0.5
          group-hover/brand:-translate-y-0.5
          group-hover/brand:text-[#2f6f55]
          group-hover/brand:opacity-100
        "
      />
    </div>
  );
};

const MarqueeRow = ({ brands, reverse, reduce }) => {
  const items = [...brands, ...brands];

  return (
    <div
      className={`
        flex w-max items-center gap-3 sm:gap-4
        ${!reduce && !reverse ? "animate-brand-marquee" : ""}
        ${!reduce && reverse ? "animate-brand-marquee-reverse" : ""}
      `}
    >
      {items.map((brand, index) => (
        <BrandItem
          key={`${reverse ? "reverse" : "forward"}-${brand}-${index}`}
          brand={brand}
        />
      ))}
    </div>
  );
};

const BrandMarquee = ({ reduce }) => {
  const firstRow = brands.filter((_, index) => index % 2 === 0);
  const secondRow = brands.filter((_, index) => index % 2 !== 0);

  return (
    <motion.section
      initial={reduce ? undefined : { opacity: 0, y: 15 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      aria-label="Colleges using Campus Placement Tracker"
      className="mt-20 border-t border-ink-line pt-10"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <div
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-ink-line
            bg-white/70
            px-3 py-1.5
            shadow-[0_1px_2px_rgba(0,0,0,0.02)]
          "
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f6f55]/40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2f6f55]" />
          </span>

          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-ink-mute">
            Growing community
          </span>
        </div>

        <div>
          <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink">
            Built for students everywhere
          </h3>

          <p className="mt-1 text-[12px] leading-5 text-ink-mute">
            Students from leading engineering colleges are preparing smarter.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container relative mt-8 overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 left-0 z-20
            w-20 sm:w-32
            bg-linear-to-r
            from-paper via-paper/90 to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-y-0 right-0 z-20
            w-20 sm:w-32
            bg-linear-to-l
            from-paper via-paper/90 to-transparent
          "
        />

        {/* Top row */}
        <MarqueeRow brands={firstRow} reduce={reduce} reverse={false} />

        {/* Second row */}
        <div className="mt-3">
          <MarqueeRow brands={secondRow} reduce={reduce} reverse />
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="mt-7 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-ink-line" />

        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-mute/60">
          And many more
        </span>

        <span className="h-px w-8 bg-ink-line" />
      </div>
    </motion.section>
  );
};

export default BrandMarquee;
