import { FC } from "react";
import { TagProps } from "@/types";

const Tag: FC<TagProps> = ({ text, color }) => (
  <span
    style={{
      padding: "3px 10px",
      borderRadius: 3,
      fontSize: 11,
      fontFamily: "'JetBrains Mono', monospace",
      background: `${color}18`,
      color,
      border: `1px solid ${color}40`,
      letterSpacing: "0.04em",
    }}
  >
    {text}
  </span>
);

export default Tag;
