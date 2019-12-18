import React, {useState} from 'react'

import ScrollLine from './ScrollLine/ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Home from './Scenes/Home'
import Presentation from './Scenes/Presentation'
import PresentationText from './Scenes/PresentationText'
import Jugement from './Scenes/Jugement'
import JugementDevet from './Scenes/JugementDevet'
import JugementEnd from './Scenes/JugementEnd'
import JugementText from './Scenes/JugementText'
import JugementDevetText from './Scenes/JugementDevetText'
import JugementEndText from './Scenes/JugementEndText'
import MenuIcons from "./Menu/MenuIcons";
import Notice from "./Popin/Notice";

const events: SceneEvent[] = [
    { in: ['homepage'], out: [], show: false, label: 'Home' },

    { in: ['jugement-text'], out: ['homepage'], show: true, label: 'Jugement' },
    { in: ['jugement'], out: ['jugement-text'], show: false },

    { in: ['pres-text'], out: ['jugement'], show: true, label: 'Pryné et Hypéride' },
    { in: ['pres'], out: ['pres-text'], show: false },

    { in: ['jugement-devet-text'], out: ['pres'], show: true, label: 'Devant les juges' },
    { in: ['jugement'], out: ['jugement-devet-text'], show: false },
    { in: ['jugement-devet'], out: [], show: false },

    {
        in: ['jugement-end-text'],
        out: ['jugement', 'jugement-devet'],
        show: true,
        label: 'la Sentence',
    },
    { in: ['jugement-end'], out: ['jugement-end-text'], show: false },
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
        scrollable: true,
        arrow: false,
        line: false,
    },
    {
        id: 'pres',
        component: Presentation,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
        line: true,
    },
    {
        id: 'pres-text',
        component: PresentationText,
        transitions: { ...slide },
        scrollable: false,
        arrow: true,
        line: true,
    },
    {
        id: 'jugement',
        component: Jugement,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
        line: true,
    },
    {
        id: 'jugement-text',
        component: JugementText,
        transitions: { ...slide },
        scrollable: false,
        arrow: true,
        line: true,
    },
    {
        id: 'jugement-devet',
        component: JugementDevet,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
        line: true,
    },
    {
        id: 'jugement-devet-text',
        component: JugementDevetText,
        transitions: { ...slide },
        scrollable: false,
        arrow: true,
        line: true,
    },
    {
        id: 'jugement-end',
        component: JugementEnd,
        transitions: { ...slide },
        scrollable: false,
        arrow: false,
        line: true,
    },
    {
        id: 'jugement-end-text',
        component: JugementEndText,
        transitions: { ...slide },
        scrollable: false,
        arrow: true,
        line: true,
    },
]

export default () => {
    const [notice, setNotice] = useState(false)
    const menu = [{name:"?", click: () => setNotice(!notice)}]
    return (<>
        <ScrollLine scenes={scenes} events={events} />
        <MenuIcons menu={menu} className={notice ? ' active' : ''}/>
        {notice && <Notice />}
        </>
    )
}
