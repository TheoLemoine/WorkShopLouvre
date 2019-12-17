import React, { forwardRef } from 'react'
import TextPage from './Page/TextPage'

const PresentationText = forwardRef<HTMLElement>(() => {
    return (
        <TextPage>
            <strong>Hypéride</strong> l’avocat de <strong>Phryné</strong>, la défend face aux juges.
        </TextPage>
    )
})

export default PresentationText
