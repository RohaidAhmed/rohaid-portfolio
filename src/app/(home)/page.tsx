import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { cn } from "@/lib/utils";
import { LampDemo } from "./components/LampDemo";

export default function Home() {
  return (
    <div>
      <SpotlightPreview />
      <TabsDemo />
      <BentoGridDemo />
      
      <BackgroundBeamsDemo />
      
    </div>
  );
}
