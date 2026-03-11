"use client";

import { FC, useState, useEffect } from "react";
import { TypeWriterProps } from "@/types";
import { C } from "@/theme/colors";

const TypeWriter: FC<TypeWriterProps> = ({ text, speed = 45, onDone }) => {
  const [disp, setDisp] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) {
        setDisp(text.slice(0, ++i));
      } else {
        clearInterval(iv);
        setDone(true);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, onDone]);

  return (
    <span>
      {disp}
      {!done && (
        <span style={{ color: C.accent, animation: "blink 1s step-end infinite" }}>▌</span>
      )}
    </span>
  );
};

export default TypeWriter;
