export default function Content({ children }) {
    return (
        <div className="flex flex-col bg-gray-100 rounded-b-xl">
            <div className="p-10">
                { children }
            </div>
        </div>
    )
}
