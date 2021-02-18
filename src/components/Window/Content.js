export default function Content({ children, titleBarShown }) {
    const withTitlebar = "flex flex-col bg-gray-100 rounded-b-xl"  
    const withoutTitlebar = "flex flex-col bg-gray-100 rounded-xl"

    return (
        <div className={`${titleBarShown ? withTitlebar : withoutTitlebar}`}>
            <div className="p-10">
                { children }
            </div>
        </div>
    )
}
