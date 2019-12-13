import React, {
    FunctionComponent,
    useRef,
    useEffect,
    useReducer,
    createContext,
    useContext,
    Dispatch,
} from 'react'

import scrollLine, { SceneEvent, SceneElement, State, Action } from '../../reducers/scrollLine'
import ScrollLineBar from './ScrollLineBar'
import ScrollLineScene from './ScrollLineScene'

import './scrollLine.sass'

export type ScrollLineProps = { scenes: SceneElement[]; events: SceneEvent[] }
export type ScrollLineContextValue = [State, Dispatch<Action>]

export const ScrollLineContext = createContext<ScrollLineContextValue>(null)

export const useScrollLine = () => {
    return useContext(ScrollLineContext)
}

const ScrollLine: FunctionComponent<ScrollLineProps> = ({ scenes, events }) => {
    const [state, dispatch] = useReducer(scrollLine, {
        currentEventId: -1,
        currentScenesIds: [],
        scenes,
        events,
    })

    useEffect(() => {
        dispatch({ type: 'NEXT' })
    }, [])

    let isScrolling = useRef<boolean>(false)
    let scrollTimeout = useRef<number | null>(null)

    useEffect(() => {
        return () => {
            window.clearTimeout(scrollTimeout.current)
        }
    }, [scrollTimeout])

    const handleScroll = (event: any) => {
        if (!isScrolling.current) {
            isScrolling.current = true

            if (
                event.deltaY > 0 &&
                window.scrollY >
                    document.getElementById('scroll').clientHeight - window.screen.height
            )
                dispatch({ type: 'NEXT' })
            else if (event.deltaY < 0 && window.scrollY <= 0) dispatch({ type: 'PREV' })

            scrollTimeout.current = window.setTimeout(() => (isScrolling.current = false), 600)
        }
    }

    return (
        <ScrollLineContext.Provider value={[state, dispatch]}>
            <div onWheel={handleScroll} id="scroll" className="scroll-line">
                {scenes.map(scene => (
                    <ScrollLineScene scene={scene} key={scene.id} />
                ))}
            </div>
            <ScrollLineBar />
        </ScrollLineContext.Provider>
    )
}

export default ScrollLine
