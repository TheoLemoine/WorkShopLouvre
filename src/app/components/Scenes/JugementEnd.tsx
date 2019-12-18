import React, { forwardRef } from 'react'
import Page from './Page/Page'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'
import useNoise from '../../helpers/useNoise'
import Popup from '../Popup/Popup'

const JugementEnd = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.3)

    const offset1 = {
        x: 0 + sx1,
        y: useNoise(40, 0.03) * 4 + sy1,
    }

    return (
        <Page>
            <Image left={-20} top={-10} width={130} src="02-fond.png" />
            <Image left={0} top={20} height={70} src="lesjuges/cadre.svg" />
            <Image
                left={25}
                bottom={-10}
                height={100}
                posOffset={offset1}
                src="lesjuges/lesjuges.png"
            />

            <Popup
                button={{
                    x: 55,
                    y: 31,
                    size: 200,
                }}
                sheet={{
                    x: 8,
                    y: 30,
                    width: 30,
                    height: 20,
                }}
            >
                <h2>L'Impiété</h2>
                Socrate et Anaxagoras furent tous deux condamnés à mort pour impiété (envers les
                dieux grecs), et Aristote en fut également accusé après la mort d'Alexandre le
                Grand.
            </Popup>
        </Page>
    )
})

export default JugementEnd
