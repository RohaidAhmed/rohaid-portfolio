import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
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
            className={i === 3 || i === 6 ? "md:col-span-2" : ""} />

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
        className="h-full w-full object-cover"
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}
const items = [
  {
    title: "Invoice Dashboard",
    description: "",
    src: "/best-projects/invoice-dashboard.png",
    href: "https://invoice-dashboard-rohaid.vercel.app/",
    header: <ItemImage src={"/best-projects/invoice-dashboard.png"} href={"https://invoice-dashboard-rohaid.vercel.app/"} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,

  },
  {
    title: "Weather App",
    description: "",
    src: "/best-projects/weather-app.png",
    href: "https://forcast-weather.vercel.app/",
    header: <ItemImage src={"/best-projects/weather-app.png"} href={"https://forcast-weather.vercel.app/"} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Github User Search",
    description: "",
    header: <ItemImage src={"/best-projects/github-user-search.png"} href={"https://github-user-serach-rohaid.vercel.app/"} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <ItemImage />,
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Pursuit of Knowledge",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <ItemImage />,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <ItemImage />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <ItemImage />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
