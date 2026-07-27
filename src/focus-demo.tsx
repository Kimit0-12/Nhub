"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { useI18n } from "./i18n";

const demoModes = {
  focus: {
    eyebrow: "currentFocus",
    value: "25:00",
    label: "timeLeft",
    helper: "focusHelper",
    progress: "74%",
    accent: "green",
  },
  break: {
    eyebrow: "breakReady",
    value: "10:00",
    label: "earnedBreak",
    helper: "breakHelper",
    progress: "100%",
    accent: "wine",
  },
  reward: {
    eyebrow: "reward",
    value: "+20",
    label: "coins",
    helper: "rewardHelper",
    progress: "88%",
    accent: "gold",
  },
} as const;

type DemoMode = keyof typeof demoModes;

export default function FocusDemo() {
  const { t } = useI18n();
  const [mode, setMode] = useState<DemoMode>("focus");
  const active = demoModes[mode];

  return (
    <div className={`demo-card demo-${active.accent}`}>
      <div className="demo-tabs" aria-label={t("changeMoment")}>
        {(["focus", "break", "reward"] as DemoMode[]).map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={mode === item}
            onClick={() => setMode(item)}
          >
            {item === "focus"
              ? t("focus")
              : item === "break"
                ? t("breakTab")
                : t("rewardTab")}
          </button>
        ))}
      </div>

      <div className="demo-screen" aria-live="polite">
        <p>{t(active.eyebrow)}</p>
        <div
          className="demo-ring"
          style={{ "--demo-progress": active.progress } as CSSProperties}
        >
          <strong>{active.value}</strong>
          <span>{t(active.label)}</span>
        </div>
        <div className="demo-helper">
          <span aria-hidden="true">✓</span>
          {t(active.helper)}
        </div>
      </div>
    </div>
  );
}
