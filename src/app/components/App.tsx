import React from 'react'

import ScrollLine from './ScrollLine/ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Home from './Scenes/Home'
import Presentation from './Scenes/Presentation'

const events: SceneEvent[] = [
    { in: ['1'], out: [], show: true, label: 'Home' },
    { in: ['2'], out: ['1'], show: true, label: 'Présentation' },
]

const slide = {
    from: {
        transform: 'translate3d(0, 150px, 0)',
        opacity: 0,
    },
    enter: {
        transform: 'translate3d(0, 0px, 0)',
        opacity: 1,
    },
    leave: {
        transform: 'translate3d(0, -150px, 0)',
        opacity: 0,
        display: 'none',
    },
}

const scenes: SceneElement[] = [
    {
        id: '1',
        component: Home,
        transitions: { ...slide },
        scrollable: false,
        arrow: true,
    },
    {
        id: '2',
        component: Presentation,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
    },
]

export default () => {
    return <ScrollLine scenes={scenes} events={events} />
}
