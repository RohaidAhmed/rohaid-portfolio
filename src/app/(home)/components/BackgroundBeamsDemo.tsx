"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Contact Me
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Looking for Front-End Development? Contact Me for Web Solutions and Seamless User Experiences!
                </p>
            </div>
            <div className="flex flex-row mx-auto gap- px-4 py-2">
                <p className="grid-cols-1">Email: </p>
                <div
                    className="grid-cols-2  rounded-lg border border-neutral-800 focus:ring-2  bg-neutral-950 placeholder:text-neutral-700 "
                >rohaidahmed123@gmail.com</div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
