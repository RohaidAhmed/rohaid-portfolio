import { FC } from "react";
import { NavDotProps } from "@/types";
import { C } from "@/theme/colors";

const NavDot: FC<NavDotProps> = ({ active }) => (
  <div
    style={{
      width: active ? 22 : 7,
      height: 7,
      borderRadius: 4,
      background: active ? C.accent : C.dim,
      transition: "all 0.3s",
    }}
  />
);

export default NavDot;
