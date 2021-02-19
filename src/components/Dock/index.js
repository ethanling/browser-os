import DockIcon from "./DockIcon";

export default function Dock() {
    const iconSize = 3;

    return (
        <div className="absolute flex flex-row items-center justify-center w-auto p-4 overflow-x-auto bg-gray-400 shadow-xl ring-1 ring-black ring-opacity-5 bg-opacity-60 space-x-4 bottom-4 rounded-2xl">
            <DockIcon 
                bgColor="bg-red-600" 
                name="About" 
                iconSize={iconSize}
            />
            <DockIcon
                bgColor="bg-green-400"
                name="Spotify"
                iconSize={iconSize}
            />
            <DockIcon
                bgColor="bg-blue-400"
                name="Twitter"
                iconSize={iconSize}
            />
            <DockIcon
                bgColor="bg-gray-600" 
                name="Github" 
                iconSize={iconSize} 
            />
            <DockIcon
                bgColor="bg-purple-600"
                name="Photos"
                iconSize={iconSize}
            />
            <DockIcon
                bgColor="bg-gray-600"
                name="Settings"
                iconSize={iconSize}
            />
        </div>
    );
}
