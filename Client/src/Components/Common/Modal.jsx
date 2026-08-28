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

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeOnEscape, loading, onClose]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onMouseDown={() => {
          if (closeOnBackdrop && !loading) {
            onClose?.();
          }
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-level={ariaLabel}
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
        onMouseDown={(event) => event.stopPropagation()}
        className={`
    relative z-10 w-full ${sizes[size]}
    overflow-hidden
    rounded-2xl
    border border-slate-200
    bg-white
    shadow-2xl shadow-slate-950/20
    animate-in fade-in zoom-in-95 duration-200
  `}
      >
        {/* Header */}
        {(title || description) && (
          <header className="border-b border-slate-100 px-5 py-4 sm:px-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {title && (
                  <h2
                    id="modal-title"
                    className="text-lg font-semibold tracking-tight text-slate-900"
                  >
                    {title}
                  </h2>
                )}

                {description && (
                  <p
                    id="modal-description"
                    className="mt-1 text-sm leading-5 text-slate-500"
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
                  shrink-0 rounded-lg p-2
                  text-slate-400
                  transition-colors
                  hover:bg-slate-100 hover:text-slate-600
                  focus:outline-none focus:ring-2
                  focus:ring-indigo-500/30
                  disabled:pointer-events-none
                  disabled:opacity-50
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
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

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto px-5 py-5 sm:px-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <footer className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-6">
            {footer}
          </footer>
        )}

        {/* Loading overlay */}
        {loading && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-[2px]"
            aria-label="Processing"
          >
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
