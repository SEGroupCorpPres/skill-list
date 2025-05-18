import dynamic from "next/dynamic";

const Search = dynamic(() => import("@/components/search"));
const ServiceList = dynamic(() => import("@/components/service-list"));



export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-full min-w-full bg-white">
            <main className="">
                <div className={"container mx-auto px-4 py-10 bg-amber flex flex-col justify-center items-center"}>
                    <Search/>
                    <ServiceList/>
                </div>
            </main>
        </div>
    );
}
