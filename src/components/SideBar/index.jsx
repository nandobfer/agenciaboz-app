import MenuIcon from '@mui/icons-material/Menu';
import './style.scss';

export const SideBar = () => {
    
    const icon_style = {
        width:'3vw', 
        height: '3vw', 
        color: 'red'
    }

    return (
        <div className='SideBar-Component' >
            <div className="menu-container">
                <MenuIcon sx={icon_style} />
            </div>
        </div>
    )
}