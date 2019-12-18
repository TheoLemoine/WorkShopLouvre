import React, { FunctionComponent, CSSProperties } from 'react'

type MenuIconsProps = {
    menu?: any
    className?: string
    style?: CSSProperties
}

const MenuIcons: FunctionComponent<MenuIconsProps> = ({ menu = [], className = '', style = {} }) => (
    <nav className={`menu${className}`} style={style} >
        {menu.lenght > 0 || menu ? <ul>{menu.map((item, index) => <li key={index} onClick={item.click}>{item.name}</li>)}</ul> : null }
    </nav>
)

export default MenuIcons
