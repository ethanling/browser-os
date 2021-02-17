import DockIcon from './DockIcon'

export default function Dock({ children }) {
    return (
        <div className="absolute flex flex-row items-center justify-center p-4 bg-gray-400 shadow-xl bg-opacity-60 space-x-4 bottom-4 rounded-2xl">
            <DockIcon bgColor="bg-red-600" name="Info"/>
            <DockIcon bgColor="bg-blue-400" name="Twitter"/>
            <DockIcon bgColor="bg-gray-600" name="Github"/>
            <DockIcon bgColor="bg-purple-600" name="Photos"/>
            <DockIcon bgColor="bg-green-600" name="Settings"/>
        </div>
    )
}
