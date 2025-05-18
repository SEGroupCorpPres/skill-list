'use client'
import {seedData} from "../../public/data/seed-data";
import dynamic from "next/dynamic";

const NoData = dynamic(() => import("@/app/no-data"));
const Service = dynamic(() => import("@/components/service"));

// const Error = dynamic(() => import("@/app/error"));
// const Loading = dynamic(() => import("@/app/loading"));


// const NotFound = dynamic(() => import("@/app/not-found"));
export default function ServiceList() {
    return (
        <div className={"container mx-auto px-4 py-10 bg-amber flex flex-col justify-center items-center"}>
            <ul role={"grid"} className={"grid grid-cols-2 w-full gap-2 items-center"}>
                {(seedData == null || seedData.akademiyalar.length == 0 || seedData.universitetlar.length == 0 || seedData.ustalar.length == 0) ? (
                    <NoData/>) : (
                    seedData.akademiyalar.map((item, index) => (
                            <Service key={index} item={item}/>
                        )
                    )
                )}
            </ul>
        </div>
    );
}
