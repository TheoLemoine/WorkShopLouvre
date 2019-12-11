import React, { useReducer, createContext, useContext, FunctionComponent, useEffect } from 'react'
import scrollLine, { SceneElement, State, SceneEvent } from '../reducers/scrollLine'

export const ScrollLineContext = createContext(null)

export type ScrollLineProviderProps = { scenes: SceneElement[]; events: SceneEvent[] }

export const ScrollLineProvider: FunctionComponent<ScrollLineProviderProps> = ({
    children,
    scenes,
    events,
}) => {
    const [state, dispatch] = useReducer(scrollLine, {
        currentEventId: -1,
        currentScenesIds: [],
        scenes,
        events,
    })

    useEffect(() => {
        dispatch({ type: 'NEXT' })
    }, [])

    return (
        <ScrollLineContext.Provider value={[state, dispatch]}>
            {children}
        </ScrollLineContext.Provider>
    )
}

export default (): [State, () => void, () => void, (index: number) => void] => {
    const [state, dispatch] = useContext(ScrollLineContext)

    return [
        state,
        () => dispatch({ type: 'NEXT' }),
        () => dispatch({ type: 'PREV' }),
        (index: number) => dispatch({ type: 'SET', index }),
    ]
}
