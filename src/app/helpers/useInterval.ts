import { useEffect } from 'react'

const useInterval = (callback: () => void, deltaTime: number) => {
    useEffect(() => {
        const intervalID = setInterval(callback, deltaTime)

        return () => {
            clearInterval(intervalID)
        }
    }, [])
}

export default useInterval
