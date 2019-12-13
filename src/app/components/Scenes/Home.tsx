import React, { forwardRef } from 'react'
import Page from './Page'
import { Parallax } from 'react-scroll-parallax'
import Svg from '../Svg/Svg'
import Popup from '../Popup/Popup'
import hemispheres from '../../assets/img/hemispheres.svg'

const Home = forwardRef<HTMLElement>(({}, ref) => (
    <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }} ref={ref}>
        <Popup button={{ x: 20, y: 20, size: 50 }} sheet={{ x: 23, y: 25, width: 20, height: 30 }}>
            <h1>Inside a popup</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in venenatis turpis,
                aliquam consequat arcu. Maecenas vulputate lacus vel libero cursus, vitae vehicula
                ex varius. Vivamus iaculis lacus sed venenatis posuere. Fusce dapibus hendrerit
                mollis. Donec non blandit magna, vel consectetur ex. Suspendisse non ultricies
                turpis. Donec tincidunt posuere convallis. Integer mauris velit, dignissim vitae
                suscipit eget, faucibus ut nisl.
            </p>
        </Popup>
        <div className="app">
            <div className="container">
                <Parallax y={[-50, 20]} className="circle">
                    <div className="circleInner" />
                </Parallax>
                <Svg className="hemispheres" svg={hemispheres} />
            </div>
            <p className="scroll">Scroll</p>
            <div className="container">
                <Parallax y={[-50, 20]} className="circle">
                    <div className="circleInner" />
                </Parallax>
                <Svg className="hemispheres" svg={hemispheres} />
            </div>
            <div className="container">
                <Parallax y={[-50, 20]} className="circle">
                    <div className="circleInner" />
                </Parallax>
                <Svg className="hemispheres" svg={hemispheres} />
            </div>
            <div className="container">
                <Parallax y={[-50, 20]} className="circle">
                    <div className="circleInner" />
                </Parallax>
                <Svg className="hemispheres" svg={hemispheres} />
            </div>
        </div>
    </Page>
))

export default Home
