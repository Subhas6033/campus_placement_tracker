import { valueProps } from "../../../../Data/FeatureData";

const ValuePropGrid = () => {
  return (
    <div className="grid grid-cols-2 border-t border-white/8 lg:border-l lg:border-t-0">
      {valueProps.map((value, index) => (
        <ValueProp key={value.title} value={value} index={index} />
      ))}
    </div>
  );
};

const ValueProp = ({ value, index }) => {
  const Icon = value.icon;

  return (
    <div
      className={`
        border-b border-r border-white/8
        p-6 transition-colors
        hover:bg-white/2.5

        ${index >= 2 ? "border-b-0" : ""}
        ${index % 2 === 1 ? "border-r-0" : ""}
      `}
    >
      <Icon className="h-5 w-5 text-white/50" />
      <h4 className="mt-5 text-sm font-semibold text-white">{value.title}</h4>
      <p className="mt-1.5 text-xs leading-5 text-white/40">{value.text}</p>
    </div>
  );
};

export default ValuePropGrid;
