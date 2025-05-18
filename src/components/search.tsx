export default function Search() {
    return (<div
        className={"container mx-auto px-4 py-10 bg-amber min-w-full h-full flex flex-col justify-center items-center"}>
        <h3 className={"text-black font-bold text-3xl mb-[20]"}>Universitetlar</h3>
        <label htmlFor="search" className={"flex flex-row w-1/2 justify-center items-center"}>
            <input dir={"ltr"} type="text" className={"border-none bg-gray-400 p-2 rounded-s-lg w-1/2 text-gray-900"}
                   placeholder={"Universitet nomini kiriting..."}/>
            <button dir={"rtl"} type={"button"} className={"bg-green-700 text-white rounded-s-lg py-2 px-4"}>
                Qidirish
            </button>
        </label>
    </div>);
}