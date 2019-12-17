import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'
import Filter from './Filter'

const JugementDevet = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.3)

    const offset1 = {
        x: 0 + sx1,
        y: useNoise(40, 0.03) * 4 + sy1,
    }

    return (
        <Page>
            <Filter filter="grayscale(50%)" />
            <Image
                left={-5}
                bottom={-10}
                height={60}
                posOffset={offset1}
                src="jugement/devet.png"
            />
        </Page>
    )
})

export default JugementDevet
