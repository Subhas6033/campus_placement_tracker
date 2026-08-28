import { ArrowLeft, Home, RefreshCw, TriangleAlert } from "lucide-react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const getErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      switch (error.status) {
        case 404:
          return {
            code: "404",
            title: "Page not found",
            message:
              "The page you are looking for doesn't exist or may have been moved.",
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

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              {import.meta.env.VITE_APP_NAME.split(" ")
                .map((val) => val.charAt(0))
                .join("")}
            </div>

            <span className="text-lg font-semibold text-gray-900">
              {import.meta.env.VITE_APP_NAME}
            </span>
          </div>
        </div>

        {/* Error */}
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500">
            <TriangleAlert className="h-8 w-8 text-white" strokeWidth={2} />
          </div>
        </div>

        <p className="mt-6 text-sm font-medium text-gray-400">Error {code}</p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
          {message}
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={handleRetry}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>

          <button
            onClick={handleHome}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:w-auto"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </button>
        </div>

        {/* Back */}
        <button
          onClick={handleGoBack}
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Go back
        </button>

        {/* Small support text */}
        <p className="mt-12 text-xs text-gray-400">
          If this keeps happening, please contact your placement administration.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
