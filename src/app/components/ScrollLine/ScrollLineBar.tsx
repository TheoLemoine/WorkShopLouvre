import React, { FunctionComponent } from 'react'
import { useScrollLine } from './ScrollLine'
import ScrollLineBarBall from './ScrollLineBarBall'

const ScrollLineBar: FunctionComponent = () => {
    const [state, dispatch] = useScrollLine()

    return (
        <div className="scroll-line-bar">
            <div className="scroll-line-bar-line" />
            <div className="scroll-line-bar-elements">
                {state.events.map(
                    (ev, index) =>
                        ev.show && (
                            <ScrollLineBarBall
                                isBig={state.currentEventId === index}
                                label={ev.label || null}
                                key={index}
                                onClick={() => dispatch({ type: 'SET', index })}
                            ></ScrollLineBarBall>
                        )
                )}
                <div
                    className="scroll-line-bar-next"
                    onClick={() => dispatch({ type: 'NEXT' })}
                ></div>
            </div>
        </div>
    )
}

export default ScrollLineBar
