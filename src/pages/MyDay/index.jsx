import './style.scss';
import COLORS from '../../sass/_colors.scss'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { NewTask } from '../../components/NewTask';

export const MyDay = () => {

    const icon_style = {
        width: '1.5vw',
        height: '1.5vw',
        color: 'black'
    }

    const date = new Date()
    
    return (
        <div className='MyDay-Component' >
            <div className="title">
                <WbSunnyIcon sx={icon_style} />
                <p>Meu Dia</p>
            </div>
            <p className='date'>{date.toLocaleDateString('pt-br', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            <div className="main-container">
                <NewTask />
            </div>
        </div>
    )
}