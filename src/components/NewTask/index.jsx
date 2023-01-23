import { Dialog } from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-burgos';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { TeamChooser } from '../TeamChooser';
import { UserTag } from '../UserTag';
import './style.scss';

export const NewTask = () => {

    const [showPlannerModal, setShowPlannerModal] = useState(false)
    const [showWorkerModal, setShowWorkerModal] = useState(false)
    const [planners, setPlanners] = useState([])
    const [workers, setWorkers] = useState([])

    const onSubmitNewTask = (values) => {
        alert(values)
    }

    const removeUser = (user_to_delete, setState, list) => {
        setState(list.filter(user => user != user_to_delete))
    }

    return (
        <div className='NewTask-Component' >
            <TeamChooser showModal={showPlannerModal} setShowModal={setShowPlannerModal} choose={setPlanners} list={planners} />
            <TeamChooser showModal={showWorkerModal} setShowModal={setShowWorkerModal} choose={setWorkers} list={workers} />
            <div className="top">
                <input type="radio" name="" id="teste" />
                <Form initialValues={{new_task: ''}} onSubmit={values => onSubmitNewTask(values)}>
                    <input id="new_task" type="text" placeholder='Adicionar Tarefa' />
                </Form>
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