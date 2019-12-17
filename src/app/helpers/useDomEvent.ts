import { useEffect } from 'react'

const useDomEvent = (eventName: string, callback: (e?: any) => void) => {
    useEffect(() => {
        window.addEventListener(eventName, callback)

        return () => {
            window.removeEventListener(eventName, callback)
        }
    }, [])
}

export default useDomEvent
