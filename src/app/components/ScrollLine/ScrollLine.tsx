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
import { Transition } from 'react-spring/renderprops'
import ScrollLineBar from './ScrollLineBar'

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

            console.log(document.getElementById('scroll').clientHeight)
            console.log(document.getElementById('scroll').clientHeight - window.screen.height)

            if (event.deltaY > 0 && window.scrollY > document.getElementById('scroll').clientHeight - window.screen.height) dispatch({ type: 'NEXT' })
            else if (event.deltaY < 0 && window.scrollY <= 0) dispatch({ type: 'PREV' })

            scrollTimeout.current = window.setTimeout(() => (isScrolling.current = false), 600)
        }
    }

    return (
        <ScrollLineContext.Provider value={[state, dispatch]}>
            <div onWheel={handleScroll} id="scroll" className="scroll-line">
                {scenes.map(scene => (
                    <Transition
                        key={scene.id}
                        items={state.currentScenesIds.find(id => id === scene.id)}
                        {...scene.transitions}
                    >
                        {display => display && (props => <div style={props}>{scene.elem}</div>)}
                    </Transition>
                ))}
            </div>
            <ScrollLineBar />
        </ScrollLineContext.Provider>
    )
}

export default ScrollLine
