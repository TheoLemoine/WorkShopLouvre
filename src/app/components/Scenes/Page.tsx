import React, { FunctionComponent } from 'react'
import './pages.sass'

type PageProps = {
    position: { x: number; y: number } | null
    size: { width: number; height: number } | null
    text: string | null
}

const Page: FunctionComponent<PageProps> = ({
    position = { x: 0, y: 0 },
    size = { width: 100, height: 100 },
    text = '',
}) => (
    <div
        className="page"
        style={{
            left: `${position.x}vw`,
            top: `${position.y}vh`,
            width: `${size.width}vw`,
            height: `${size.height}vh`,
        }}
    >
        <h1>{text}</h1>
    </div>
)

export default Page
