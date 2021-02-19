import { useContext } from 'react'
import { AppsDataContext } from '../../context/AppsDataContext'
import DockIcon from "./DockIcon";

export default function Dock() {
    const apps = useContext(AppsDataContext)
    const iconSize = 3;
    return (
        <div className="absolute flex flex-row items-center justify-center w-auto p-4 overflow-x-auto bg-gray-400 shadow-xl ring-1 ring-black ring-opacity-5 bg-opacity-60 space-x-4 bottom-4 rounded-2xl">
            {apps.map((app, i) => {
                return (
                    <DockIcon
                        key={i}
                        bgColor={app.icon.bgColor}
                        name={app.name}
                        iconSize={iconSize}
                    />
                );
            })}
        </div>
    );
}
