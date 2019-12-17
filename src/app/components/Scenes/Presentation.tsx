import React, { forwardRef } from 'react'
import Page from './Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'

const Presentation = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.3)
    const [x2, y2, sx2, sy2] = useMouseParalax(0.1)

    const offset1 = {
        x: 0 + sx2,
        y: useNoise(40, 0.03) * 12 + sy2,
    }

    return (
        <Page position={{ x: 0, y: 0 }} size={{ width: 1100, height: 800 }}>
            <Image left={-20} top={-10} width={130} src="02-fond.png" />

            <Image left={0} top={20} width={50} src="presentation/01-fresque.png" />
            <Image right={0} bottom={20} width={50} src="presentation/02-fresque.png" />

            <Image
                left={20}
                top={15}
                height={50}
                posOffset={offset1}
                src="presentation/01-arche.png"
            />
            <Image
                right={20}
                bottom={15}
                height={50}
                posOffset={offset1}
                src="presentation/02-arche.png"
            />

            <Image
                left={22}
                bottom={5}
                height={70}
                posOffset={{ x: sx1, y: sy1 }}
                src="presentation/Hyperide.png"
            />
            <Image
                right={22}
                bottom={-5}
                height={75}
                posOffset={{ x: sx1, y: sy1 }}
                src="presentation/Phryne.png"
                style={{
                    filter: 'drop-shadow(0px 0px 15px rgba(159, 114, 75, 0.4))',
                }}
            />
        </Page>
    )
})

export default Presentation
