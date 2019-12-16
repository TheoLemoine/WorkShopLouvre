import React, { forwardRef } from 'react'
import Page from './Page'
import useNoise from '../../helpers/useNoise'

const Home = forwardRef<HTMLElement>(() => {
    const noiseX = useNoise(25, 0.01)
    const noiseY = useNoise(25, 0.01)

    console.log(noiseX, noiseY)

    return (
        <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }}>
            <div id="one">
                <h1
                    className="title"
                    style={{
                        position: 'relative',
                        left: noiseX * 10,
                        top: noiseY * 10,
                    }}
                >
                    Phryné
                </h1>
                <div className="subtitle">L'incroyable procès d'une courtisane</div>
                <p className="text">
                    At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum
                    introieris, primitus tamquam exoptatus suscipieris et interrogatus multa
                    coactusque
                </p>
            </div>
        </Page>
    )
})

export default Home