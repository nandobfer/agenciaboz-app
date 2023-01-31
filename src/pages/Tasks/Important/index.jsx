import { TaskList } from '../../../components/TaskList';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const Important = () => {

    
    return (
        <div className='MyDay-Page' >
            <TaskList title={'Importante'} variation={{important: true}} icon={<StarBorderIcon />}
            />
        </div>
    )
}