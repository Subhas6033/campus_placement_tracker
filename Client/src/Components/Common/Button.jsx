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
    primary: "!bg-ink !text-paper hover:!bg-ink-soft active:!bg-[#2a313d]",

    accent:
      "!bg-[#2f6f55] !text-white hover:!bg-[#235740] active:!bg-[#1a4230]",

    secondary:
      "!border !border-ink-line !bg-white !text-ink hover:!bg-paper active:!bg-[#ece9e1]",

    outline:
      "!border !border-[#0e1116] !bg-transparent !text-ink hover:!bg-ink hover:!text-paper",

    ghost: "!bg-transparent !text-ink-mute hover:!bg-paper hover:!text-ink",

    danger:
      "!bg-[#b14a3c] !text-white hover:!bg-[#963e32] active:!bg-[#7e342a]",

    success: "!bg-[#2f6f55] !text-white hover:!bg-[#235740]",
  };

  const sizes = {
    xs: "h-8 px-3 text-xs",
    sm: "h-9 px-3.5 text-[13px]",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-[14px]",
    xl: "h-12 px-5 text-[14px]",
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
        inline-flex shrink-0 items-center justify-center gap-2
        whitespace-nowrap rounded-md font-medium
        outline-none transition-all duration-150
        focus-visible:ring-2! focus-visible:ring-[#2f6f55]! focus-visible:ring-offset-2! focus-visible:ring-offset-paper!
        disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50
        active:scale-[0.985]
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
