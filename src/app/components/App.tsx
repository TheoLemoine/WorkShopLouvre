import React from 'react'

import ScrollLine from './ScrollLine/ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Home from './Scenes/Home'
import Presentation from './Scenes/Presentation'
import PresentationText from './Scenes/PresentationText'

const events: SceneEvent[] = [
    { in: ['homepage'], out: [], show: true, label: 'Home' },
    { in: ['pres'], out: ['homepage'], show: true, label: 'Présentation' },
    { in: ['pres-text'], out: ['pres'], show: false },
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
        id: 'homepage',
        component: Home,
        transitions: { ...slide },
        scrollable: false,
        arrow: true,
    },
    {
        id: 'pres',
        component: Presentation,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
    },
    {
        id: 'pres-text',
        component: PresentationText,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
    },
]

export default () => {
    return <ScrollLine scenes={scenes} events={events} />
}
