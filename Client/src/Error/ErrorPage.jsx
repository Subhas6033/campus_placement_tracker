import { ArrowLeft, Home, RefreshCw, TriangleAlert, X } from "lucide-react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

import { Button, Modal } from "../Components";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const getErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      switch (error.status) {
        case 404:
          return {
            code: "404",
            title: "Page not found",
            message:
              "The page you're looking for doesn't exist or may have been moved.",
          };
        case 401:
          return {
            code: "401",
            title: "Sign in required",
            message: "Please sign in to continue accessing this page.",
          };
        case 403:
          return {
            code: "403",
            title: "Access denied",
            message: "You don't have permission to access this page.",
          };
        case 500:
          return {
            code: "500",
            title: "Something went wrong",
            message: "We couldn't load this page right now. Please try again.",
          };
        default:
          return {
            code: error.status,
            title: "Something went wrong",
            message: "We couldn't complete your request. Please try again.",
          };
      }
    }
    return {
      code: "500",
      title: "Something went wrong",
      message: "We couldn't load this page right now. Please try again.",
    };
  };

  const { code, title, message } = getErrorMessage();
  const appName = import.meta.env.VITE_APP_NAME || "Applications Site";

  const handleGoBack = () => navigate(-1);

  return (
    <Modal
      open={true}
      onClose={handleGoBack}
      size="sm"
      closeOnBackdrop={false}
      closeOnEscape={true}
      ariaLabel={`${title} - Error ${code}`}
    >
      <div className="relative">
        <button
          type="button"
          onClick={handleGoBack}
          aria-label="Close dialog"
          title="Close"
          className="
            absolute right-0 top-0 inline-flex h-8 w-8 items-center justify-center
            rounded-md border border-ink-line bg-white text-ink-mute
            transition-colors hover:bg-paper hover:text-ink
          "
        >
          <X className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2.5 pr-8">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-[11px] font-semibold text-paper">
            CP
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-ink">
            {appName}
          </span>
        </div>

        <div className="mt-7 text-center">
          <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-md bg-[#b14a3c]/10 text-[#b14a3c]">
            <TriangleAlert className="h-5 w-5" strokeWidth={1.8} />
          </span>

          <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#b14a3c]">
            Error {code}
          </p>

          <h1 className="mt-1.5 font-display text-[20px] font-medium tracking-tight text-ink">
            {title}
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-[1.55] text-ink-mute">
            {message}
          </p>
        </div>

        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <Button
            onClick={() => window.location.reload()}
            variant="secondary"
            size="md"
            className="w-full"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>

          <Button
            onClick={() => navigate("/")}
            variant="primary"
            size="md"
            className="w-full"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Button>
        </div>

        <div className="mt-3 flex justify-center">
          <Button
            onClick={handleGoBack}
            variant="ghost"
            size="sm"
            className="text-ink-mute"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Button>
        </div>

        <div className="mt-5 border-t border-ink-line pt-4 text-center">
          <p className="text-[12px] text-[#8a8d96]">
            If this keeps happening, contact your placement administration.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorPage;
