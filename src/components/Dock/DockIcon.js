import { useState, useEffect } from "react";
import Info from "../icons/Info";
import Twitter from "../icons/Twitter";
import Github from "../icons/Github";
import Settings from "../icons/Settings";
import Photos from "../icons/Photos";

const iconSet = [
   { name: "Info", icon: Info },
   { name: "Github", icon: Github },
   { name: "Twitter", icon: Twitter },
   { name: "Photos", icon: Photos },
   { name: "Settings", icon: Settings },
];

export default function DockIcon({ bgColor, name }) {
   const [iconSize, setIconSize] = useState(3);

   useEffect(() => {
      //TODO: dunamic icon sizing
   }, []);

   return (
      <div className="transform ease-linear hover:scale-150 ">
         <div
            className={`flex ring-1 ring-black ring-opacity-5 shadow-lg text-white items-center justify-center w-20 h-20 ${bgColor ||
               "bg-gray-200"} rounded-lg`}
         >
            {iconSet.map((item, i) => {
               if (item.name === name) {
                  return <item.icon key={i} size={iconSize} />;
               }
            })}
         </div>
      </div>
   );
}
