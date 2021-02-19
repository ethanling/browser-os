export default function LoadingView() {
    return (
        <div className="flex">
            <span className="flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping" />
                <span className="relative inline-flex w-3 h-3 bg-purple-500 rounded-full" />
            </span>
        </div>
    );
}
