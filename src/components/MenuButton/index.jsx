import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { useState } from 'react';

export const MenuButton = ({ Icon, title, visible, active }) => {

    const [hovered, setHovered] = useState(false)

    const icon_style = {
        width: '1.5vw',
        height: '1.5vw',
        color: COLORS.menu_gray_color
    }

    const active_style = {
        border: '1px solid menu_gray_color',
        boxShadow: '0 0 0 1px #888888',
        zIndex: '5'
    }

    return (
        <div className="menu-button-container button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={active ? active_style : hovered ? active_style : null}
        >
            <Icon sx={icon_style} />
            {visible ? <p>{title}</p> : null}
        </div>
    )
}