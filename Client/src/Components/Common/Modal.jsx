import React, { useEffect } from "react";

const Modal = ({
  open = false,
  onClose,
  title,
  description,
  ariaLabel,
  children,
  footer,
  size = "md",
  loading = false,
  closeOnBackdrop = true,
  closeOnEscape = true,
}) => {
  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !loading) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closeOnEscape, loading, onClose]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-ink/45 backdrop-blur-[3px]"
        onMouseDown={() => {
          if (closeOnBackdrop && !loading) onClose?.();
        }}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
        onMouseDown={(event) => event.stopPropagation()}
        className={`
          relative z-10 w-full ${sizes[size]}
          overflow-hidden rounded-xl
          border border-ink-line
          bg-paper-soft
          shadow-[0_24px_60px_-20px_rgba(14,17,22,0.35)]
          animate-[modalIn_180ms_ease-out]
        `}
      >
        {(title || description) && (
          <header className="border-b border-ink-line px-6 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {title && (
                  <h2
                    id="modal-title"
                    className="font-display text-[18px] font-medium tracking-tight text-ink"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id="modal-description"
                    className="mt-1 text-[13.5px] leading-5 text-ink-mute"
                  >
                    {description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                aria-label="Close modal"
                className="
                  shrink-0 inline-flex h-8 w-8 items-center justify-center
                  rounded-md border border-ink-line bg-white text-ink-mute
                  transition-colors hover:bg-paper hover:text-ink
                  disabled:pointer-events-none disabled:opacity-50
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </header>
        )}

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">{children}</div>

        {footer && (
          <footer className="flex flex-col-reverse gap-2 border-t border-ink-line bg-paper px-6 py-4 sm:flex-row sm:items-center sm:justify-end">
            {footer}
          </footer>
        )}

        {loading && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center bg-paper-soft/70 backdrop-blur-[2px]"
            aria-label="Processing"
          >
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-ink-line border-t-ink" />
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.97) translateY(4px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Modal;
