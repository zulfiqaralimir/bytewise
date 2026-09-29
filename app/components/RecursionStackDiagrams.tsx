"use client";

import { useState } from "react";

function ReplayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-3 rounded-md bg-slate-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 transition-colors"
    >
      Replay
    </button>
  );
}

const MONO = "'Courier New', monospace";
const HAND = "'Comic Sans MS', cursive";
const WB_BG = "#f7f1e6";
const RED = "#c0392b";

function Keyframes() {
  return (
    <style jsx global>{`
      @keyframes rsPopIn { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
      @keyframes rsFadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes rsDim { from { opacity: 1; } to { opacity: 0.25; } }
    `}</style>
  );
}

const pop = (d: number) => ({
  opacity: 0,
  animation: `rsPopIn .3s ease ${d}s forwards`,
  transformBox: "fill-box" as const,
  transformOrigin: "center",
});
const fade = (d: number, dur = 0.2) => ({ opacity: 0, animation: `rsFadeIn ${dur}s ease ${d}s forwards` });
const dim = (d: number) => ({ animation: `rsDim .3s ease ${d}s forwards` });

const FRAMES = [
  { y: 280, label: "main: x = 3", t: 0.0, popT: 7.0, base: false },
  { y: 250, label: "fun1: n = 3", t: 0.9, popT: 6.4, base: false },
  { y: 220, label: "fun1: n = 2", t: 1.8, popT: 5.8, base: false },
  { y: 190, label: "fun1: n = 1", t: 2.7, popT: 5.2, base: false },
  { y: 160, label: "fun1: n = 0 (base)", t: 3.6, popT: 4.6, base: true },
];

export function StackAnimDiagram() {
  const [key, setKey] = useState(0);
  return (
    <div>
      <svg key={key} viewBox="0 0 380 360" width="100%" style={{ maxWidth: 380 }}>
        <rect x={20} y={10} width={220} height={340} fill="none" stroke="#2c3e50" strokeWidth={2} />
        <line x1={20} y1={90} x2={240} y2={90} stroke="#999" />
        <line x1={20} y1={310} x2={240} y2={310} stroke="#999" />
        <text x={250} y={55} fontSize={13} fill="#555">Heap</text>
        <text x={250} y={205} fontSize={13} fill="#555">Stack</text>
        <text x={250} y={330} fontSize={13} fill="#555">Code</text>
        <text x={35} y={325} fontSize={12} fill="#333" fontFamily={MONO}>main</text>
        <text x={35} y={343} fontSize={12} fill="#333" fontFamily={MONO}>fun1</text>

        {FRAMES.map((f) => (
          <g key={f.label}>
            <g style={dim(f.popT)}>
              <rect
                x={45}
                y={f.y}
                width={170}
                height={26}
                fill={f.base ? "#f5f5f5" : "#eef4fb"}
                stroke={f.base ? "#888" : "#2980b9"}
                strokeWidth={1.6}
                strokeDasharray={f.base ? "4 3" : undefined}
                style={pop(f.t)}
              />
            </g>
            <text x={52} y={f.y + 17} fontSize={12} fontFamily={MONO} fill={f.base ? "#555" : "#333"} style={fade(f.t + 0.1)}>
              {f.label}
            </text>
            <text x={225} y={f.y + 17} fontSize={15} fill={RED} fontWeight="bold" style={fade(f.popT + 0.1)}>
              ✕
            </text>
          </g>
        ))}

        <text x={130} y={30} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1a1a1a" style={fade(7.6, 0.4)}>
          4 calls (n+1) → O(n) frames
        </text>
      </svg>
      <ReplayButton onClick={() => setKey((k) => k + 1)} />
      <div className="mt-2 text-xs text-gray-600">
        <span className="mr-4">
          <span style={{ display: "inline-block", width: 14, height: 3, background: "#2980b9", marginRight: 5, verticalAlign: "middle" }} />
          pushed (calling)
        </span>
        <span>
          <span style={{ display: "inline-block", width: 14, height: 3, background: RED, marginRight: 5, verticalAlign: "middle" }} />
          popped (returning)
        </span>
      </div>
      <Keyframes />
    </div>
  );
}

