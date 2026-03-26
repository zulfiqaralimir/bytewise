import { ReactNode } from "react";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
}

const icons: Record<CalloutType, string> = {
  info: "ℹ️",
  tip: "💡",
  warning: "⚠️",
  danger: "🚨",
};

const styles: Record<CalloutType, string> = {
  info: "callout-info",
  tip: "callout-tip",
  warning: "callout-warning",
  danger: "callout-danger",
};

export function Callout({ type, title, children }: CalloutProps) {
  return (
    <div className={styles[type]}>
      <div className="flex items-center gap-2 font-semibold mb-2 text-sm uppercase tracking-wide">
        <span>{icons[type]}</span>
        <span>{title ?? type}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
