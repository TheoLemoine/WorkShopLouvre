import React, { FunctionComponent } from 'react'
import Page from './Page'

const TextPage: FunctionComponent = ({ children }) => {
    return (
        <Page>
            <div className="text-page">
                <img src="app/assets/img/motifs_grec/long.svg" className="text-page-motif" />
                <p className="text-page-text">{children}</p>
                <img src="app/assets/img/motifs_grec/short.svg" className="text-page-motif" />
            </div>
        </Page>
    )
}

export default TextPage
