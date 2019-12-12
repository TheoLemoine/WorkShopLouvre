import React, { FunctionComponent } from 'react'
import { usePopup } from './Popup'

type PopupButtonProps = {
    x: number
    y: number
    size: number
}

const PopupButton: FunctionComponent<PopupButtonProps> = ({ x, y, size }) => {
    const [active, setActive] = usePopup()

    return (
        <div
            style={{
                top: `${y}vh`,
                left: `${x}vw`,
                height: `${size}px`,
                width: `${size}px`,
            }}
            className="popup-button"
            onClick={() => setActive((active: boolean) => !active)}
        />
    )
}

export default PopupButton
