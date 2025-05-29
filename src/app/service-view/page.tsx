'use client'

import {useItem} from "@/context/ItemContext";
import Image from "next/image";

const universityInfoList = [
    {
        key: 0,
        title: "Academic Excellence",
        description: "Renowned faculty members are leaders in their fields, with 90% holding doctoral degrees. Our student-to-faculty ratio of 15:1 ensures personalized attention."
    },
    {
        key: 1,
        title: "State-of-the-Art Facilities",
        description: "Modern classrooms, advanced research laboratories, a comprehensive library with over 2 million volumes, and cutting-edge technology throughout the campus."
    },
    {
        key: 2,
        title: "Global connections",
        description: "Partnerships with 50 universities worldwide, offering exchange programs, collaborative research opportunities and international perspectives."
    },
    {
        key: 3,
        title: "Career Outcomes",
        description: "95% of our graduates secure employment or pursue further educations within six months of graduation, with and average starting salary of $65000."
    },
]
const universityStat = [
    {
        key: 0,
        title: "Students",
        info: "25000+"
    },
    {
        key: 1,
        title: "Programs",
        info: "180+"
    },
    {
        key: 2,
        title: "Research funding",
        info: "$120M"
    },
    {
        key: 3,
        title: "Campus size",
        info: "250 acres"
    },
]

const universityCampusImgList = [
    "https://www.ubtuit.uz/assets/Images/about_img1.webp",
    "https://www.ubtuit.uz/assets/Images/about_img2.webp",
    "https://www.ubtuit.uz/assets/Images/about_img3.webp",
    "https://www.ubtuit.uz/assets/Images/about_img4.jpg",
    "https://www.ubtuit.uz/assets/Images/about_tatu1.jpg",
    "https://www.ubtuit.uz/assets/Images/about_tatu2.jpg"
]

export default function ServiceView() {
    const {item} = useItem();
    const message = "Ma'lumot yo'q";

    if (!item) return <div>{message}</div>;
    return <div
        className={"flex flex-col items-center w-full h-full  bg-gray-100"}>
        <div
            className={"relative flex flex-col w-full h-190 items-center justify-center box-border"}>
            <Image src={"/tatu.jpg"} alt={"skill image"} fill={true}
                   loading={"eager"} priority={false}
                   className={"object-cover object-center"}/>
            <div
                className={"w-5xl flex flex-col justify-center items-center relative z-10 "}>
                <h1 className={"text-white text-7xl"}>{item.nomi}</h1>
                <p className={"text-white text-2xl text-center"}>Lorem ipsum
                    dolor sit amet, consectetur adipisicing
                    elit.
                    Commodi cupiditate magni pariatur reprehenderit rerum sed
                    tempore ullam vero. Aperiam commodi
                    deserunt
                    dolorum et incidunt iste odit omnis, sed totam unde.</p>
            </div>
        </div>
        <div
            className={"flex flex-row items-center justify-center relative px-25 w-full h-full"}>
            <section
                className={"flex flex-col items-center justify-center w-auto "}>
                <div className={"flex flex-row  w-full items-start my-5"}>
                    <div
                        className={"flex-[3.5] flex flex-col w-full items-start justify-start my-5"}>
                        <h2 className={"text-indigo-900 text-5xl font-bolder mb-4"}>About
                            Our
                            University</h2>
                        <p className={"text-black font-medium text-3xl my-5"}>Lorem
                            ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi at beatae consequatur distinctio
                            doloribus dolorum eos eum ipsa minima modi,
                            neque,
                            nesciunt porro quia quibusdam quo, sequi
                            temporibus
                            vitae voluptatum!</p>
                        <div
                            className={"grid grid-cols-2 items-center justify-between gap-4 pe-5 mt-5"}>
                            {
                                universityInfoList.map((item) => (
                                        <div
                                            key={item.key}
                                            className={"flex flex-col items-center bg-white rounded-xl p-5"}>
                                            <h3 className={"text-indigo-900 text-3xl font-black"}>{item.title}</h3>
                                            <p className={"text-black font-medium text-2xl"}>{item.description}</p>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                    <aside
                        className={"w-full h-auto flex flex-col items-center justify-center flex-[1] bg-white rounded-xl my-5"}>
                        <div className={"flex flex-col items-center"}>
                            {
                                universityStat.map((item) => (
                                        <div
                                            key={item.key}
                                            className={"flex flex-col w-full items-start bg-white rounded-xl p-5 m-3 justify-start"}>
                                            <h3 className={"text-indigo-900 text-3xl font-black"}>{item.title}</h3>
                                            <p className={"text-orange-300 font-bold text-5xl"}>{item.info}</p>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div
                            className={"flex flex-col items-center justify-center w-auto bg-blue-700 rounded-xl m-5 p-5"}>
                            <h2 className={"text-3xl font-black"}>Ready to join
                                us?</h2>
                            <a href="#"
                               className={"text-blue-700 text-3xl font-black m-3 p-5 bg-yellow-500 rounded-xl"}>Apply
                                now</a>
                        </div>
                    </aside>
                </div>
                <div
                    className={"flex flex-col items-center justify-center w-auto rounded-xl my-5"}>
                    <h2 className={"text-5xl font-black text-blue-900"}>Campus
                        Gallery</h2>
                    <div
                        className={"grid grid-cols-3 items-center justify-between gap-4 pe-5 mt-5"}>
                        {
                            universityCampusImgList.map((item, index) =>
                                <img src={item} alt="" key={index}
                                     className={"w-full h-[350] rounded-xl object-cover"}/>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    </div>;
}