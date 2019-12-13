import React, { FunctionComponent } from 'react'
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

    return (
        <div onClick={() => setActive(false)} className="popup-sheet-container">
            <animated.div
                style={{
                    top: `${y}vh`,
                    left: `${x}vw`,
                    ...transitionProps,
                }}
                className="popup-sheet"
                onClick={e => e.stopPropagation()}
                onWheel={e => e.stopPropagation()}
            >
                <div
                    style={{
                        height: `${height - 1}vh`,
                        width: `${width - 1}vw`,
                    }}
                >
                    {children}
                </div>
            </animated.div>
        </div>
    )
}

export default PopupSheet
