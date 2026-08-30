const FeaturesBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 -top-75 h-150 w-225 -translate-x-1/2 rounded-full bg-[#2f6f55]/[0.035] blur-3xl" />

      <div className="absolute -right-40 top-[35%] h-105 w-105 rounded-full bg-[#b88947]/[0.035] blur-3xl" />

      <div
        className="
          absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
          bg-size-[48px_48px]
        "
      />
    </div>
  );
};

export default FeaturesBackground;
