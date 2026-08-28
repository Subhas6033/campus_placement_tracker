import React from "react";

const Loader = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-slate-50">
      {/* Loader */}
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin" />

        {/* Graduation cap */}
        <span className="absolute text-2xl">🎓</span>
      </div>

      {/* App name */}
      <h1 className="mt-6 text-2xl font-bold text-slate-800">
        {import.meta.env.VITE_APP_NAME}
      </h1>

      <p className="mt-2 text-sm text-slate-500 animate-pulse">
        Preparing your placement dashboard...
      </p>
    </section>
  );
};

export default Loader;
