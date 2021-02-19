export default function Content({ children, titleBarShown, dark }) {
    const withTitlebar = "rounded-b-xl";
    const withoutTitlebar = "rounded-xl";
    const darkBg = "bg-gray-700 text-gray-100";
    const lightBg = "bg-gray-100";

    return (
        <div
            className={`flex flex-col ${
                titleBarShown ? withTitlebar : withoutTitlebar
            } ${dark ? darkBg : lightBg}`}
        >
            <div className="p-10">{children}</div>
        </div>
    );
}
