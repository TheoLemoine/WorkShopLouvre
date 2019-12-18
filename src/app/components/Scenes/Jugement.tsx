import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'
import Popup from '../Popup/Popup'

const Jugement = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.2)

    const offset1 = {
        x: 0 + sx1,
        y: useNoise(40, 0.03) * 5 + sy1,
    }

    return (
        <Page>
            <Image left={0} top={0} width={100} src="01-fond.png" />
            <Image left={0} top={0} width={100} src="jugement/fond-trait.png" />
            <Image left={0} top={0} width={100} posOffset={offset1} src="jugement/lesjuges.png" />
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

                    <img src="app/assets/img/jugement/Areopagus.jpg" />
                </div>
            </Popup>
        </Page>
    )
})

export default Jugement
