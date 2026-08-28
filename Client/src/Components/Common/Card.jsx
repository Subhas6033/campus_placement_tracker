import React from "react";

export const Card = ({
  children,
  title,
  description,
  action,
  className = "",
  loading = false,
  onClick,
}) => {
  const isInteractive = typeof onClick === "function";

  return (
    <article
      onClick={onClick}
      className={`
        group w-full rounded-2xl border border-slate-200
        bg-white p-5 shadow-sm
        transition-all duration-200
        ${
          isInteractive
            ? "cursor-pointer hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-500/20"
            : ""
        }
        ${loading ? "animate-pulse" : ""}
        ${className}
      `}
    >
      {/* Header */}
      {(title || description || action) && (
        <header className="mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {title && (
              <h2 className="truncate text-base font-semibold tracking-tight text-slate-900">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-1 text-sm leading-5 text-slate-500">
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

      {/* Content */}
      <div className={loading ? "pointer-events-none select-none" : ""}>
        {children}
      </div>
    </article>
  );
};
