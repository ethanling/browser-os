import { motion, useDragControls } from "framer-motion";
import Content from "./Content";
import Titlebar from "./Titlebar";

// PROPS:
// title: String, Title of the Window
// children: function, Components to be shown inside of the window.
// titleBarShown: boolean, Option to hide Titlebar. Default: true
// width: Option to change window width on render. Default: 9/12
export default function Window({ title, children, titleBarShown, width }) {
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

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            drag
            dragControls={dragControls}
            onDragStart={onDragStart}
            className="w-9/12 shadow-xl"
        >
            <span className="drag-handle">
                { titleBarShown ? (
                    <Titlebar title={title} />
                ) : ('') }
            </span>
            <Content titleBarShown={titleBarShown}>{children}</Content>
        </motion.div>
    );
}
