import React, { FunctionComponent } from 'react'
import Page from './Page'

// images
import long from '../../../assets/img/motifs_grec/long.svg'
import short from '../../../assets/img/motifs_grec/short.svg'

const TextPage: FunctionComponent = ({ children }) => {
    return (
        <Page>
            <div className="text-page">
                <img src={long} className="text-page-motif" />
                <p className="text-page-text">{children}</p>
                <img src={short} className="text-page-motif" />
            </div>
        </Page>
    )
}

export default TextPage
