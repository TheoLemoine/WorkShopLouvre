import React, {forwardRef} from 'react'
import Page from './../Scenes/Page/Page'
import useNoise from '../../helpers/useNoise'
import phryne from '../../assets/img/home/phryne.svg'
import Svg from "../Svg/Svg";
import useMouseParalax from "../../helpers/useMouseParalax";

const Home = forwardRef<HTMLElement>(() => {
    const [x, y] = useMouseParalax(0.1)

    const offset = {
        x: 0 + x,
        y: useNoise(40, 0.03) * 12 + y,
    }
    return (
        <Page size={{width: 1100}}>
            <div id="one" className="flex">
                <div>
                    <div className="bg">
                        <Svg svg={phryne} style={{
                            position: 'relative',
                            top:`${offset.y}px)`,
                            left: `${offset.x}px)`,
                            bottom: `-${offset.y}px)`,
                            right: `-${offset.x}px)`
                        }}/>
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
