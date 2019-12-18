import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'
import Popup from '../Popup/Popup'

// images

import fond from '../../assets/img/02-fond.png'
import fresque1 from '../../assets/img/presentation/01-fresque.png'
import fresque2 from '../../assets/img/presentation/02-fresque.png'
import arche1 from '../../assets/img/presentation/01-arche.png'
import arche2 from '../../assets/img/presentation/02-arche.png'
import hyperide from '../../assets/img/presentation/Hyperide.png'
import phryne from '../../assets/img/presentation/Phryne.png'
import crapaux from '../../assets/img/presentation/crapaux.png'

const Presentation = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.3)
    const [x2, y2, sx2, sy2] = useMouseParalax(0.1)

    const offset1 = {
        x: 0 + sx2,
        y: useNoise(40, 0.03) * 12 + sy2,
    }

    return (
        <Page>
            <Image left={-20} top={-10} width={130} src={fond} />

            <Image left={0} top={20} width={50} src={fresque1} />
            <Image right={0} bottom={20} width={50} src={fresque2} />

            <Image left={20} top={15} height={50} posOffset={offset1} src={arche1} />
            <Image right={20} bottom={15} height={50} posOffset={offset1} src={arche2} />

            <Image left={22} bottom={5} height={70} posOffset={{ x: sx1, y: sy1 }} src={hyperide} />
            <Image
                right={22}
                bottom={-5}
                height={75}
                posOffset={{ x: sx1, y: sy1 }}
                src={phryne}
                style={{
                    filter: 'drop-shadow(0px 0px 15px rgba(159, 114, 75, 0.4))',
                }}
            />

            <Popup
                button={{
                    x: 65,
                    y: 28,
                    size: 120,
                }}
                sheet={{
                    x: 26,
                    y: 20,
                    width: 30,
                    height: 45,
                }}
            >
                <h2>Phryné</h2>
                Elle ne s’appelle pas Phryné, c’est un surnom qui signifie « Crapaud ». En fait,
                c’est parce qu’elle avait le teint un peu jaune. Son vrai nom c’est Mnésareté, qui
                signifie : qui se souvient de la vertu.
                <img src={crapaux} className="popup-img" />
            </Popup>
        </Page>
    )
})

export default Presentation
