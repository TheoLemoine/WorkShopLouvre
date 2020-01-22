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
import Hammer from 'hammerjs'
import TouchObserver from '../../helpers/touchObserver'

import scrollLine, { SceneEvent, SceneElement, State, Action } from '../../reducers/scrollLine'
import ScrollLineBar from './ScrollLineBar'
import ScrollLineScene from './ScrollLineScene'

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

    useEffect(() => () => window.clearTimeout(scrollTimeout.current), [scrollTimeout])

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

    const scrollElem = useRef<HTMLDivElement>(null)
    const scrollHammer = useRef<HammerManager>(null)

    useEffect(() => {
        scrollHammer.current = new Hammer(scrollElem.current)
        scrollHammer.current.get('swipe').set({
            direction: Hammer.DIRECTION_VERTICAL,
        })
        scrollHammer.current.on('swipeup', () => scrollIf(false, true))
        scrollHammer.current.on('swipedown', () => scrollIf(true, false))
    })

    const displayLine =
        scenes
            .filter(sc => state.currentScenesIds.find(id => id === sc.id))
            .map(sc => (sc.line === null ? true : sc.line))
            .find(line => line) !== undefined

    return (
        <ScrollLineContext.Provider value={[state, dispatch]}>
            <div onWheel={handleScroll} ref={scrollElem} className="scroll-line">
                {scenes.map(scene => (
                    <ScrollLineScene
                        scene={scene}
                        key={scene.id}
                        next={() => dispatch({ type: 'NEXT' })}
                    />
                ))}
            </div>
            {displayLine && <ScrollLineBar />}
        </ScrollLineContext.Provider>
    )
}

export default ScrollLine
