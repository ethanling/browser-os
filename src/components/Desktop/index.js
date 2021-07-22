import { useContext } from "react";
import { AppsDataContext } from "../../context/AppsDataContext";
import Menubar from "../Menubar/index.js";
import Dock from "../Dock/index.js";

export default function Desktop({ config, children }) {
    const bgGradient = "bg-gradient-to-tr from-pink-500 to-blue-300";
    const [apps, dispatch] = useContext(AppsDataContext);

    console.log(apps)

    return (
        <div
            className={ bgGradient + " relative z-10 flex flex-col items-center justify-center w-screen h-screen"}>
            <Menubar openWindow="About" />
            {apps.map(app => {
                if (app.running) {
                    console.log(app)
                }
            })}
            {children}
            <Dock />
        </div>
    );
}
