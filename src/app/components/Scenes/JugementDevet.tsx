import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'
import Filter from './Filter'
import Popup from '../Popup/Popup'

// images

import devet from '../../assets/img/jugement/devet.png'
import tableau from '../../assets/img/jugement/ref1.jpg'

const JugementDevet = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.3)

    const offset1 = {
        x: 0 + sx1,
        y: useNoise(40, 0.03) * 4 + sy1,
    }

    return (
        <Page>
            <Filter filter="grayscale(50%)" />
            <Image left={-5} bottom={-10} height={60} posOffset={offset1} src={devet} />

            <Popup
                button={{
                    x: 16,
                    y: 75,
                    size: 140,
                }}
                sheet={{
                    x: 40,
                    y: 50,
                    width: 30,
                    height: 45,
                }}
            >
                <h2>Phryné dans l'Art</h2>
                L’histoire de Phryné a notamment inspiré de nombreux artistes, des peintres, des
                sculpteurs, un opéra, des romans, des poèmes…
                <img src={tableau} className="popup-img" style={{ marginTop: '1rem' }} />
            </Popup>
        </Page>
    )
})

export default JugementDevet
