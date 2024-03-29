import { Dialog } from '@mui/material';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-burgos';
import { api } from '../../api';
import { useUser } from '../../hooks/useUser';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as DatePickerIcon } from '../../icons/date.svg';
import { ReactComponent as PriorityIcon } from '../../icons/priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../icons/medium_priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../icons/high_priority.svg';
import { CustomerChooser } from '../CustomerChooser';
import { TeamChooser } from '../TeamChooser';
import { UserTag } from '../UserTag';
import DatePicker from "react-datepicker";
import './style.scss';
import { PriorityModal } from '../PriorityModal';

export const NewTask = ({ setNewTask, setLoading }) => {

    const user = useUser().value

    const titleRef = useRef(null)

    const [startDate, setStartDate] = useState(new Date())
    const [showPriorityModal, setShowPriorityModal] = useState(false)
    const [showPlannerModal, setShowPlannerModal] = useState(false)
    const [showWorkerModal, setShowWorkerModal] = useState(false)
    const [showCustomersModal, setShowCustomersModal] = useState(false)
    const [planners, setPlanners] = useState([])
    const [workers, setWorkers] = useState([])
    const [customer, setCustomer] = useState(false)
    const [priority, setPriority] = useState(0)

    const onSubmitNewTask = (values) => {
        alert(values.new_task)
    }

    const removeUser = (user_to_delete, setState, list) => {
        setState(list.filter(user => user != user_to_delete))
    }

    const onKeyPress = useCallback((event) => {
        if (event.key == 'Enter') {
            const title = titleRef.current.value

            if (!title) {
                titleRef.current.focus()
                return false
            }

            if (!customer) {
                setShowCustomersModal(true)
                return false
            }

            if (!planners.length) {
                setShowPlannerModal(true)
                return false
            }

            const task = {
                title,
                worker: workers.map(worker => worker.id),
                planner: planners.map(planner => planner.id),
                date: startDate,
                priority: priority,
                customer: customer.id,
                briefing: 'link',
                done: false
            }
            
            setLoading(true)
            api.post('/new_task', task)
            .then(response => {
                // console.log(response.data)

                if (workers.filter(worker => worker.id == user.id).length || planners.filter(planner => planner.id == user.id).length) {
                    setNewTask(true)
                } else {
                    setLoading(false)
                }
            })
        }
    }, [workers, planners, customer, startDate, priority])

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress, false)
    
        return () => {
          document.removeEventListener("keydown", onKeyPress, false)
        }
    }, [onKeyPress])

    return (
        <div className='NewTask-Component' >
            <TeamChooser showModal={showPlannerModal} setShowModal={setShowPlannerModal} choose={setPlanners} list={planners} />
            <TeamChooser showModal={showWorkerModal} setShowModal={setShowWorkerModal} choose={setWorkers} list={workers} />
            <CustomerChooser showModal={showCustomersModal} setShowModal={setShowCustomersModal} choose={setCustomer} />
            <div className="top">
                <div className="add-task">
                    <input className='checkbox-round' type="checkbox" name="" id="teste" />
                    <input ref={titleRef} id="new_task" type="text" placeholder='Adicionar uma tarefa'/>
                </div>
                <hr/>
                <div className="add-person">
                    <p className="selector" onClick={() => setShowPlannerModal(!showPlannerModal)}>Responsável <PlusIcon/></p>
                    {planners.map(planner => {
                        return (
                            <div key={planner.id} className="planner-container" onClick={() => removeUser(planner, setPlanners, planners)}>
                                <UserTag user={planner} />
                            </div>
                        )
                    })}
                    
                </div>
                <hr/>
                <div className="add-person">
                    <p className="selector" onClick={() => setShowWorkerModal(!showWorkerModal)}>Desenvolvedor <PlusIcon/></p>
                    {workers.map(worker => {
                        return (
                            <div key={worker.id} className="worker-container" onClick={() => removeUser(worker, setWorkers, workers)}>
                                <UserTag user={worker} />
                            </div>
                        )
                    })}
                    
                </div>
            </div>
            <hr className="h-hr"/>
            <div className="bottom">
                    <DatePicker className="selector" customInput={<DatePickerIcon />} calendarClassName='date-picker' selected={startDate} onChange={(date) => setStartDate(date)} />
                    <p>{startDate.toLocaleDateString("pt-BR", {year:"2-digit",month:"2-digit", day:"2-digit"})}</p>

                    { !priority ? <PriorityIcon className="selector" onClick={() => setShowPriorityModal(true)} /> 
                        : priority == 1 ? <MediumPriorityIcon onClick={() => setShowPriorityModal(true)} /> 
                        : <HighPriorityIcon onClick={() => setShowPriorityModal(true)} />
                    }
                    <PriorityModal show={showPriorityModal} setShow={setShowPriorityModal} setValue={setPriority} />
                    {customer ? <UserTag customer={customer} onClick={() => setShowCustomersModal(true)} /> : <PlusIcon className="selector" onClick={() => setShowCustomersModal(true)} />}
            </div>
        </div>
    )
}