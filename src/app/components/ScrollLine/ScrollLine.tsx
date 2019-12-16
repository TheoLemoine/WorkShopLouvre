import React, {
    FunctionComponent,
    useRef,
    useEffect,
    useReducer,
    createContext,
    useContext,
    Dispatch,
    WheelEvent,
    useCallback,
} from 'react'
import TouchObserver from '../../helpers/touchObserver'

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

    const scrollIf = useCallback(
        (up: boolean, down: boolean) => {
            if (!isScrolling.current) {
                isScrolling.current = true

                if (down) dispatch({ type: 'NEXT' })
                else if (up) dispatch({ type: 'PREV' })

                scrollTimeout.current = window.setTimeout(() => (isScrolling.current = false), 600)
            }
        },
        [isScrolling, scrollTimeout, dispatch]
    )

    const handleScroll = (event: WheelEvent) => {
        scrollIf(event.deltaY < 0, event.deltaY > 0)
    }

    const { current: touchObserver } = useRef<TouchObserver>(new TouchObserver())

    touchObserver.addListener('dragUp', () => {
        scrollIf(true, false)
    })
    touchObserver.addListener('dragDown', () => {
        scrollIf(false, true)
    })

    return (
        <ScrollLineContext.Provider value={[state, dispatch]}>
            <div onWheel={handleScroll} {...touchObserver.reactBind()} className="scroll-line">
                {scenes.map(scene => (
                    <ScrollLineScene
                        scene={scene}
                        key={scene.id}
                        next={() => dispatch({ type: 'NEXT' })}
                    />
                ))}
            </div>
            <ScrollLineBar />
        </ScrollLineContext.Provider>
    )
}

export default ScrollLine
