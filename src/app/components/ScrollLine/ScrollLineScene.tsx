import React, { FunctionComponent, SyntheticEvent, useRef } from 'react'
import { SceneElement } from '../../reducers/scrollLine'
import { Transition } from 'react-spring/renderprops'

import {ScrollLineContext, useScrollLine} from './ScrollLine'
import Arrow from '../Arrow/Arrow'
import ScrollLineBar from "./ScrollLineBar";

export type ScrollLineElementProps = { scene: SceneElement; next(): void }

const ScrollLineElement: FunctionComponent<ScrollLineElementProps> = ({ scene, next }) => {
    const [state] = useScrollLine()

    const stopPropagation = (e: SyntheticEvent) => {
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
                        {scene.arrow ? <Arrow next={next} /> : null}
                        {scene.line ? <ScrollLineBar /> : null}
                    </div>
                ))
            }
        </Transition>
    )
}

export default ScrollLineElement
