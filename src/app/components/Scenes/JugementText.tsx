import React, { forwardRef } from 'react'
import TextPage from './Page/TextPage'

const JugementText = forwardRef<HTMLElement>(() => {
    return (
        <TextPage>
            Accusée d'impiété par Euthias,<strong> Phryné</strong> est amené devant
            <strong> l’aéropage</strong> composé des juges qui vont décider de son sort.
        </TextPage>
    )
})

export default JugementText
