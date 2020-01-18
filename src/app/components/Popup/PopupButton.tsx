import React, { FunctionComponent } from 'react'
import { usePopup } from './Popup'

type PopupButtonProps = {
    x: number
    reverseX: boolean
    y: number
    reverseY: boolean
    size: number
}

const PopupButton: FunctionComponent<PopupButtonProps> = ({ x, reverseX = false, reverseY= false, y,size }) => {
    const [active, setActive] = usePopup()

    return (
        <div
            style={{
                top: !reverseY ? `${y}%` : 'auto',
                bottom: reverseY ? `${y}%` : 'auto',
                left: !reverseX ? `${x}%` : 'auto',
                right: reverseX ? `${x}%` : 'auto',
                height: `${size}px`,
                width: `${size}px`,
            }}
            className="popup-button"
            onClick={() => setActive((active: boolean) => !active)}
        />
    )
}

export default PopupButton
