import { useState } from 'react'
import { useInterval } from '../../hooks/useInterval.js'

export default function Data() {
    const [time, setTime] = useState()

    useInterval(() => {
        const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }; 
        const currentTime = new Date().toLocaleString('en-US', options)
        setTime(currentTime) 
    })

    return (
        <div className="text-gray-100">{time}</div>
    )
}
