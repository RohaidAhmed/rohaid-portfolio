import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
      <h2 className="font-bold text-4xl text-white">All Projects</h2>
      <BentoGrid className="">
        {items.map((item, i) => (

          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            href={item.href}
            className={i === 0 ? "md:col-span-3 md:row-span-2" : ""}
          // className={i === 3 || i === 6 ? "md:col-span-3 md:row-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
function ItemImage({ src, href }: { src: string; href: string }) {

  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"
    >
      <Image
        className="h-full w-full object-fill hover:scale-105 transition-transform"
        width={1000}
        height={1000}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}
const items = [
  {
    title: "Task Manger",
    description: "A Full Stack app developed with Next.js for both frontend and backend (server-side rendering based on Node.js).",
    href: "https://task-manager-rohaid.vercel.app/",
    header: <ItemImage src={"/best-projects/task-manager.png"} href={"https://task-manager-rohaid.vercel.app/"} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Invoice Dashboard",
    description: "See all your invoices in one place.",
    src: "/best-projects/invoice-dashboard.png",
    href: "https://invoice-dashboard-rohaid.vercel.app/",
    header: <ItemImage src={"/best-projects/invoice-dashboard.png"} href={"https://invoice-dashboard-rohaid.vercel.app/"} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,

  },
  {
    title: "Weather App",
    description: "fetch real-time weather data.",
    src: "/best-projects/weather-app.png",
    href: "https://forcast-weather.vercel.app/",
    header: <ItemImage src={"/best-projects/weather-app.png"} href={"https://forcast-weather.vercel.app/"} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Github User Search",
    description: "Search GitHub profiles and view details.",
    href: "https://github-user-serach-rohaid.vercel.app/",
    header: <ItemImage src={"/best-projects/github-user-search.png"} href={"https://github-user-serach-rohaid.vercel.app/"} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Country Info App",
    description:
      "Get detailed information about countries worldwide.",
    href: "https://country-info-rohaid.vercel.app/",
    header: <ItemImage src={"/best-projects/country-info.PNG"} href={"https://country-info-rohaid.vercel.app/"} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <ItemImage src={""} href={""} />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <ItemImage src={""} href={""} />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
