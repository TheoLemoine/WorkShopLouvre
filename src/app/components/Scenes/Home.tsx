import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'

const Home = forwardRef<HTMLElement>(() => {
    const noiseX = useNoise(25, 0.01)
    const noiseY = useNoise(25, 0.01)

    return (
        <Page>
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
