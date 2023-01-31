import './style.scss';
import { TaskList } from '../../../components/TaskList';


export const Review = () => {

    
    return (
        <div className='MyDay-Page' >
            <TaskList title={'Revisão'} variation={{review: true}}
            />
        </div>
    )
}