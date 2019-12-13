import React, { forwardRef, useRef } from 'react'
import './pages.sass'
import { ParallaxProvider } from 'react-scroll-parallax'

type PageProps = {
    position?: { x?: number; y?: number } | null
    size?: { width?: number; height?: number } | null
    children: any
}

const Page = forwardRef<HTMLElement, PageProps>(
    ({ position = { x: 0, y: 0 }, size = { width: 100, height: 100 }, children = null }, ref) => {
        const scrollRef = useRef<HTMLElement>(null)

        if (ref) (ref as any).current = scrollRef.current

        return (
            <div
                className="page"
                style={{
                    left: position.x ? `${position.x}vw` : 'auto',
                    top: position.y ? `${position.y}vh` : 'auto',
                    width: size.width ? `${size.width}vw` : 'auto',
                    height: size.height ? `${size.height}vh` : 'auto',
                }}
                ref={scrollRef}
            >
                <ParallaxProvider scrollContainer={scrollRef.current}>{children}</ParallaxProvider>
            </div>
        )
    }
)

export default Page
