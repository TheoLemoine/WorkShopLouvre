import React, { forwardRef } from 'react'
import Page from './Page'

const Home = forwardRef<HTMLElement>(({}, ref) => (
    <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }}>
        <div id="one">
            <h1 className="title">Phryné</h1>
            <div className="subtitle">L'incroyable procès d'une courtisane</div>
            <p className="text">
                At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum introieris, primitus tamquam exoptatus suscipieris et interrogatus multa coactusque
            </p>
        </div>
    </Page>
))

export default Home
