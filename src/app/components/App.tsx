import React from 'react'

import ScrollLine from './ScrollLine/ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Home from './Scenes/Home'
import HalfPage1 from './Scenes/HalfPage1'
import HalfPage2 from './Scenes/HalfPage2'
import LastPage from './Scenes/LastPage'

const events: SceneEvent[] = [
    { in: ['1'], out: [], show: true, label: 'Home' },
    { in: ['2'], out: ['1'], show: false },
    { in: ['3'], out: [], show: false },
    { in: ['4'], out: ['2', '3'], show: true, label: 'Last Page' },
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
        scrollable: true,
        arrow: true
    },
    {
        id: '2',
        component: HalfPage1,
        transitions: { ...slide },
        scrollable: false,
        arrow: false
    },
    {
        id: '3',
        component: HalfPage2,
        transitions: { ...slide },
        scrollable: false,
        arrow: false
    },
    {
        id: '4',
        component: LastPage,
        transitions: { ...slide },
        scrollable: false,
        arrow: false
    },
]

export default () => {
    return <ScrollLine scenes={scenes} events={events} />
}
