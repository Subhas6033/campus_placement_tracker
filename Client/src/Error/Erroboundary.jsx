import { OctagonAlert, RotateCw, Home } from "lucide-react";
import React from "react";
import Button from "../Components/Common/Button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary:", error);
    console.error("Error Info:", errorInfo);
    this.logError(error, errorInfo);
  }

  logError = async (error, errorInfo) => {
    try {
      await fetch("/api/errors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: error?.message,
          stack: error?.stack,
          componentStack: errorInfo?.componentStack,
          url: window.location.href,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (loggingError) {
      console.error("Failed to report error:", loggingError);
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-paper px-6">
          <div className="w-full max-w-md rounded-xl border border-ink-line bg-white p-8 text-center shadow-[0_12px_32px_-16px_rgba(14,17,22,0.15)]">
            <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-md border border-danger/30 bg-danger/10 text-danger">
              <OctagonAlert className="h-5 w-5" strokeWidth={1.6} />
            </span>

            <h1 className="mt-5 font-display text-[22px] font-medium tracking-tight text-ink">
              Something went wrong
            </h1>

            <p className="mt-2 text-[14px] leading-[1.6] text-ink-mute">
              We hit an unexpected error rendering this page. Reloading should
              fix it — if not, head back home.
            </p>

            <div className="mt-6 flex justify-center gap-2">
              <Button variant="secondary" size="md" onClick={this.handleGoHome}>
                <Home className="h-4 w-4" />
                Home
              </Button>
              <Button variant="primary" size="md" onClick={this.handleReload}>
                <RotateCw className="h-4 w-4" />
                Try again
              </Button>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#8a8d96]">
                  Developer error
                </summary>
                <pre className="mt-3 overflow-auto rounded-md border border-ink-soft bg-ink p-3 font-mono text-[11px] leading-normal text-paper">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
