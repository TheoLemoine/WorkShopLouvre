import React, { FunctionComponent } from 'react'
import { useSpring, animated } from 'react-spring'

type ScrollLineBarBallProps = { isBig: boolean; onClick: () => void }

const ScrollLineBarBall: FunctionComponent<ScrollLineBarBallProps> = ({ isBig, onClick }) => {
    const size = isBig ? 70 : 30

    const props = useSpring({
        width: isBig ? `${size}px` : `${size}px`,
        height: isBig ? `${size}px` : `${size}px`,
        transform: `translate3d(${isBig ? `${-size / 2}px` : `${-size / 2}px`})`,
    })

    return (
        <animated.div
            style={props}
            className="scroll-line-bar-ball"
            onClick={onClick}
        ></animated.div>
    )
}

export default ScrollLineBarBall