const STEPS: { y: number; text: string; t: number; fill?: string; bold?: boolean; size?: number }[] = [
  { y: 30, text: "T(n) = T(n-1) + 1", t: 0.0 },
  { y: 70, text: "substitute T(n-1) = T(n-2) + 1:", t: 1.0 },
  { y: 98, text: "T(n) = [T(n-2) + 1] + 1 = T(n-2) + 2", t: 1.6 },
  { y: 138, text: "substitute T(n-2) = T(n-3) + 1:", t: 2.6 },
  { y: 166, text: "T(n) = T(n-3) + 1 + 2 = T(n-3) + 3", t: 3.2 },
  { y: 200, text: "      ⋮  (pattern continues)", t: 4.2, fill: "#555" },
  { y: 234, text: "T(n) = T(n-k) + k", t: 5.0, bold: true },
  { y: 274, text: "Assume n-k = 0,  so k = n:", t: 6.0, fill: RED },
  { y: 302, text: "T(n) = T(0) + n", t: 6.7 },
  { y: 330, text: "T(n) = 1 + n", t: 7.4 },
  { y: 370, text: "T(n) = O(n)", t: 8.2, fill: RED, bold: true, size: 18 },
];

export function RecurrenceAnimDiagram() {
  const [key, setKey] = useState(0);
  return (
    <div>
      <svg key={key} viewBox="0 0 460 400" width="100%" style={{ maxWidth: 460 }} fontFamily={MONO} fontSize={15} fill="#1a1a1a">
        {STEPS.map((s) => (
          <text key={s.y} x={10} y={s.y} fill={s.fill} fontWeight={s.bold ? "bold" : undefined} fontSize={s.size} style={fade(s.t, 0.4)}>
            {s.text}
          </text>
        ))}
      </svg>
      <ReplayButton onClick={() => setKey((k) => k + 1)} />
      <Keyframes />
    </div>
  );
}

const WB_FRAMES = [
  { y: 118, n: "0", label: "fun1" },
  { y: 146, n: "1", label: "fun1" },
  { y: 174, n: "2", label: "fun1" },
  { y: 202, n: "3", label: "fun1" },
  { y: 230, n: "3", label: "main" },
];

export function StackWhiteboard() {
  return (
    <svg viewBox="0 0 1060 320" width="100%" style={{ maxWidth: 1060, background: WB_BG }}>
      <text x={20} y={24} fontFamily={HAND} fontSize={18} textDecoration="underline" fill="#333">Recursion</text>
      <rect x={20} y={40} width={200} height={270} fill="none" stroke="#555" strokeWidth={1.4} />
      <line x1={20} y1={80} x2={220} y2={80} stroke="#999" />
      <line x1={20} y1={260} x2={220} y2={260} stroke="#999" />
      <g fontFamily={HAND} fontSize={13} fill={RED}>
        <text x={228} y={65}>Heap</text>
        <text x={228} y={215}>Stack</text>
        <text x={228} y={290}>Code</text>
        <text x={30} y={285} fontSize={12}>fun1 ≡</text>
        <text x={30} y={302} fontSize={12}>main ≡</text>
      </g>

      <g fontFamily={HAND} fontSize={13} fill="#333">
        <text x={330} y={55} textAnchor="middle">fun1(3)</text>
        <line x1={322} y1={62} x2={290} y2={85} stroke="#555" />
        <line x1={338} y1={62} x2={380} y2={85} stroke="#555" />
        <text x={290} y={100} textAnchor="middle">3</text>
        <text x={380} y={100} textAnchor="middle">fun1(2)</text>
        <line x1={372} y1={107} x2={340} y2={130} stroke="#555" />
        <line x1={388} y1={107} x2={425} y2={130} stroke="#555" />
        <text x={340} y={145} textAnchor="middle">2</text>
        <text x={425} y={145} textAnchor="middle">fun1(1)</text>
        <line x1={417} y1={152} x2={390} y2={175} stroke="#555" />
        <line x1={433} y1={152} x2={465} y2={175} stroke="#555" />
        <text x={390} y={190} textAnchor="middle">1</text>
        <text x={465} y={190} textAnchor="middle">fun1(0)</text>
        <line x1={465} y1={198} x2={465} y2={212} stroke="#555" />
        <text x={465} y={228} textAnchor="middle">✕</text>
        <rect x={290} y={248} width={90} height={24} fill="none" stroke="#333" />
        <text x={335} y={265} textAnchor="middle">o/p: 3 2 1</text>
      </g>

      <g fontFamily={HAND} fontSize={13} fill="#333">
        <text x={520} y={24}>void fun1(int n)</text>
        <text x={516} y={40}>{"{"}</text>
        <text x={536} y={60}>if (n &gt; 0)</text>
        <text x={532} y={76}>{"{"}</text>
        <text x={552} y={96}>printf(&quot;%d&quot;, n);</text>
        <text x={552} y={114}>fun1(n - 1);</text>
        <text x={532} y={130}>{"}"}</text>
        <text x={516} y={146}>{"}"}</text>
        <line x1={516} y1={158} x2={770} y2={158} stroke="#999" />
        <text x={516} y={178}>void main( )</text>
        <text x={512} y={194}>{"{"}</text>
        <text x={536} y={212}>int x = 3;</text>
        <text x={536} y={230}>fun1(x);</text>
        <text x={512} y={246}>{"}"}</text>
      </g>

      <rect x={800} y={40} width={220} height={270} fill="none" stroke="#555" strokeWidth={1.4} />
      <line x1={800} y1={80} x2={1020} y2={80} stroke="#999" />
      <line x1={800} y1={260} x2={1020} y2={260} stroke="#999" />
      <g fontFamily={HAND} fontSize={12} fill={RED}>
        <text x={1028} y={65} fontSize={13}>Heap</text>
        <text x={1028} y={215} fontSize={13}>Stack</text>
        <text x={1028} y={290} fontSize={13}>Code</text>
        {WB_FRAMES.map((f) => (
          <g key={f.y}>
            <text x={758} y={f.y}>{f.label}</text>
            <rect x={787} y={f.y - 13} width={20} height={18} fill="none" stroke={RED} />
            <text x={792} y={f.y}>{f.n}</text>
          </g>
        ))}
        <text x={805} y={250}>fun1 ≡</text>
        <text x={805} y={267}>main ≡</text>
      </g>
    </svg>
  );
}

