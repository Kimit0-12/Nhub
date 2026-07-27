"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const demoModes = {
  focus: {
    eyebrow: "Focus actual",
    value: "25:00",
    label: "Tiempo restante",
    helper: "Sesión 1/3 · Portfolio",
    progress: "74%",
    accent: "green",
  },
  break: {
    eyebrow: "Pitipausa lista",
    value: "10:00",
    label: "Descanso ganado",
    helper: "Respira. NHub se ocupa del reloj.",
    progress: "100%",
    accent: "wine",
  },
  reward: {
    eyebrow: "Recompensa",
    value: "+20",
    label: "Canutimonedas",
    helper: "Por completar tu pitipausa.",
    progress: "88%",
    accent: "gold",
  },
} as const;

type DemoMode = keyof typeof demoModes;

export default function FocusDemo() {
  const [mode, setMode] = useState<DemoMode>("focus");
  const active = demoModes[mode];

  return (
    <div className={`demo-card demo-${active.accent}`}>
      <div className="demo-tabs" aria-label="Cambiar momento de la sesión">
        {(["focus", "break", "reward"] as DemoMode[]).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={mode === item}
            onClick={() => setMode(item)}
          >
            {item === "focus"
              ? "Focus"
              : item === "break"
                ? "Pitipausa"
                : "Premio"}
          </button>
        ))}
      </div>

      <div className="demo-screen" aria-live="polite">
        <p>{active.eyebrow}</p>
        <div
          className="demo-ring"
          style={{ "--demo-progress": active.progress } as CSSProperties}
        >
          <strong>{active.value}</strong>
          <span>{active.label}</span>
        </div>
        <div className="demo-helper">
          <span aria-hidden="true">✓</span>
          {active.helper}
        </div>
      </div>
    </div>
  );
}
