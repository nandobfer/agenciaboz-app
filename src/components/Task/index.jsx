import { useTeam } from '../../hooks/useTeam';
import { UserTag } from '../UserTag';
import { ReactComponent as MediumPriorityIcon } from '../../icons/medium_priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../icons/high_priority.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../api';
import COLORS from '../../sass/_colors.scss'

export const Task = ({ task, setNewTask, review }) => {
    const team = useTeam().value
    const date = new Date(task.date)
    const [done, setDone] = useState(task.done)

    const onDoneChange = () => {
        task.done = !task.done
        api.post('/tasks/done', { done: task.done, id: task.id })
        .then(response => {
        })
        setNewTask(true)
    }

    const setFinished = (finished) => {
        api.post('/tasks/finished', { finished: finished, id: task.id })
        .then(response => {
        })
        setNewTask(true)
    }

    const check_icon = {
        cursor: 'pointer',
        color: COLORS.primary
    }
    
    return (
        <div className={`Task-Component ${task.finished ? 'disabled' : ''}`} >
            <div className="top">
                <div className="task-data">
                    { review ? 
                        task.finished ? 
                            <CheckCircleIcon sx={check_icon} onClick={() => setFinished(false)} /> 
                            : <CheckCircleOutlineIcon sx={check_icon} onClick={() => setFinished(true)} />
                        : null
                    }
                    <input type="checkbox" className='checkbox-round' name="" id="teste" defaultChecked={done} onChange={onDoneChange} />
                    <p>{task.title}</p>
                    { !task.priority ? null 
                        : task.priority == 1 ? <MediumPriorityIcon /> 
                        : <HighPriorityIcon />
                    }
                    <p className="task-date">{date.toLocaleDateString('pt-BR', { weekday: 'long' }).split('-')[0]}, {date.toLocaleDateString()}</p>
                </div>
                <hr />
                <div className="tasked-person">
                    <p>Responsável</p>
                    {task.planner.split(',').map(planner => {
                        return (
                            <UserTag key={planner.id} user={team.filter(user => user.id == planner)[0]} />
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