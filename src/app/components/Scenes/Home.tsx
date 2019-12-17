import React, {forwardRef} from 'react'
import Page from './../Scenes/Page/Page'
import useNoise from '../../helpers/useNoise'
import phryne from '../../assets/img/home/phryne.svg'
import Svg from "../Svg/Svg";

const Home = forwardRef<HTMLElement>(() => {
    return (
        <Page size={{width: 1100}}>
            <div id="one" className="flex">
                <div>
                    <div className="bg">
                        <Svg svg={phryne}/>
                    </div>
                </div>
                <div>
                    <h1
                        className="title"
                    >
                        Phryné
                    </h1>
                    <div className="subtitle">L'incroyable procès d'une courtisane</div>
                    <div className="btn">Démarrer l'expérience</div>
                </div>
            </div>
        </Page>
    )
})

export default Home
