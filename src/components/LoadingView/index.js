export default function LoadingView() {
    return (
        <div className="flex">
            <span className="flex items-center justify-center w-3 h-3">
                <span className="absolute inline-flex bg-gray-800 rounded-full opacity-75 w-7 h-7 3 animate-ping" />
                <span className="relative inline-flex w-3 h-3 bg-gray-500 rounded-full" />
            </span>
        </div>
    );
}
