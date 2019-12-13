import React, { FunctionComponent, SyntheticEvent, useRef } from 'react'
import { SceneElement } from '../../reducers/scrollLine'
import { Transition } from 'react-spring/renderprops'

import './scrollLine.sass'
import { useScrollLine } from './ScrollLine'

export type ScrollLineElementProps = { scene: SceneElement }

const ScrollLineElement: FunctionComponent<ScrollLineElementProps> = ({ scene }) => {
    const [state] = useScrollLine()

    const stopPropagation = (e: SyntheticEvent) => {
        console.dir(scrollerRef.current)
        if (
            scrollerRef.current &&
            scrollerRef.current.scrollTop <
                scrollerRef.current.scrollHeight - scrollerRef.current.offsetHeight
        )
            e.stopPropagation()
    }

    const scrollerRef = useRef<HTMLElement>(null)

    return (
        <Transition
            key={scene.id}
            items={state.currentScenesIds.find(id => id === scene.id)}
            {...scene.transitions}
        >
            {items =>
                items &&
                (props => (
                    <div
                        style={props}
                        onWheel={scene.scrollable ? stopPropagation : null}
                        key={scene.id}
                    >
                        {<scene.component ref={scrollerRef} />}
                    </div>
                ))
            }
        </Transition>
    )
}

export default ScrollLineElement
