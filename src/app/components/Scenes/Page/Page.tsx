import React, { forwardRef, useRef, MutableRefObject } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

type PageProps = {
    id?: string | null
    size?: { width?: number; height?: number } | null
    children: any
}

const Page = forwardRef<HTMLElement, PageProps>(
    ({ size = { width: 1100, height: 800 }, children = null }, ref) => {
        const scrollRef = useRef<HTMLElement>(null)

        if (ref) (ref as any).current = scrollRef.current

        return (
            <div
                className="page"
                style={{
                    position: 'absolute',
                    top: `calc(50% - ${size.height / 2}px`,
                    left: `calc(50% - ${size.width / 2}px`,
                    width: size.width,
                    height: size.height,
                }}
                ref={scrollRef as MutableRefObject<HTMLDivElement>}
            >
                <ParallaxProvider scrollContainer={scrollRef.current}>{children}</ParallaxProvider>
            </div>
        )
    }
)

export default Page
