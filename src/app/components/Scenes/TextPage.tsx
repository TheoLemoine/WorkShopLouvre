import React, { FunctionComponent } from 'react'
import Page from './Page'

const TextPage: FunctionComponent = ({ children }) => {
    return (
        <Page position={{ x: 0, y: 0 }} size={{ width: 1100, height: 800 }}>
            <div className="text-page">
                <img src="app/assets/img/motifs_grec/long.svg" className="text-page-motif" />
                <p className="text-page-text">{children}</p>
                <img src="app/assets/img/motifs_grec/short.svg" className="text-page-motif" />
            </div>
        </Page>
    )
}

export default TextPage
