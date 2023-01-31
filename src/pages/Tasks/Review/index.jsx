import './style.scss';
import { TaskList } from '../../../components/TaskList';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export const Review = () => {

    
    return (
        <div className='MyDay-Page' >
            <TaskList title={'Revisão'} variation={{review: true}} icon={<DoneAllIcon />}
            />
        </div>
    )
}