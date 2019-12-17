import { useState } from 'react'
import useInterval from './useInterval'
import { number } from 'prop-types'

const useSine = (deltaTime: number, start: number = 0): number => {
    const [x, setX] = useState(start)
    const [val, setVal] = useState(0)

    useInterval(() => {
        setX(x => {
            setVal(Math.sin(x))
            return x + deltaTime / 500
        })
    }, deltaTime)

    return val
}

export default useSine
