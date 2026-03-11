"use client";

import { FC, useState } from "react";
import { C } from "@/theme/colors";
import TypeWriter from "./TypeWriter";

const lines: { prompt: string; text: string }[] = [
  { prompt: "$ ", text: "whoami" },
  { prompt: "",   text: "Rohaid Ahmed Mirza — Computer Engineer" },
  { prompt: "$ ", text: "cat location.txt" },
  { prompt: "",   text: "Rawalpindi, Pakistan" },
  { prompt: "$ ", text: "echo $STACK" },
  { prompt: "",   text: "Python · C/C++ · Next.js · React · Django · PostgreSQL" },
  { prompt: "$ ", text: "echo $STATUS" },
  { prompt: "",   text: "Open to new opportunities ✓" },
];

const Terminal: FC = () => {
  const [step, setStep] = useState(0);

  return (
    <div
      style={{
        background: "#060a0e",
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        padding: "18px 22px",
        fontFamily: "'JetBrains Mono','Fira Code',monospace",
        fontSize: 12.5,
        lineHeight: 1.9,
        minHeight: 170,
      }}
    >
      {/* Traffic lights */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ marginLeft: 8, color: C.muted, fontSize: 10.5 }}>
          rohaid@portfolio ~ zsh
        </span>
      </div>

      {/* Lines */}
      {lines.slice(0, step + 1).map((line, i) => (
        <div key={i}>
          {line.prompt && <span style={{ color: C.accent }}>{line.prompt}</span>}
          {i === step ? (
            <TypeWriter
              text={line.text}
              speed={line.prompt ? 55 : 18}
              onDone={() =>
                setTimeout(() => setStep((s) => Math.min(s + 1, lines.length - 1)), 350)
              }
            />
          ) : (
            <span style={{ color: line.prompt ? C.text : C.muted }}>{line.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Terminal;
