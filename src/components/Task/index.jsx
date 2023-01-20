import { useTeam } from '../../hooks/useTeam';
import './style.scss';

export const Task = ({ task }) => {
    const team = useTeam().value
    
    return (
        <div className='Task-Component' >
            <div className="top">
                <input type="radio" name="" id="teste" />
                <p>{task.title}</p>
                <hr />
                <div>
                    <p>Responsável</p>
                    {task.planner.split(',').map(planner => {
                        return (
                            <p>{team.filter(user => user.id == planner)[0].name}</p>
                        )
                    })}
                </div>
                <hr />
                <div>
                    <p>Desenvolvedor</p>
                    {task.worker.split(',').map(worker => {
                        return (
                            <p>{team.filter(user => user.id == worker)[0].name}</p>
                        )
                    })}
                </div>
            </div>
            <hr />
            <div className="bottom">

            </div>
        </div>
    )
}