import React, { FunctionComponent, CSSProperties } from 'react'

type ImageProps = {
    top?: number
    left?: number
    bottom?: number
    right?: number
    width?: number
    height?: number
    src: string
    alt?: string
    style?: CSSProperties
    posOffset?: {
        x: number
        y: number
    }
}

const Image: FunctionComponent<ImageProps> = ({
    top,
    left,
    bottom,
    right,
    width,
    height,
    src,
    alt = '',
    style,
    posOffset = { x: 0, y: 0 },
}) => (
    <img
        src={`app/assets/img/${src}`}
        alt={alt}
        style={{
            position: 'absolute',
            top: top !== null ? `calc(${top}% + ${posOffset.y}px)` : 'unset',
            left: left !== null ? `calc(${left}% + ${posOffset.x}px)` : 'unset',
            bottom: bottom !== null ? `calc(${bottom}% - ${posOffset.y}px)` : 'unset',
            right: right !== null ? `calc(${right}% - ${posOffset.x}px)` : 'unset',
            maxWidth: width !== null ? `${width}%` : 'auto',
            maxHeight: height !== null ? `${height}%` : 'auto',
            ...style,
        }}
    />
)

export default Image
