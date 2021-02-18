import { useState } from 'react'
import Button from './Button'
import Menu from './Menu'

export default function MenubarItem({title, menuPos}) {
    const [menuShown, setMenuShown] = useState(false)

    const toggle = () => {
        setMenuShown(!menuShown)
    }

    return (
        <div className="relative inline-block text-left">
            <Button title={title} active={menuShown} action={toggle}/>
            <Menu shown={menuShown} direction={menuPos}/>
        </div>
    )
}
