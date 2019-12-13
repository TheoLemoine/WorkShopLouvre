import React, { forwardRef } from 'react'
import Page from './Page'

const LastPage = forwardRef<HTMLElement>(() => (
    <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }}>
        <h1>Last full page</h1>
    </Page>
))

export default LastPage
