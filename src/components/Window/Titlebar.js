// Class "drag-handle" enables window dragging by using only the titlebar
export default function Titlebar({ title }) {
    return (
        <div className="relative flex flex-row items-center w-full p-4 text-white bg-gray-800 drag-handle justify-items-center rounded-t-xl">
            <div className="absolute flex flex-row mr-5 left-4 space-x-2">
                <div className="w-5 h-5 bg-red-400 rounded-full"></div>
                <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                <div className="w-5 h-5 bg-green-400 rounded-full"></div>
            </div>
            <h1 className="items-center flex-grow text-2xl text-center drag-handle ">{ title || "Title" }</h1>
        </div>
    );
}
