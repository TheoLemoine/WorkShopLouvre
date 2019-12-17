import React, { forwardRef } from 'react'
import TextPage from './TextPage'

const PresentationText = forwardRef<HTMLElement>(() => {
    return (
        <TextPage>
            <strong>Hypéride,</strong> l'avocat de <strong>Phryné,</strong> n'ayant pas réussi à
            émouvoir les juges et se doutant qu'ils allaient la condamner, décida de la mettre bien
            en vue, déchira sa tunique et dévoila sa poitrine à tout le monde.
        </TextPage>
    )
})

export default PresentationText
