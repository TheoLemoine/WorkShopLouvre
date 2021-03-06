import {
    FunctionComponent,
    RefForwardingComponent,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react'
import createReducer from '../helpers/createReducer'

// actions
export type NextAction = {
    type: 'NEXT'
}

export type PrevAction = {
    type: 'PREV'
}

export type SetAction = {
    type: 'SET'
    index: number
}

export type Action = SetAction | PrevAction | NextAction

// state
export type SceneElement = {
    id: string
    component: ForwardRefExoticComponent<RefAttributes<HTMLElement>>
    transitions: any
    scrollable: boolean
    arrow: boolean
    line?: boolean
}

export type SceneEvent = {
    out: string[]
    in: string[]
    show: boolean
    label?: string
}

export type State = {
    currentEventId: number
    currentScenesIds: string[]
    scenes: SceneElement[]
    events: SceneEvent[]
}

const reducer = {
    NEXT(state: State): State {
        const nextEventId = state.currentEventId + 1
        if (nextEventId > state.events.length - 1)
            return {
                ...state,
                currentScenesIds: state.events[0].in,
                currentEventId: 0,
            }

        const event = state.events[nextEventId]
        const newSceneIds = [
            ...state.currentScenesIds.filter(id => !event.out.find(outId => outId === id)),
            ...event.in,
        ]

        return {
            ...state,
            currentScenesIds: newSceneIds,
            currentEventId: nextEventId,
        }
    },
    PREV(state: State): State {
        const prevEventId = state.currentEventId - 1
        if (prevEventId < 0) return { ...state }

        const event = state.events[state.currentEventId]
        const newSceneIds = [
            ...state.currentScenesIds.filter(id => !event.in.find(inId => inId === id)),
            ...event.out,
        ]

        return {
            ...state,
            currentScenesIds: newSceneIds,
            currentEventId: prevEventId,
        }
    },
    SET(state: State, action: SetAction): State {
        const newEventId = Math.min(Math.max(action.index, 0), state.scenes.length)
        const event = state.events[newEventId]

        return {
            ...state,
            currentScenesIds: event.in,
            currentEventId: newEventId,
        }
    },
}

export default createReducer<State>(new Map(Object.entries(reducer)))
