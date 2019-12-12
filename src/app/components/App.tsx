import React from 'react'
import ScrollLine from './ScrollLine/ScrollLine'
import { SceneElement, SceneEvent } from '../reducers/scrollLine'
import Page from './Scenes/Page'
import { Parallax } from 'react-scroll-parallax/cjs'
import Svg from './Svg/Svg'
import ring from '../assets/img/ring-of-dots.svg'
import hemispheres from '../assets/img/hemispheres.svg'

const events: SceneEvent[] = [
    { in: ['1'], out: [], show: true },
    { in: ['2'], out: ['1'], show: false },
    { in: ['3'], out: [], show: false },
    { in: ['4'], out: ['2', '3'], show: true },
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
    },
}

const scenes: SceneElement[] = [
    {
        id: '1',
        elem: (
            <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }}>
                <div className="app">
                    <div className="container">
                        <Parallax y={[-20, 20]} className="ring">
                            <Svg svg={ring} />
                        </Parallax>
                        <Parallax y={[-50, 20]} className="circle">
                            <div className="circleInner" />
                        </Parallax>
                        <Svg className="hemispheres" svg={hemispheres} />
                    </div>
                    <p className="scroll">Scroll</p>
                    <div className="container">
                        <Parallax y={[-20, 20]} className="ring">
                            <Svg svg={ring} />
                        </Parallax>
                        <Parallax y={[-50, 20]} className="circle">
                            <div className="circleInner" />
                        </Parallax>
                        <Svg className="hemispheres" svg={hemispheres} />
                    </div>
                    <div className="container">
                        <Parallax y={[-20, 20]} className="ring">
                            <Svg svg={ring} />
                        </Parallax>
                        <Parallax y={[-50, 20]} className="circle">
                            <div className="circleInner" />
                        </Parallax>
                        <Svg className="hemispheres" svg={hemispheres} />
                    </div>
                    <div className="container">
                        <Parallax y={[-20, 20]} className="ring">
                            <Svg svg={ring} />
                        </Parallax>
                        <Parallax y={[-50, 20]} className="circle">
                            <div className="circleInner" />
                        </Parallax>
                        <Svg className="hemispheres" svg={hemispheres} />
                    </div>
                </div>
            </Page>
        ),
        transitions: { ...slide },
    },
    {
        id: '2',
        elem: (
            <Page position={{ x: 0, y: 5 }} size={{ width: 100, height: 40 }}>
                <h1>A half page</h1>
            </Page>
        ),
        transitions: { ...slide },
    },
    {
        id: '3',
        elem: (
            <Page position={{ x: 0, y: 50 }} size={{ width: 100, height: 40 }}>
                <h1>A other half page</h1>
            </Page>
        ),
        transitions: { ...slide },
    },
    {
        id: '4',
        elem: (
            <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }}>
                <h1>Last full page</h1>
            </Page>
        ),
        transitions: { ...slide },
    },
]

export default () => {
    return <ScrollLine scenes={scenes} events={events} />
}
