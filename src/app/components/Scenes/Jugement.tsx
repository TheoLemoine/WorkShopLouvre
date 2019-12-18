import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'
import Popup from '../Popup/Popup'

// images

import fond from '../../assets/img/01-fond.png'
import fondTrait from '../../assets/img/jugement/fond-trait.png'
import lesJuges from '../../assets/img/jugement/lesjuges.png'
import areopagus from '../../assets/img/jugement/Areopagus.jpg'

const Jugement = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.2)

    const offset1 = {
        x: 0 + sx1,
        y: useNoise(40, 0.03) * 5 + sy1,
    }

    return (
        <Page>
            <Image left={0} top={0} width={100} src={fond} />
            <Image left={0} top={0} width={100} src={fondTrait} />
            <Image left={0} top={0} width={100} posOffset={offset1} src={lesJuges} />
            <Popup
                button={{
                    x: 30,
                    y: 40,
                    size: 120,
                }}
                sheet={{
                    x: 10,
                    y: 13,
                    width: 70,
                    height: 20,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            marginRight: '1rem',
                        }}
                    >
                        <h2>L'Aréopage</h2>
                        L’Aréopage est la « colline d'Arès » à Athènes. « Aréopage » est aussi le
                        nom porté depuis le xixe siècle par la Cour de cassation, organe judiciaire
                        suprême de Grèce.
                    </div>

                    <img src={areopagus} />
                </div>
            </Popup>
        </Page>
    )
})

export default Jugement
