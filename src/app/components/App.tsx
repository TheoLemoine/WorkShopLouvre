import React from 'react'
import { ScrollLineProvider } from '../hooks/useScrollLine'
import ScrollLine from './ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Page from './Scenes/Page'

const events: SceneEvent[] = [
    { in: ['1'], out: [] },
    { in: ['2'], out: ['1'] },
    { in: ['3'], out: [] },
    { in: ['4'], out: ['2', '3'] },
]

const slide = {
    from: {
        transform: 'translate3d(0, -150px, 0)',
        opacity: 0,
    },
    enter: {
        transform: 'translate3d(0, 0px, 0)',
        opacity: 1,
    },
    leave: {
        transform: 'translate3d(0, 150px, 0)',
        opacity: 0,
    },
}

const scenes: SceneElement[] = [
    {
        id: '1',
        elem: (
            <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }} text="A full page" />
        ),
        transitions: { ...slide },
    },
    {
        id: '2',
        elem: (
            <Page position={{ x: 0, y: 5 }} size={{ width: 100, height: 40 }} text="A half page" />
        ),
        transitions: { ...slide },
    },
    {
        id: '3',
        elem: (
            <Page
                position={{ x: 0, y: 50 }}
                size={{ width: 100, height: 40 }}
                text="the other half"
            />
        ),
        transitions: { ...slide },
    },
    {
        id: '4',
        elem: (
            <Page
                position={{ x: 0, y: 0 }}
                size={{ width: 100, height: 100 }}
                text="A last full page"
            />
        ),
        transitions: { ...slide },
    },
]

export default () => {
    return (
        <ScrollLineProvider scenes={scenes} events={events}>
            <ScrollLine />
        </ScrollLineProvider>
    )
}
