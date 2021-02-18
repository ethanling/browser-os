import Logo from "../icons/Logo";
import Date from "./Date";
import MenubarItem from './MenubarItem'

export default function Menubar({ openWindow }) {
    return (
        <div className="absolute top-0 flex flex-row items-center w-full pl-2 pr-2 text-white bg-gray-800 shadow-xl z-1 space-x-3">
            <Logo size="1" />
            <MenubarItem title="File" menuPos="left"/>
            <div className="flex flex-grow" />
            <Date />
        </div>
    );
}
