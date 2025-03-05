import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(1)
    const [time, setTime] = useState(new Date().valueOf())

    useEffect(() => {
        setInterval(() => {
            if (count > 0)
                setTime(new Date().valueOf())
        }, 1000)
    }, [])

    return (
        <div>
            {new Date(time).toLocaleTimeString()}


            <button onClick={() => setCount(prev => -prev)}>
                Stop Timer!
            </button>
        </div>
    )
}

export default App
