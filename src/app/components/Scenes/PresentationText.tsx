import React, { forwardRef } from 'react'
import TextPage from './Page/TextPage'

const PresentationText = forwardRef<HTMLElement>(() => {
    return (
        <TextPage>
            <strong>Hyperide</strong>, l'orateur qui defend <strong>Phryné</strong>, est un de ses
            amants, essaye de convaincre les juges de l'innocence de Phryné.
        </TextPage>
    )
})

export default PresentationText
