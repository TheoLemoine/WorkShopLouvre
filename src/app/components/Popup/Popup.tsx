import React, {
    FunctionComponent,
    useState,
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
} from 'react'
import { useTransition } from 'react-spring'

import PopupButton from './PopupButton'
import PopupSheet from './PopupSheet'

type PopupProps = {
    button: {
        x: number
        reverseX: boolean
        y: number
        reverseY: boolean
        size: number
    }
    sheet: {
        x: number
        y: number
        width: number
        height: number
    }
}

type PopupContextType = [boolean, Dispatch<SetStateAction<boolean>>]
export const PopupContext = createContext<PopupContextType>(null)

export const usePopup = () => {
    return useContext(PopupContext)
}

const Popup: FunctionComponent<PopupProps> = ({ button, sheet, children }) => {
    const [active, setActive] = useState(false)

    const transition = useTransition(active, null, {
        from: {
            opacity: 0,
            width: '0%',
            height: '0%',
        },
        enter: {
            opacity: 1,
            width: `${sheet.width}%`,
            height: `${sheet.height}%`,
        },
        leave: {
            opacity: 0,
            width: '0%',
            height: '0%',
        },
    })

    return (
        <PopupContext.Provider value={[active, setActive]}>
            <PopupButton {...button} />
            {transition.map(
                ({ item, key, props }) =>
                    item && (
                        <PopupSheet {...sheet} transitionProps={props} key={key}>
                            {children}
                        </PopupSheet>
                    )
            )}
        </PopupContext.Provider>
    )
}

export default Popup
