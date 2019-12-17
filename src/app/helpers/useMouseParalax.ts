import { useState, useEffect } from 'react'
import useInterval from './useInterval'
import useDomEvent from './useDomEvent'

const useMouseParalax = (level: number) => {
    const origin = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const [smoothedX, setSmoothedX] = useState(0)
    const [smoothedY, setSmoothedY] = useState(0)

    useDomEvent('mousemove', ({ clientX, clientY }: { clientX: number; clientY: number }) => {
        setX(((clientX - origin.x) / 10) * level)
        setY(((clientY - origin.y) / 10) * level)
    })

    useInterval(() => {
        setX(x => {
            setSmoothedX(sx => {
                const dist = x - sx
                return sx + dist * 0.05
            })
            return x
        })

        setY(y => {
            setSmoothedY(sy => {
                const dist = y - sy
                return sy + dist * 0.05
            })
            return y
        })
    }, 40)

    return [x, y, smoothedX, smoothedY]
}

export default useMouseParalax
