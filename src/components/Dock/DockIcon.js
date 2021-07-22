import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import About from "../icons/About";
import Twitter from "../icons/Twitter";
import Github from "../icons/Github";
import Settings from "../icons/Settings";
import Photos from "../icons/Photos";
import Spotify from "../icons/Spotify";

const iconSet = [
    { name: "About", icon: About },
    { name: "Spotify", icon: Spotify },
    { name: "Github", icon: Github },
    { name: "Twitter", icon: Twitter },
    { name: "Photos", icon: Photos },
    { name: "Settings", icon: Settings },
];

export default function DockIcon({ bgColor, name, iconSize, action }) {
    // Uses name to detewrmine app link
    const [path, setPath] = useState("");
    const formatPath = (name) => {
        return name.toLowerCase();
    };

    useEffect(() => {
        setPath(formatPath(name));
    }, [name]);

    return (
        <button onClick={action}>
            <Link to={path}>
                <div className="cursor-pointer transition-all ease-linear transform-gpu hover:scale-110 ease-in">
                    <div
                        className={`flex p-4 ring-1 ring-black ring-opacity-5 shadow-lg text-white items-center justify-center ${
                            bgColor || "bg-gray-200"
                        } rounded-lg`}
                    >
                        {iconSet.map((item, i) => {
                            if (item.name === name) {
                                return <item.icon key={i} size={iconSize} />;
                            }
                        })}
                    </div>
                </div>
            </Link>
        </button>
    );
}
