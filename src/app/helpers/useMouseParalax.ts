import { useState, useEffect } from 'react'

const useMouseParalax = (level: number): [number, number] => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', ({ clientX, clientY }) => {
            setX(((clientX - window.innerWidth / 2) / 10) * level)
            setY(((clientY - window.innerHeight / 2) / 10) * level)
        })
    }, [])

    return [x, y]
}

export default useMouseParalax
