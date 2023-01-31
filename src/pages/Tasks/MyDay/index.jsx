import './style.scss';
import { TaskList } from '../../../components/TaskList';


export const MyDay = () => {

    
    return (
        <div className='MyDay-Page' >
            <TaskList title={'Meu Dia'} variation={{today: true}}
            />
        </div>
    )
}