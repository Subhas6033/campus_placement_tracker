const Loader = () => {
  const appName = import.meta.env.VITE_APP_NAME || "Campus Placement Tracker";

  return (
    <main
      className="
        flex min-h-screen flex-col items-center justify-center
        bg-paper px-6
        text-ink
      "
      role="status"
      aria-live="polite"
      aria-label="Loading application"
    >
      {/* Brand */}
      <div className="flex flex-col items-center">
        <div className="relative flex h-12 w-12 items-center justify-center">
          {/* Static ring */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              rounded-xl
              border border-ink-line
              bg-paper
            "
          />

          {/* Animated accent */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              animate-spin
              rounded-xl
              border-2 border-transparent
              border-t-[#2f6f55]
            "
          />

          <span className="relative text-sm font-semibold tracking-tight">
            {appName
              .split(" ")
              .map((val) => val.charAt(0))
              .join("")}
          </span>
        </div>

        <h1 className="mt-5 font-display text-lg font-semibold tracking-tight">
          {appName}
        </h1>

        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
          Loading workspace
        </p>
      </div>

      {/* Loading indicator */}
      <div aria-hidden="true" className="mt-8 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f6f55]" />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f6f55]"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2f6f55]"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </main>
  );
};

export default Loader;
