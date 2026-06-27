"use client";

import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const speeds = [0.75, 1, 1.25, 1.5, 2];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrent(Number(e.target.value));
  };

  const changeSpeed = (s: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = s;
    setSpeed(s);
  };

  const fmt = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = duration ? (current / duration) * 100 : 0;

  return (
    <div className="my-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 shadow-sm">
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-3">
        {/* Play / Pause */}
        <button
          onClick={toggle}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 active:scale-95 transition-all"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <div className="flex flex-1 flex-col gap-1.5">
          {title && (
            <p className="text-xs font-semibold text-blue-800 truncate">{title}</p>
          )}

          {/* Progress bar */}
          <div className="relative flex items-center gap-2">
            <span className="w-8 shrink-0 text-right text-[11px] text-gray-500">{fmt(current)}</span>
            <div className="relative flex-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-200">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={current}
                onChange={seek}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                aria-label="Seek"
              />
            </div>
            <span className="w-8 shrink-0 text-[11px] text-gray-500">{fmt(duration)}</span>
          </div>
        </div>

        {/* Speed */}
        <div className="flex gap-1">
          {speeds.map((s) => (
            <button
              key={s}
              onClick={() => changeSpeed(s)}
              className={`rounded px-1.5 py-0.5 text-[11px] font-medium transition-colors ${
                speed === s
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-500 hover:bg-blue-100"
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Download */}
        <a
          href={src}
          download
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow hover:bg-blue-50 transition-colors"
          aria-label="Download audio"
          title="Download audio"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path d="M12 3v13M7 11l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20h16" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
