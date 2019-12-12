import React, { FunctionComponent, useRef, useEffect, SyntheticEvent } from 'react'
import useScrollLine from '../hooks/useScrollLine'
import { Transition } from 'react-spring/renderprops'

import './scrollLine.sass'

const ScrollLine: FunctionComponent = () => {
    const [state, next, prev] = useScrollLine()
    let isScrolling = useRef<boolean>(false)
    let scrollTimeout = useRef<number | null>(null)

    useEffect(() => {
        return () => {
            window.clearTimeout(scrollTimeout.current)
        }
    }, [scrollTimeout])

    const handleScroll = (event: any) => {
        if (!isScrolling.current) {
            isScrolling.current = true

            if (event.deltaY > 0) next()
            else prev()

            scrollTimeout.current = window.setTimeout(() => (isScrolling.current = false), 600)
        }
    }

    const { scenes, currentScenesIds } = state

    return (
        <div onWheel={handleScroll} className="scroll-line">
            {scenes.map(scene => (
                <Transition
                    key={scene.id}
                    items={currentScenesIds.find(id => id === scene.id)}
                    {...scene.transitions}
                >
                    {display => display && (props => <div style={props}>{scene.elem}</div>)}
                </Transition>
            ))}
        </div>
    )
}

export default ScrollLine
