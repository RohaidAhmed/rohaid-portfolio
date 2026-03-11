// ─── Design Token: Color Palette ─────────────────────────────────────────────

export const C = {
  bg:        "#080c10",
  surface:   "#0d1117",
  border:    "#1a2030",
  accent:    "#38bdf8",
  accentDim: "#38bdf815",
  accentMid: "#38bdf855",
  text:      "#e2e8f0",
  muted:     "#4a5568",
  dim:       "#1e2a3a",
  green:     "#00ff88",
  yellow:    "#fbbf24",
  red:       "#f43f5e",
  blue:      "#38bdf8",
} as const;

export type ColorToken = typeof C;
