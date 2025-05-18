'use client'
import dynamic from "next/dynamic";
import Link from "next/link";
import {useItem} from "@/context/ItemContext";

const Rating = dynamic(() => import("@/components/rating"));

export default function Service(props: { item: { manzil: string; nomi: string; telefon: string; yonalish: string } }) {
    const { setItem } = useItem();
    return <li className={"relative w-full h-[250px] flex flex-row  rounded-md transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-[8px_4px_20px_rgba(0,0,0,0.3)] hover:bg-gray-100"}>
        <Link href={{pathname:"/service-view",}} onClick={() => setItem(props.item)} className="absolute inset-0 z-10" aria-label="Service View">
            <span className="sr-only">Go to Service View</span>
        </Link>
        <div dir={"ltr"} className={"w-1/2 rounded-s-lg  bg-red-600"}></div>
        <div className={"w-1/2 h-full flex flex-col justify-between  items-start pl-3"}>
            <div className={"flex flex-col justify-start items-start"}>
                <h3 className={"text-black text-3xl py-3"}>{props.item.nomi}</h3>
                <p className={"text-gray-800"}>{props.item.manzil}</p>
                <div className={"flex flex-row justify-start items-center py-2"}>
                    <Rating/>
                </div>
            </div>
            <div className={"w-full flex flex-row justify-end items-center px-5 pb-5"}>
                <a
                    href="#"
                    className="group text-red-600 font-medium flex items-center gap-1 transition-colors duration-300 hover:text-red-800"
                >
                    Batafsil
                    <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </li>;
}