"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export function TabsDemo() {
    const tabs = [
        {
            title: "Invoice Dashboard",
            value: "dashboard",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Invoice Dashboard</p>
                    <ImageContainer src={"/best-projects/invoice-dashboard.png"} href={"https://invoice-dashboard-rohaid.vercel.app/"} />
                </div>
            ),
        },
        {
            title: "Weather App",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Weather App</p>
                    <ImageContainer src={"/best-projects/weather-app.png"} href={"https://forcast-weather.vercel.app/"} />
                </div>
            ),
        },
        {
            title: "Github User Search",
            value: "service",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Github User Search</p>
                    <ImageContainer src={"/best-projects/github-user-search.png"} href={"https://github-user-serach-rohaid.vercel.app/"} />
                </div>
            ),
        },
        {
            title: "Country Info App",
            value: "country-info",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Country Info App</p>
                    <ImageContainer src={"/best-projects/country-info.PNG"} href={"https://country-info-rohaid.vercel.app/"} />
                </div>
            ),
        },
        // {
        //     title: "Random",
        //     value: "random",
        //     content: (
        //         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        //             <p>Random tab</p>
        //             <ImageContainer src={""} href={""} />
        //         </div>
        //     ),
        // },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
            <h2 className="font-bold text-4xl text-white">Best Projects</h2>
            <Tabs tabs={tabs} />
        </div>
    );
}

const ImageContainer = ({ src, href }: { src: string; href: string; }) => {
    return (
        <Link href={href ?? ""} target="_blank">
            <Image
                src={src}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
        </Link>
    );
};
