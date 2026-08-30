import React from "react";

const Loader = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-paper">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-ink-line" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#2f6f55]" />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-semibold tracking-tight text-paper">
          CP
        </div>
      </div>

      <h1 className="mt-6 font-display text-[20px] font-medium tracking-tight text-ink">
        {import.meta.env.VITE_APP_NAME || "Campus Placement Tracker"}
      </h1>

      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
        Loading workspace
      </p>
    </section>
  );
};

export default Loader;
