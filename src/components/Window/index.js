import { motion, useDragControls } from "framer-motion";
import Content from "./Content";
import Titlebar from "./Titlebar";

export default function Window({ title }) {
    const dragControls = useDragControls();

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
            drag
            dragControls={dragControls}
            onDragStart={onDragStart}
            className="w-9/12 shadow-xl"
        >
            <span className="bg-yellow-900 drag-handle">
                <Titlebar title={title}/>
            </span>
            <Content>
                <p>This is some content</p>
            </Content>
        </motion.div>
    );
}
