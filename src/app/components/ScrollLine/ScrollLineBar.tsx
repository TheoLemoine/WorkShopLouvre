import React, { FunctionComponent } from 'react'
import { useScrollLine } from './ScrollLine'
import ScrollLineBarBall from './ScrollLineBarBall'

const ScrollLineBar: FunctionComponent = () => {
    const [state, dispatch] = useScrollLine()

    const toShow = state.scenes.filter(sc => sc.showInSideBar)

    return (
        <div className="scroll-line-bar">
            <div className="scroll-line-bar-line" />
            <div className="scroll-line-bar-ball-container">
                {toShow.map(sc => (
                    <ScrollLineBarBall
                        isBig={state.currentScenesIds.find(id => id === sc.id) !== undefined}
                        key={sc.id}
                    ></ScrollLineBarBall>
                ))}
            </div>
        </div>
    )
}

export default ScrollLineBar
