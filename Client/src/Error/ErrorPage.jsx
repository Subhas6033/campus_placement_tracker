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

  const appInitials = appName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Modal
      open={true}
      onClose={handleGoBack}
      size="sm"
      closeOnBackdrop={false}
      closeOnEscape={true}
      ariaLabel={`${title} - Error ${code}`}
    >
      <div className="relative px-1 py-1">
        {/* Close */}
        <button
          type="button"
          onClick={handleGoBack}
          aria-label="Close dialog"
          title="Close"
          className="
    group
    absolute right-4 top-4
    inline-flex h-10 w-10
    items-center justify-center
    rounded-xl
    border border-slate-200
    bg-white
    text-slate-400
    shadow-sm

    transition-all duration-200 ease-out

    hover:border-slate-300
    hover:bg-slate-50
    hover:text-slate-700
    hover:shadow-md
    hover:cursor-pointer

    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-indigo-500/50
    focus-visible:ring-offset-2

    active:scale-95
    active:bg-slate-100

    disabled:pointer-events-none
    disabled:opacity-50
  "
        >
          <X
            className="
      h-5 w-5
      transition-transform duration-200
      group-hover:scale-105
    "
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>

        {/* Application */}
        <div className="flex items-center gap-2">
          <div
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              bg-indigo-600
              text-xs font-bold
              text-white
            "
          >
            {appInitials}
          </div>

          <span className="text-sm font-semibold text-slate-800">
            {appName}
          </span>
        </div>

        {/* Error content */}
        <div className="mt-8 text-center">
          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <TriangleAlert className="h-7 w-7 text-red-500" strokeWidth={2} />
          </div>

          {/* Error code */}
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-red-500">
            Error {code}
          </p>

          {/* Title */}
          <h1 className="mt-2 text-xl font-semibold text-slate-900">{title}</h1>

          {/* Message */}
          <p className="mx-auto mt-2 max-w-sm text-sm leading-5 text-slate-500">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-7 grid w-full max-w-sm grid-cols-2 gap-3">
          <Button
            onClick={() => window.location.reload()}
            variant="primary"
            size="md"
            className="w-full"
          >
            <span className="flex justify-center gap-2">
              <RefreshCw className="h-4 w-4" />
              <span>Try again</span>
            </span>
          </Button>

          <Button
            onClick={() => navigate("/dashboard")}
            variant="secondary"
            size="md"
            className="w-full"
          >
            <span className="flex justify-center gap-2">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </span>
          </Button>
        </div>

        {/* Back */}
        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleGoBack}
            variant="outline"
            size="sm"
            className="text-slate-500 hover:text-slate-800"
          >
            <span className="flex justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go back
            </span>
          </Button>
        </div>

        {/* Support */}
        <div className="mt-6 border-t border-slate-100 pt-4 text-center">
          <p className="text-xs text-slate-400">
            If this keeps happening, please contact your placement
            administration.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorPage;
