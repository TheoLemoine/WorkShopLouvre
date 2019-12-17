import React, { forwardRef } from 'react'
import Page from './Page'
import useNoise from '../../helpers/useNoise'
import useSine from '../../helpers/useSine'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'

const Presentation = forwardRef<HTMLElement>(() => {
    const [x1, y1] = useMouseParalax(0.3)
    const [x2, y2] = useMouseParalax(0.1)

    const offset1 = {
        x: 0 + x2,
        y: useSine(40) * 3 + y2,
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
                bottom={-2}
                height={70}
                posOffset={{ x: x1, y: y1 }}
                src="presentation/Hyperide.png"
            />
            <Image
                right={22}
                bottom={-15}
                height={75}
                posOffset={{ x: x1, y: y1 }}
                src="presentation/Phryne.png"
            />
        </Page>
    )
})

export default Presentation
