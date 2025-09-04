import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";


export function SpotlightPreview() {
  return (
    // <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center">
      <div
        className={cn(
          "pointer-events-none relative  select-none overflow-hidden h-screen justify-center items-center flex antialiased w-full rounded-md",
          // "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      >

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Rohaid Ahmed Mirza
        </h1>
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl mt-1">
          Full Stack Engineer
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Skilled in Tailwind, NextJS, TypeScript; focused
          on responsive, dynamic web development with efficient code and state
          management.
        </p>
      </div>
    </div>
  );
}
