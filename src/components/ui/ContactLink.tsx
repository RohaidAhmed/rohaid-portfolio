"use client";

import { FC, useState } from "react";
import { ContactLinkProps } from "@/types";
import { C } from "@/theme/colors";

const ContactLink: FC<ContactLinkProps> = ({ label, value, href }) => {
  const [hov, setHov] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "15px 20px",
          border: `1px solid ${hov ? C.accentMid : C.border}`,
          borderRadius: 6, cursor: "pointer",
          background: hov ? C.accentDim : "transparent",
          transition: "all 0.2s ease",
        }}
      >
        <span style={{ fontSize: 10, color: C.muted, fontFamily: "monospace", letterSpacing: "0.12em" }}>
          {label}
        </span>
        <span style={{ fontSize: 13.5, color: hov ? C.accent : C.text, fontFamily: "monospace" }}>
          {value} {hov ? "↗" : ""}
        </span>
      </div>
    </a>
  );
};

export default ContactLink;
