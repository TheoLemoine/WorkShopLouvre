import React, { FunctionComponent, useRef } from 'react'
import { usePopup } from './Popup'
import { animated } from 'react-spring'

type PopupSheetProps = {
    x: number
    y: number
    width: number
    height: number
    transitionProps: any
}

const PopupSheet: FunctionComponent<PopupSheetProps> = ({
    x,
    y,
    width,
    height,
    transitionProps,
    children,
}) => {
    const [active, setActive] = usePopup()
    const containerRef = useRef<HTMLDivElement>()

    return (
        <div onClick={() => setActive(false)} className="popup-sheet-container" ref={containerRef}>
            <animated.div
                style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    ...transitionProps,
                }}
                className="popup-sheet"
                onClick={e => e.stopPropagation()}
                onWheel={e => e.stopPropagation()}
            >
                <div
                    style={
                        containerRef.current
                            ? {
                                  height: `calc(${containerRef.current.offsetHeight *
                                      (height / 100)}px - 1.3rem)`,
                                  width: `calc(${containerRef.current.offsetWidth *
                                      (width / 100)}px - 1.3rem)`,
                              }
                            : null
                    }
                >
                    {children}
                </div>
            </animated.div>
        </div>
    )
}

export default PopupSheet
