import React, { forwardRef } from 'react'
import TextPage from './Page/TextPage'

const JugementEndText = forwardRef<HTMLElement>(() => {
    return (
        <TextPage>
            Les juges, voyant en sa beauté un don d'Aphrodite, se laissèrent gagner par la pitié et
            s’abstinrent de la mettre à la mort.
        </TextPage>
    )
})

export default JugementEndText
