import React, { forwardRef } from 'react'
import Page from './../Scenes/Page/Page'
import { useScrollLine } from '../ScrollLine/ScrollLine'
import Image from './Image'

// images

import phryne from '../../assets/img/home/home.png'

const Home = forwardRef<HTMLElement>(() => {
    const [state, dispatch] = useScrollLine()
    return (
        <Page size={{ width: 1100 }}>
            <div id="one" className="flex">
                <div>
                    <div className="bg">
                        <Image src={phryne} style={{ position: 'relative', height: '100vh' }} />
                    </div>
                </div>
                <div>
                    <h1 className="title">Phryné</h1>
                    <div className="subtitle">L'incroyable procès d'une courtisane</div>
                    <div className="btn" onClick={() => dispatch({ type: 'NEXT' })}>
                        Démarrer l'expérience
                    </div>
                </div>
            </div>
        </Page>
    )
})

export default Home
