import { useState, useEffect } from 'react'
import { motion, useDragControls } from "framer-motion";
import Content from "./Content";
import Titlebar from "./Titlebar";

// PROPS:
// title: String, Title of the Window
// children: function, Components to be shown inside of the window.
// titleBarShown: boolean, Option to hide Titlebar. Default: true
// width: String, Option to change window width on render. Default: 9/12
// dark: Boolean, Option for dark window background, Default: false 


export default function Window({ title, children, titleBarShown, width, dark }) {
    const [windowWidth, setWindowWidth] = useState("9/12")
    const dragControls = useDragControls();
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    function onDragStart(e, info) {
        // We will ignore the request to drag if it's not coming from the handle
        if (!e.target.classList.contains("drag-handle")) {
            // Stop the drag - `e` and `info` are needed from the library
            dragControls.componentControls.forEach((entry) => {
                entry.stop(e, info);
            });
        }
    }
    
    useEffect(() => {
        if (width)  {
            setWindowWidth(width)
        }
    }, [width])

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            drag
            dragControls={dragControls}
            onDragStart={onDragStart}
            className="w-9/12 shadow-xl"
            className={`w-${windowWidth} shadow-xl`}
        >
            <span className="drag-handle">
                { titleBarShown ? (
                    <Titlebar title={title} />
                ) : ('') }
            </span>
            <Content dark={dark} titleBarShown={titleBarShown}>{children}</Content>
        </motion.div>
    );
}
