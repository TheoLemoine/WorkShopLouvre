import React, { FunctionComponent } from 'react'
import { useScrollLine } from './ScrollLine'
import ScrollLineBarBall from './ScrollLineBarBall'

const ScrollLineBar: FunctionComponent = () => {
    const [state, dispatch] = useScrollLine()

    return (
        <div className="scroll-line-bar">
            <div className="scroll-line-bar-line" />
            <div className="scroll-line-bar-ball-container">
                {state.events.map(
                    (ev, index) =>
                        ev.show && (
                            <ScrollLineBarBall
                                isBig={state.currentEventId === index}
                                key={index}
                                onClick={() => dispatch({ type: 'SET', index })}
                            ></ScrollLineBarBall>
                        )
                )}
            </div>
        </div>
    )
}

export default ScrollLineBar
