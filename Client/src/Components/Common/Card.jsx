import React from "react";

export const Card = ({
  children,
  title,
  description,
  action,
  className = "",
  loading = false,
  onClick,
  variant = "default",
}) => {
  const isInteractive = typeof onClick === "function";

  const variantClass =
    {
      default: "paper-card",
      dark: "ink-card",
      plain: "!border-ink-line !shadow-none",
    }[variant] || "paper-card";

  return (
    <article
      onClick={onClick}
      className={`
        group w-full rounded-xl p-5 sm:p-6
        ${variantClass}
        ${isInteractive ? "paper-card-hover cursor-pointer" : ""}
        ${loading ? "animate-pulse" : ""}
        ${className}
      `}
    >
      {(title || description || action) && (
        <header className="mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {title && (
              <h2 className="truncate text-[15px] font-semibold tracking-tight text-ink">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-[13.5px] leading-5 text-ink-mute">
                {description}
              </p>
            )}
          </div>
          {action && (
            <div
              className="shrink-0"
              onClick={(event) => event.stopPropagation()}
            >
              {action}
            </div>
          )}
        </header>
      )}

      <div className={loading ? "pointer-events-none select-none" : ""}>
        {children}
      </div>
    </article>
  );
};
