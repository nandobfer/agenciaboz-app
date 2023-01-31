import { TaskList } from '../../../components/TaskList';


export const Important = () => {

    
    return (
        <div className='MyDay-Page' >
            <TaskList title={'Importante'} variation={{important: true}}
            />
        </div>
    )
}