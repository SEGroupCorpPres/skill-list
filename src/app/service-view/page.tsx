'use client'

import {useItem} from "@/context/ItemContext";

export default function ServiceView() {
    const {item} = useItem();
    const message = "Ma'lumot yo'q";

    if (!item) return <div>{message}</div>;
    return <div className={"relative flex flex-col justify-center items-center w-full h-full min-h-screen bg-white"}>
        <h1 className={"text-black text-4xl"}>{item.nomi}</h1>
    </div>;
}