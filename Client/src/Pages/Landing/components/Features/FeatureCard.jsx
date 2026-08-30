import { FiCheck } from "react-icons/fi";
import { Card } from "../../../../Components/index";

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <Card
      className="
        relative h-full overflow-hidden
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_45px_rgba(0,0,0,0.07)]
      "
    >
      <FeatureAccent color={feature.color} />
      <FeatureGlow color={feature.color} />
      <div className="relative">
        <FeatureCardHeader Icon={Icon} color={feature.color} index={index} />
        <FeatureMeta
          eyebrow={feature.eyebrow}
          badge={feature.badge}
          color={feature.color}
        />
        <FeatureContent
          title={feature.title}
          description={feature.description}
        />
        <FeaturePoints points={feature.points} color={feature.color} />
      </div>
    </Card>
  );
};

const FeatureAccent = ({ color }) => {
  return (
    <div
      aria-hidden="true"
      className="
        absolute inset-x-0 top-0 h-0.5
        opacity-0 transition-opacity duration-300
        group-hover:opacity-100
      "
      style={{ backgroundColor: color }}
    />
  );
};

const FeatureGlow = ({ color }) => {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute -right-16 -top-16
        h-32 w-32 rounded-full
        opacity-0 blur-3xl
        transition-opacity duration-500
        group-hover:opacity-20
      "
      style={{ backgroundColor: color }}
    />
  );
};

const FeatureCardHeader = ({ Icon, color, index }) => {
  return (
    <div className="flex items-start justify-between">
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl border border-black/6
          bg-[#fafaf9]
          transition-transform duration-300
          group-hover:scale-105
        "
        style={{ color }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </div>

      <span className="font-mono text-[10px] font-medium text-black/25">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
};

const FeatureMeta = ({ eyebrow, badge, color }) => {
  return (
    <div className="mt-6 flex min-h-4.5 items-center gap-2">
      <span
        className="text-[9px] font-bold tracking-[0.16em]"
        style={{ color }}
      >
        {eyebrow}
      </span>

      {badge && (
        <span className="rounded-full bg-[#2f6f55]/8 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#2f6f55]">
          {badge}
        </span>
      )}
    </div>
  );
};

const FeatureContent = ({ title, description }) => {
  return (
    <>
      <h3 className="mt-2 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
        {title}
      </h3>

      <p className="mt-2.5 min-h-18 text-[13.5px] leading-[1.65] text-ink-mute">
        {description}
      </p>
    </>
  );
};

const FeaturePoints = ({ points, color }) => {
  return (
    <div className="mt-5 space-y-2.5 border-t border-black/6 pt-5">
      {points.map((point) => (
        <div
          key={point}
          className="flex items-center gap-2 text-[12px] text-ink-mute"
        >
          <span
            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
            style={{
              backgroundColor: `${color}12`,
              color,
            }}
          >
            <FiCheck className="h-2.5 w-2.5" />
          </span>

          {point}
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
