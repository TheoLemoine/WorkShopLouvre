import React, { FunctionComponent, useState } from 'react'
import { useSpring, animated } from 'react-spring'

type ScrollLineBarBallProps = { isBig: boolean; label: string; onClick: () => void }

const ScrollLineBarBall: FunctionComponent<ScrollLineBarBallProps> = ({
    isBig,
    label,
    onClick,
}) => {
    const size = isBig ? 40 : 30

    const props = useSpring({
        width: isBig ? `${size}px` : `${size}px`,
        height: isBig ? `${size}px` : `${size}px`,
        transform: `translate3d(${isBig ? `${-size / 2}px` : `${-size / 2}px`})`,
    })

    const [Hovered, setHovered] = useState(false)

    const labelProps = useSpring({
        opacity: Hovered ? 1 : 0,
    })

    return (
        <div className="scroll-line-bar-element">
            {label && (
                <animated.div style={labelProps} className="scroll-line-bar-label">
                    {label}
                </animated.div>
            )}
            <div className="scroll-line-bar-ball-container">
                <animated.div
                    style={props}
                    className="scroll-line-bar-ball"
                    onClick={onClick}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                ></animated.div>
            </div>
        </div>
    )
}

export default ScrollLineBarBall
