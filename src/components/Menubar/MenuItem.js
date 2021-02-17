import { useState } from 'react'
import Button from './Button'
import Menu from './Menu'

export default function MenuItem() {
    const [menuShown, setMenuShown] = useState(false)

    const toggle = () => {
        setMenuShown(!menuShown)
    }

    return (
        <div className="relative inline-block text-left">
            <Button title="File" active={menuShown} action={toggle}/>
            <Menu shown={menuShown} />
        </div>
    )
}