export function RecurrenceWhiteboard() {
  return (
    <svg viewBox="0 0 1180 340" width="100%" style={{ maxWidth: 1180, background: WB_BG }} fontFamily={HAND} fontSize={14} fill="#333">
      <text x={30} y={24} textDecoration="underline">T(n)</text>
      <text x={230} y={24}>void fun1(int n)</text>
      <text x={226} y={40}>{"{"}</text>
      <line x1={30} y1={60} x2={200} y2={60} stroke="#999" />
      <text x={248} y={60}>if (n &gt; 0)</text>
      <text x={244} y={76}>{"{"}</text>
      <line x1={30} y1={96} x2={200} y2={96} stroke="#999" />
      <text x={264} y={96}>printf(&quot;%d&quot;, n);</text>
      <text x={80} y={130}>T(n-1)</text>
      <line x1={30} y1={130} x2={200} y2={130} stroke="#999" />
      <text x={264} y={130}>fun1(n - 1);</text>
      <text x={244} y={146}>{"}"}</text>
      <text x={226} y={162}>{"}"}</text>
      <line x1={10} y1={188} x2={320} y2={188} stroke="#999" />
      <text x={15} y={212} fontWeight="bold">T(n) = T(n-1) + 2</text>

      <text x={490} y={20} textDecoration="underline">Recursion</text>
      <text x={440} y={55}>T(n) = </text>
      <text x={490} y={45}>1</text>
      <text x={560} y={45}>n = 0</text>
      <text x={490} y={68}>T(n-1)+1</text>
      <text x={580} y={68}>n &gt; 0</text>
      <path d="M 480 35 L 480 75" fill="none" stroke="#555" />

      <text x={440} y={100}>T(n) = </text>
      <text x={500} y={100} textDecoration="underline">T(n-1)</text>
      <text x={565} y={100}>+ 1</text>
      <text x={600} y={97} fontSize={12}>①</text>
      <text x={440} y={118} fill={RED} fontSize={12}>∵ T(n) = T(n-1)+1</text>
      <text x={440} y={134} fill={RED} fontSize={12} textDecoration="underline">∴ T(n-1) = T(n-2)+1</text>

      <text x={440} y={160}>T(n) = T(n-2)+1+1</text>
      <text x={440} y={182}>T(n) = </text>
      <text x={500} y={182} textDecoration="underline">T(n-2)</text>
      <text x={565} y={182}>+ 2</text>
      <text x={600} y={179} fontSize={12}>②</text>
      <text x={500} y={198} fill={RED} fontSize={12}>T(n-3)+1</text>

      <text x={440} y={222}>T(n) = T(n-3)+1+2</text>
      <text x={440} y={242}>T(n) = T(n-3) + 3</text>
      <text x={600} y={239} fontSize={12}>③</text>
      <text x={470} y={262} fontSize={18}>⋮</text>
      <text x={440} y={290}>T(n) = T(n-k) + k</text>
      <text x={600} y={287} fontSize={12}>④</text>

      <line x1={860} y1={0} x2={1180} y2={0} stroke="#999" />
      <text x={870} y={24} fill={RED} fontWeight="bold">Assume n-k=0  ∴ n=k</text>
      <text x={870} y={60}>T(n) = T(n-n) + n</text>
      <text x={870} y={92}>T(n) = T(0) + n</text>
      <text x={870} y={126} fontSize={17}>T(n) = 1 + n</text>
      <text x={1010} y={126} fill={RED} fontSize={17}>O(n)</text>
      <ellipse cx={1030} cy={120} rx={26} ry={14} fill="none" stroke={RED} strokeWidth={2} />
    </svg>
  );
}
