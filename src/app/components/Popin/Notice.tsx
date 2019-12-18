import React, {FunctionComponent, CSSProperties, useState, useEffect} from 'react'
import {useSpring, animated} from "react-spring";

type NoticeProps = {
    menu?: any
    style?: CSSProperties
    active: boolean
}

const Notice: FunctionComponent<NoticeProps> = ({menu = [], style = {}, active= false}) => {

    const props = useSpring({
        opacity: active ? 1 : 0
    })

    return (
        <animated.div className={`notice${active ? ' active' : ''}`} style={{...style, ...props}}>
            <div className="notice-content">
                Notice
            </div>
            <div className="scroll">Scroll vers le bas</div>
        </animated.div>
    )
}

export default Notice
