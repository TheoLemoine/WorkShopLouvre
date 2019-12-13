import React, { FunctionComponent } from 'react'
import './pages.sass'
import Popup from '../Popup/Popup'

type PageProps = {
    position: { x: number; y: number } | null
    size: { width: number; height: number } | null
    children: any
}

const Page: FunctionComponent<PageProps> = ({
    position = { x: 0, y: 0 },
    size = { width: 100, height: 100 },
    children = null,
}) => (
    <div
        className="page"
        style={{
            left: position.x ? `${position.x}vw` : "auto",
            top: position.y ? `${position.y}vh` : "auto",
            width: size.width ? `${size.width}vw` : "auto",
            height: size.height ? `${size.height}vh` : "auto"
        }}
    >
        <div>
            <Popup button={{ x: 20, y: 20, size: 50 }} sheet={{ x: 23, y: 25, width: 20, height: 30 }}>
                <h1>Inside a popup</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in venenatis turpis,
                    aliquam consequat arcu. Maecenas vulputate lacus vel libero cursus, vitae vehicula
                    ex varius. Vivamus iaculis lacus sed venenatis posuere. Fusce dapibus hendrerit
                    mollis. Donec non blandit magna, vel consectetur ex. Suspendisse non ultricies
                    turpis. Donec tincidunt posuere convallis. Integer mauris velit, dignissim vitae
                    suscipit eget, faucibus ut nisl.
                </p>
            </Popup>
            {children}
        </div>
    </div>
)

export default Page
