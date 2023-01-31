import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';
import COLORS from '../../sass/_colors.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { MenuButton } from '../MenuButton';
import { useEffect, useState } from 'react';

export const SideBar = ({ current, setCurrent, navigate }) => {
    const buttons = [
        { icon: HomeOutlinedIcon, title: 'Tarefas', route:"/tarefas" },
        { icon: WbSunnyIcon, title: 'Meu Dia', route:"/tarefas/hoje" },
        { icon: StarBorderIcon, title: 'Importante', route:"/tarefas/importante" },
        { icon: DoneAllIcon, title: 'Revisão', route:"/tarefas/revisao" },
        { icon: CalendarTodayIcon, title: 'Planejado', route:"" },
        { icon: AccountCircleOutlinedIcon, title: 'Equipe', route:"/tarefas/usuarios" },
        { icon: TimelineOutlinedIcon, title: 'Estatísticas', route:"" },
    ]

    const [visible, setVisible] = useState(false)

    const icon_style = {
        width: '1.5vw',
        height: '1.5vw',
        color: COLORS.menu_gray_color
    }

    const toggleMenu = () => {
        setVisible(!visible)
    }

    useEffect(() => {
    }, [visible])

    return (
        <div className='SideBar-Component' style={{ flex: visible ? 0.15 : 0.04 }}>
            <div className="menu-button-container button" onClick={toggleMenu}>
                <MenuIcon sx={icon_style} />
            </div>

            {
                buttons.map(item => {
                    return (
                        <MenuButton key={item.title} visible={visible} Icon={item.icon} title={item.title} route={item.route} navigate={navigate} current={current} setCurrent={setCurrent} />
                    )
                })
            }

        </div>
    )
}