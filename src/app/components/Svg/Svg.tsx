import React, { FunctionComponent, CSSProperties } from 'react'
import {} from 'react-dom'

type SvgProps = {
    className?: string
    style?: CSSProperties
    svg: string
}

const Svg: FunctionComponent<SvgProps> = ({ className = '', style = {}, svg }) => (
    <span className={`svg${className}`} style={style} dangerouslySetInnerHTML={{ __html: svg }} />
)

export default Svg
