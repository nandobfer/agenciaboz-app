import { useTeam } from '../../hooks/useTeam';
import { UserTag } from '../UserTag';
import './style.scss';

export const Task = ({ task }) => {
    const team = useTeam().value
    
    return (
        <div className='Task-Component' >
            <div className="top">
                <div className="task-data">
                    <input type="radio" name="" id="teste" />
                    <p>{task.title}</p>
                    <p className="task-date">Qua, 25/01/2023</p>
                </div>
                <hr />
                <div className="tasked-person">
                    <p>Responsável</p>
                    {task.planner.split(',').map(planner => {
                        return (
                            <UserTag user={team.filter(user => user.id == planner)[0]} />
                        )
                    })}
                </div>
                <hr />
                <div className="tasked-person">
                    <p>Desenvolvedor</p>
                    {task.worker.split(',').map(worker => {
                        return (
                            <UserTag key={worker.id} user={team.filter(user => user.id == worker)[0]} />
                        )
                    })}
                </div>
            </div>
            <hr className="h-hr" />
            <div className="bottom">

            </div>
        </div>
    )
}