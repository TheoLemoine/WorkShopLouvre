import React, { forwardRef } from 'react'
import TextPage from './Page/TextPage'

const JugementEndText = forwardRef<HTMLElement>(() => {
    return (
        <TextPage>
            Les juges sont pris de pitié et voit en sa beauté un don d'Aphrodite. Ils décident de
            l’acquitter.
        </TextPage>
    )
})

export default JugementEndText
