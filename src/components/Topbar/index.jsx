import { Logo } from '../Logo';
import { Searchbox } from '../Searchbox';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import COLORS from '../../sass/_colors.scss';
import './style.scss';
import { useEffect, useState } from 'react';
import { TopbarModal } from '../TopbarModal';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

export const Topbar = () => {

    const user = useUser()
    const logout = useLogout()

    const [showAccountModal, setShowAccountModal] = useState(false)

    const settings_icon_style = {
        color: COLORS.white
    }

    const notifications_icon_style = {
        color: COLORS.white
    }

    const person_icon_style = {
        color: COLORS.white
    }

    const account_menu = [
        {
            text: user.value.name,
            onClick: () => alert(JSON.stringify(user.value, null, 4))
        },
        {
            text: 'Sair',
            onClick: () => logout()
        }
    ]

    const navigate = useNavigate()

    useEffect(() => {
        if (!user.value) {
            navigate('/')
        }
    }, [user.value])

    return (
        <div className="Topbar-Component">
            <Logo />
            <p>Tarefas</p>
            <Searchbox />
            <div className="settings-icon-container topbar-icon">
                <SettingsIcon sx={settings_icon_style} />
            </div>
            <div className="notifications-icon-container topbar-icon">
                <NotificationsActiveIcon sx={notifications_icon_style} />
            </div>
            <div className="person-icon-container topbar-icon">
                <PersonIcon sx={person_icon_style} onClick={() => {setShowAccountModal(!showAccountModal)}} />
                <TopbarModal show={showAccountModal} setShow={setShowAccountModal} menuList={account_menu} />
            </div>
        </div>
    )
}