import { ReactNode } from "react";

interface DiagramBoxProps {
  title?: string;
  children: ReactNode;
}

export function DiagramBox({ title = "System Architecture", children }: DiagramBoxProps) {
  return (
    <div className="my-6">
      <div className="bg-gray-700 text-gray-300 text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-t-lg">
        {title}
      </div>
      <div className="diagram-box rounded-t-none rounded-b-lg">
        {children}
      </div>
    </div>
  );
}
