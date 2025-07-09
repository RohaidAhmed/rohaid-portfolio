import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";

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
