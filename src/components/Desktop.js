import Menubar from './Menubar/index.js'
import Window from './Window/index.js'
import Dock from './Dock/index.js'

export default function Desktop() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center w-screen h-screen bg-red-400">
            <Menubar openWindow="About"/>
            <Window />
            <Dock />
        </div>
    )
}
