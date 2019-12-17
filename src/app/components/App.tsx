import React from 'react'

import ScrollLine from './ScrollLine/ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Home from './Scenes/Home'
import Presentation from './Scenes/Presentation'
import PresentationText from './Scenes/PresentationText'
import Jugement from './Scenes/Jugement'
import JugementDevet from './Scenes/JugementDevet'
import JugementEnd from './Scenes/JugementEnd'

const events: SceneEvent[] = [
    { in: ['homepage'], out: [], show: true, label: 'Home' },
    { in: ['pres'], out: ['homepage'], show: true, label: 'Présentation' },
    { in: ['pres-text'], out: ['pres'], show: false },
    { in: ['jugement'], out: ['pres-text'], show: true, label: 'le Jugement' },
    { in: ['jugement-devet'], out: [], show: false },
    { in: ['jugement-end'], out: ['jugement', 'jugement-devet'], show: true, label: 'la Sentence' },
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
        arrow: true,
    },
    {
        id: 'jugement',
        component: Jugement,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
    },
    {
        id: 'jugement-devet',
        component: JugementDevet,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
    },
    {
        id: 'jugement-end',
        component: JugementEnd,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
    },
]

export default () => {
    return <ScrollLine scenes={scenes} events={events} />
}
