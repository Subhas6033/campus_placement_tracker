import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  title,
  onClick,
  ...props
}) => {
  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring-indigo-500/30",

    secondary:
      "border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 active:bg-slate-100 focus-visible:ring-slate-400/30",

    outline:
      "border border-indigo-200 bg-transparent text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus-visible:ring-indigo-500/30",

    ghost:
      "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-visible:ring-slate-400/30",

    danger:
      "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500/30",

    success:
      "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 active:bg-emerald-800 focus-visible:ring-emerald-500/30",
  };

  const sizes = {
    xs: "h-8 px-3 text-xs rounded-lg",
    sm: "h-9 px-3.5 text-sm rounded-lg",
    md: "h-10 px-4 text-sm rounded-xl",
    lg: "h-11 px-5 text-sm rounded-xl",
    xl: "h-12 px-6 text-base rounded-xl",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      className={`
        inline-flex items-center justify-center gap-2
        whitespace-nowrap
        font-medium
        outline-none
        transition-all duration-150
        focus-visible:ring-4
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50
        active:scale-[0.98]
        hover:cursor-pointer
        ${variants[variant] ?? variants.primary}
        ${sizes[size] ?? sizes.md}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            className="opacity-25"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            d="M21 12a9 9 0 0 0-9-9"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}

      <span>{children}</span>
    </button>
  );
};

export default Button;
