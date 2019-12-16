import { useState, useRef, useEffect } from 'react'
import useInterval from './useInterval'
import Simple1DNoise from './simple1DNoise'

/**
 * @param deltaTime interval between updates
 * @param scale scale of the noise
 * @returns the noise value at the time between -1 and 1
 */
const useNoise = (deltaTime: number, scale: number = 0.1): number => {
    const noise = useRef<Simple1DNoise>()
    useEffect(() => {
        noise.current = new Simple1DNoise(2, scale)
    }, [])

    const [x, setX] = useState(0)
    const [val, setVal] = useState(0)

    useInterval(() => {
        setX(x => {
            setVal(noise.current.getVal(x) - 1)
            return x + 1
        })
    }, deltaTime)

    return val
}

export default useNoise
