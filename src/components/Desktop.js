import Menubar from './Menubar/index.js'
import Window from './Window/index.js'
import Dock from './Dock/index.js'

export default function Desktop({ config, children }) {
    
    const bgGradient = "bg-gradient-to-tr from-pink-500 to-blue-300"

    return (
        <div className={bgGradient + " relative z-10 flex flex-col items-center justify-center w-screen h-screen"}>
            <Menubar openWindow="About"/>
            { children }
            <Dock />
        </div>
    )
}
