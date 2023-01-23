import { Dialog } from '@mui/material';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-burgos';
import { api } from '../../api';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { TeamChooser } from '../TeamChooser';
import { UserTag } from '../UserTag';
import './style.scss';

export const NewTask = () => {

    const titleRef = useRef(null)

    const [showPlannerModal, setShowPlannerModal] = useState(false)
    const [showWorkerModal, setShowWorkerModal] = useState(false)
    const [planners, setPlanners] = useState([])
    const [workers, setWorkers] = useState([])

    const onSubmitNewTask = (values) => {
        alert(values.new_task)
    }

    const removeUser = (user_to_delete, setState, list) => {
        setState(list.filter(user => user != user_to_delete))
    }

    const onKeyPress = useCallback((event) => {
        if (event.key == 'Enter') {
            console.log(workers, planners)
            const title = titleRef.current.value

            const task = {
                title,
                worker: workers.map(worker => worker.id),
                planner: planners.map(planner => planner.id),
                date: new Date(),
                priority: 1,
                customer: 1,
                briefing: 'link',
                done: false
            }
            console.log(task)

            // api.post('/new_task', task)
            // .then(response => {
            //     console.log(response.data)
            // })
        }
    }, [workers, planners])

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress, false)
    
        return () => {
          document.removeEventListener("keydown", onKeyPress, false)
        }
    }, [])

    return (
        <div className='NewTask-Component' >
            <TeamChooser showModal={showPlannerModal} setShowModal={setShowPlannerModal} choose={setPlanners} list={planners} />
            <TeamChooser showModal={showWorkerModal} setShowModal={setShowWorkerModal} choose={setWorkers} list={workers} />
            <div className="top">
                <input type="radio" name="" id="teste" />
                <input ref={titleRef} id="new_task" type="text" placeholder='Adicionar Tarefa' />
                <hr />
                <div>
                    <p>Responsável <PlusIcon onClick={() => setShowPlannerModal(true)} /></p>
                    {planners.map(planner => {
                        return (
                            <div key={planner.id} className="planner-container" onClick={() => removeUser(planner, setPlanners, planners)}>
                                <UserTag user={planner} />
                            </div>
                        )
                    })}
                    
                </div>
                <hr />
                <div>
                    <p>Desenvolvedor <PlusIcon onClick={() => setShowWorkerModal(true)} /></p>
                    {workers.map(worker => {
                        return (
                            <div key={worker.id} className="worker-container" onClick={() => removeUser(worker, setWorkers, workers)}>
                                <UserTag user={worker} />
                            </div>
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