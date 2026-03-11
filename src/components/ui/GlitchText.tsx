"use client";

import { FC, useState, useEffect } from "react";
import { GlitchTextProps } from "@/types";

const GlitchText: FC<GlitchTextProps> = ({ text, style }) => {
  const [g, setG] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setG(true);
      setTimeout(() => setG(false), 100);
    }, 4500 + Math.random() * 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <span style={{ position: "relative", display: "inline-block", ...style }}>
      {text}
      {g && (
        <>
          <span
            style={{
              position: "absolute", top: 0, left: "2px",
              color: "#f43f5e",
              clipPath: "polygon(0 25%,100% 25%,100% 45%,0 45%)",
              opacity: 0.85, pointerEvents: "none",
            }}
          >{text}</span>
          <span
            style={{
              position: "absolute", top: 0, left: "-2px",
              color: "#38bdf8",
              clipPath: "polygon(0 55%,100% 55%,100% 75%,0 75%)",
              opacity: 0.85, pointerEvents: "none",
            }}
          >{text}</span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
