import './style.scss';
import { TaskList } from '../../../components/TaskList';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const MyDay = () => {

    
    return (
        <div className='MyDay-Page' >
            <TaskList title={'Meu Dia'} variation={{today: true}} icon={<WbSunnyIcon />}
            />
        </div>
    )
}