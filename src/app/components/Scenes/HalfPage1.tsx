import React, { FunctionComponent } from 'react'
import Page from './Page'

const HalfPage1: FunctionComponent = () => (
    <Page position={{ x: 0, y: 5 }} size={{ width: 100, height: 40 }}>
        <h1>A half page</h1>
    </Page>
)

export default HalfPage1
