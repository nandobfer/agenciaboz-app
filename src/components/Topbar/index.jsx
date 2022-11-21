import { Logo } from '../Logo';
import { Searchbox } from '../Searchbox';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import COLORS from '../../sass/_colors.scss';
import './style.scss';

export const Topbar = () => {

    const settings_icon_style = {
        color: COLORS.white
    }

    const notifications_icon_style = {
        color: COLORS.white
    }

    const person_icon_style = {
        color: COLORS.white
    }

    return (
        <div className="Topbar-Component">
            <Logo />
            <p>Tarefas</p>
            <Searchbox />
            <div className="settings-icon-container">
                <SettingsIcon sx={settings_icon_style} />
            </div>
            <div className="notifications-icon-container">
                <NotificationsActiveIcon sx={notifications_icon_style} />
            </div>
            <div className="person-icon-container">
                <PersonIcon sx={person_icon_style} />
            </div>
        </div>
    )
}