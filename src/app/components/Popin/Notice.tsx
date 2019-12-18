import React, { FunctionComponent, CSSProperties } from 'react'

type NoticeProps = {
    menu?: any
    className?: string
    style?: CSSProperties
}

const Notice: FunctionComponent<NoticeProps> = ({ menu = [], className = '', style = {} }) => (
    <nav className={`menu${className}`} style={style} >
        {menu.lenght > 0 || menu ? <ul>{menu.map((item, index) => <li key={index} onClick={item.click}>{item.name}</li>)}</ul> : null }
    </nav>
)

export default Notice
