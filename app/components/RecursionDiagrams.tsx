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

/** Shared arrow-head markers. Render once per page, before any diagram below. */
export function RecursionDiagramDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <marker id="rb-arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#2980b9" />
        </marker>
        <marker id="rb-arrow-orange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#e67e22" />
        </marker>
      </defs>
    </svg>
  );
}

export function CallFlowDiagram() {
  const [key, setKey] = useState(0);
  return (
    <div>
      <svg key={key} viewBox="0 0 560 220" width="100%" style={{ maxWidth: 560 }}>
        <rect x={30} y={30} width={150} height={160} rx={8} fill="#eef4fb" stroke="#2c3e50" strokeWidth={2} />
        <text x={105} y={20} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#2c3e50">main()</text>
        <text x={45} y={60} fontSize={13} fill="#1a1a1a">1: ...</text>
        <text x={45} y={82} fontSize={13} fill="#1a1a1a">2: ...</text>
        <text x={45} y={104} fontSize={13} fill="#c0392b" fontWeight="bold">3: fun(x);</text>
        <text x={45} y={150} fontSize={13} fill="#1a1a1a">4: ...</text>
        <text x={45} y={172} fontSize={13} fill="#1a1a1a">5: ...</text>

        <rect x={380} y={30} width={150} height={120} rx={8} fill="#fdf3e7" stroke="#e67e22" strokeWidth={2} />
        <text x={455} y={20} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#e67e22">fun()</text>
        <text x={395} y={60} fontSize={13} fill="#1a1a1a">1: ...</text>
        <text x={395} y={82} fontSize={13} fill="#1a1a1a">2: ...</text>
        <text x={395} y={104} fontSize={13} fill="#1a1a1a">3: ...</text>

        <line x1={180} y1={104} x2={378} y2={70} stroke="#2980b9" strokeWidth={2.5} markerEnd="url(#rb-arrow-blue)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.6s ease 0.3s both" }} />
        <text x={270} y={80} fontSize={12} fill="#2980b9" fontStyle="italic" style={{ animation: "rbFadeIn 0.4s ease 0.9s both" }}>call</text>

        <line x1={378} y1={120} x2={182} y2={118} stroke="#e67e22" strokeWidth={2.5} markerEnd="url(#rb-arrow-orange)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.6s ease 1.8s both" }} />
        <text x={230} y={135} fontSize={12} fill="#e67e22" fontStyle="italic" style={{ animation: "rbFadeIn 0.4s ease 2.4s both" }}>return</text>

        <rect x={40} y={140} width={120} height={20} fill="none" stroke="#27ae60" strokeWidth={2} rx={4} style={{ animation: "rbFadeIn 0.3s ease 2.7s both" }} />
        <text x={105} y={205} textAnchor="middle" fontSize={12} fill="#27ae60" style={{ animation: "rbFadeIn 0.3s ease 2.9s both" }}>line 4 runs only now</text>
      </svg>
      <ReplayButton onClick={() => setKey((k) => k + 1)} />
      <style jsx global>{`
        @keyframes rbDrawLine { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        @keyframes rbFadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

export function GeneralFormDiagram() {
  const [key, setKey] = useState(0);
  return (
    <div>
      <svg key={key} viewBox="0 0 420 220" width="100%" style={{ maxWidth: 420 }}>
        <rect x={30} y={20} width={360} height={180} rx={8} fill="#eef4fb" stroke="#2c3e50" strokeWidth={2} />
        <text x={210} y={12} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#2c3e50">fun(param)</text>
        <rect x={55} y={45} width={310} height={130} rx={6} fill="#fdf3e7" stroke="#e67e22" strokeWidth={1.5} strokeDasharray="5 3" />
        <text x={210} y={65} textAnchor="middle" fontSize={12} fill="#e67e22" fontStyle="italic">if (base condition)</text>
        <text x={75} y={95} fontSize={13} fill="#1a1a1a">1: ...</text>
        <text x={75} y={120} fontSize={13} fill="#c0392b" fontWeight="bold">2: fun(param);</text>
        <text x={75} y={145} fontSize={13} fill="#1a1a1a">3: ...</text>
        <path d="M 270 118 C 330 90, 330 150, 272 122" fill="none" stroke="#2980b9" strokeWidth={2.2} markerEnd="url(#rb-arrow-blue)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.8s ease 0.4s both" }} />
        <text x={335} y={120} fontSize={11} fill="#2980b9" fontStyle="italic" style={{ animation: "rbFadeIn 0.4s ease 1.3s both" }}>calls itself</text>
      </svg>
      <ReplayButton onClick={() => setKey((k) => k + 1)} />
      <style jsx global>{`
        @keyframes rbDrawLine { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        @keyframes rbFadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

interface TraceProps {
  fn: "fun1" | "fun2";
}

/** fn="fun1": print-then-call, prints on the way down. fn="fun2": call-then-print, prints on the way up. */
export function RecursionTraceDiagram({ fn }: TraceProps) {
  const [key, setKey] = useState(0);
  const isFun1 = fn === "fun1";
  return (
    <div>
      <svg key={key} viewBox="0 0 520 340" width="100%" style={{ maxWidth: 520 }}>
        <circle cx={60} cy={50} r={30} fill="#eef4fb" stroke="#2c3e50" strokeWidth={2} style={{ animation: "rbPopIn 0.4s ease 0s both" }} />
        <text x={60} y={55} textAnchor="middle" fontSize={12} fill="#1a1a1a" style={{ animation: "rbFadeIn 0.3s ease 0.1s both" }}>{fn}(3)</text>
        {isFun1 && <text x={105} y={35} fontSize={12} fill="#c0392b" fontWeight="bold" style={{ animation: "rbFadeIn 0.3s ease 0.3s both" }}>print 3</text>}

        <circle cx={180} cy={130} r={30} fill="#eef4fb" stroke="#2c3e50" strokeWidth={2} style={{ animation: "rbPopIn 0.4s ease 1.1s both" }} />
        <text x={180} y={135} textAnchor="middle" fontSize={12} fill="#1a1a1a" style={{ animation: "rbFadeIn 0.3s ease 1.2s both" }}>{fn}(2)</text>
        {isFun1 && <text x={225} y={115} fontSize={12} fill="#c0392b" fontWeight="bold" style={{ animation: "rbFadeIn 0.3s ease 1.4s both" }}>print 2</text>}

        <circle cx={300} cy={210} r={30} fill="#eef4fb" stroke="#2c3e50" strokeWidth={2} style={{ animation: "rbPopIn 0.4s ease 2.2s both" }} />
        <text x={300} y={215} textAnchor="middle" fontSize={12} fill="#1a1a1a" style={{ animation: "rbFadeIn 0.3s ease 2.3s both" }}>{fn}(1)</text>
        {isFun1 && <text x={345} y={195} fontSize={12} fill="#c0392b" fontWeight="bold" style={{ animation: "rbFadeIn 0.3s ease 2.5s both" }}>print 1</text>}

        <circle cx={420} cy={290} r={28} fill="#f5f5f5" stroke="#888" strokeWidth={2} strokeDasharray="4 3" style={{ animation: "rbPopIn 0.4s ease 3.3s both" }} />
        <text x={420} y={295} textAnchor="middle" fontSize={11} fill="#555" style={{ animation: "rbFadeIn 0.3s ease 3.4s both" }}>{fn}(0)</text>
        <text x={420} y={325} textAnchor="middle" fontSize={11} fill="#888" fontStyle="italic" style={{ animation: "rbFadeIn 0.3s ease 3.6s both" }}>base case</text>

        <line x1={82} y1={72} x2={158} y2={108} stroke="#2980b9" strokeWidth={2.3} markerEnd="url(#rb-arrow-blue)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.5s ease 0.6s both" }} />
        <line x1={202} y1={152} x2={278} y2={188} stroke="#2980b9" strokeWidth={2.3} markerEnd="url(#rb-arrow-blue)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.5s ease 1.7s both" }} />
        <line x1={322} y1={232} x2={396} y2={268} stroke="#2980b9" strokeWidth={2.3} markerEnd="url(#rb-arrow-blue)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.5s ease 2.8s both" }} />

        <line x1={392} y1={278} x2={328} y2={222} stroke="#e67e22" strokeWidth={2.3} markerEnd="url(#rb-arrow-orange)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.5s ease 3.9s both" }} />
        {!isFun1 && <text x={345} y={195} fontSize={12} fill="#c0392b" fontWeight="bold" style={{ animation: "rbFadeIn 0.3s ease 4.4s both" }}>print 1</text>}

        <line x1={272} y1={198} x2={208} y2={142} stroke="#e67e22" strokeWidth={2.3} markerEnd="url(#rb-arrow-orange)" pathLength={100} strokeDasharray={100} style={{ animation: "rbDrawLine 0.5s ease 4.5s both" }} />
        {!isFun1 && <text x={225} y={115} fontSize={12} fill="#c0392b" fontWeight="bold" style={{ animation: "rbFadeIn 0.3s ease 5.2s both" }}>print 2</text>}

        <line x1={152} y1={118} x2={88} y2={62} stroke="#e67e22" strokeWidth={2.3} markerEnd="url(#rb-arrow-orange)" pathLength={100} strokeDasharray={100} style={{ animation: `rbDrawLine 0.5s ease ${isFun1 ? "5.1s" : "5.5s"} both` }} />
        {!isFun1 && <text x={105} y={35} fontSize={12} fill="#c0392b" fontWeight="bold" style={{ animation: "rbFadeIn 0.3s ease 6.0s both" }}>print 3</text>}

        <text x={260} y={20} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#1a1a1a" style={{ animation: `rbFadeIn 0.5s ease ${isFun1 ? "5.7s" : "6.5s"} both` }}>
          Output: {isFun1 ? "3 2 1" : "1 2 3"}
        </text>
      </svg>
      <ReplayButton onClick={() => setKey((k) => k + 1)} />
      <style jsx global>{`
        @keyframes rbPopIn { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
        @keyframes rbFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes rbDrawLine { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}

interface RoomBulbProps {
  version: 1 | 2;
}

export function RoomBulbDiagram({ version }: RoomBulbProps) {
  const [key, setKey] = useState(0);
  const labels = version === 1 ? ["1", "2", "3"] : ["3", "2", "1"];
  const bulbDelays = version === 1 ? [0.2, 1.0, 1.8] : [2.6, 1.8, 1.0];
  const walkAnim = version === 1 ? "rbWalkV1 2.4s ease both" : "rbWalkV2 3.2s ease both";
  return (
    <div>
      <svg key={key} viewBox="0 0 400 140" width="100%" style={{ maxWidth: 400 }}>
        <rect x={10} y={30} width={110} height={90} fill="none" stroke="#2c3e50" strokeWidth={2} />
        <rect x={130} y={30} width={110} height={90} fill="none" stroke="#2c3e50" strokeWidth={2} />
        <rect x={250} y={30} width={110} height={90} fill="none" stroke="#2c3e50" strokeWidth={2} />
        <text x={65} y={22} textAnchor="middle" fontSize={12} fill="#555">Room 1</text>
        <text x={185} y={22} textAnchor="middle" fontSize={12} fill="#555">Room 2</text>
        <text x={305} y={22} textAnchor="middle" fontSize={12} fill="#555">Room 3</text>
        <circle cx={65} cy={55} r={10} fill="#d8d8d8" stroke="#888" style={{ animation: `rbLightUp 0.3s ease ${bulbDelays[0]}s both` }} />
        <circle cx={185} cy={55} r={10} fill="#d8d8d8" stroke="#888" style={{ animation: `rbLightUp 0.3s ease ${bulbDelays[1]}s both` }} />
        <circle cx={305} cy={55} r={10} fill="#d8d8d8" stroke="#888" style={{ animation: `rbLightUp 0.3s ease ${bulbDelays[2]}s both` }} />
        <text x={65} y={59} textAnchor="middle" fontSize={9} fill="#555">{labels[0]}</text>
        <text x={185} y={59} textAnchor="middle" fontSize={9} fill="#555">{labels[1]}</text>
        <text x={305} y={59} textAnchor="middle" fontSize={9} fill="#555">{labels[2]}</text>
        <circle cx={65} cy={95} r={9} fill="#c0392b" style={{ animation: walkAnim }} />
      </svg>
      <ReplayButton onClick={() => setKey((k) => k + 1)} />
      <style jsx global>{`
        @keyframes rbLightUp { from { fill: #d8d8d8; } to { fill: #f4d03f; } }
        @keyframes rbWalkV1 {
          0%   { transform: translateX(0px); }
          35%  { transform: translateX(0px); }
          45%  { transform: translateX(120px); }
          75%  { transform: translateX(120px); }
          85%  { transform: translateX(240px); }
          100% { transform: translateX(240px); }
        }
        @keyframes rbWalkV2 {
          0%   { transform: translateX(0px); }
          10%  { transform: translateX(120px); }
          20%  { transform: translateX(240px); }
          65%  { transform: translateX(240px); }
          75%  { transform: translateX(120px); }
          85%  { transform: translateX(120px); }
          95%  { transform: translateX(0px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
    </div>
  );
}
