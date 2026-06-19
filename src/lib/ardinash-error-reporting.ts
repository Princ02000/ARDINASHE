type ArdinashErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ArdinashEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ArdinashErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __ardinashEvents?: ArdinashEvents;
  }
}

export function reportArdinashError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__ardinashEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
