import React, { forwardRef } from 'react'
import Page from './Page'
import Popup from '../Popup/Popup'

const HalfPage2 = forwardRef<HTMLElement>(() => (
    <Page position={{ x: 0, y: 10 }} size={{ width: 100, height: 40 }}>
        <Popup button={{ x: 20, y: 20, size: 50 }} sheet={{ x: 23, y: 25, width: 20, height: 30 }}>
            <h1>Inside another popup</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in venenatis turpis,
                aliquam consequat arcu. Maecenas vulputate lacus vel libero cursus, vitae vehicula
                ex varius. Vivamus iaculis lacus sed venenatis posuere. Fusce dapibus hendrerit
                mollis. Donec non blandit magna, vel consectetur ex. Suspendisse non ultricies
                turpis. Donec tincidunt posuere convallis. Integer mauris velit, dignissim vitae
                suscipit eget, faucibus ut nisl.
            </p>
        </Popup>
        <h1>A other half page</h1>
    </Page>
))

export default HalfPage2
