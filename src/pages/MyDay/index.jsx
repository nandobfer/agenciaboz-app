import './style.scss';
import COLORS from '../../sass/_colors.scss'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { NewTask } from '../../components/NewTask';
import { api } from '../../api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Task } from '../../components/Task';
import { useUser } from '../../hooks/useUser';
import { Loading } from '../../components/Loading';
import { useTeam } from '../../hooks/useTeam';
import { useCustomers } from '../../hooks/useCustomers';
import { Dialog } from '@mui/material';
import Collapsible from 'react-collapsible';

export const MyDay = () => {

    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [loadedTasks, setLoadedTasks] = useState(false)
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [customers, setCustomers] = useState([])
    const [newTask, setNewTask] = useState(false)

    const userContext = useUser()
    const user = userContext.value

    const teamContext = useTeam()
    const team = teamContext.value

    const customersContext = useCustomers()
    const _customers = customersContext.value

    const icon_style = {
        width: '1.5vw',
        height: '1.5vw',
        color: 'black'
    }

    const date = new Date()

    useEffect(() => {

        if (!user) {
            userContext.setValue(JSON.parse(localStorage.getItem("user")))
        }
        if (!team) {
            teamContext.setValue(JSON.parse(localStorage.getItem("team")))
        }
        if (!_customers) {
            customersContext.setValue(JSON.parse(localStorage.getItem("customers")))
        }

        if (tasks.length == 0) {
            api.post('/tasks', {user: user.id})
            .then((response) => {
                setTasks(response.data.filter(task => !task.finished))
                setCompletedTasks(response.data.filter(task => task.finished))
                setLoading(false)
            })
        }
        
    })
    
    useEffect(() => {
        for(const task of tasks) {
            const customer = _customers.filter(customer => customer.id == task.customer)[0]
            if (!customers.includes(customer)) {
                setCustomers([...customers, customer])
            }
        }

    }, [tasks])

    useEffect(() => {
        console.log(customers)

    }, [customers])

    useEffect(() => {
        if (newTask) {
            api.post('/tasks', {user: user.id})
            .then((response) => {
                setTasks(response.data.filter(task => !task.finished))
                setCompletedTasks(response.data.filter(task => task.finished))
                setLoading(false)
            })

            setNewTask(false)
        }

    }, [newTask])

    return (
        <section>
            <Loading loading_state={loading} />
            {loading ? null : <div className='MyDay-Component' >
                <div className="title">
                    <WbSunnyIcon sx={icon_style} />
                    <p>Meu Dia</p>
                </div>
                <p className='date'>{date.toLocaleDateString('pt-br', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                <div className="main-container">
                    <NewTask setNewTask={setNewTask} setLoading={setLoading} />
                    {customers.map(customer => {
                        const c_tasks = tasks.filter(task => task.customer == customer.id)
                        return (
                            <div className="customer-tasks" key={customer.id}>
                                <Collapsible trigger={`${customer.company} / `}
                                    triggerSibling={`${c_tasks.length} elemento${c_tasks.length > 1 ? 's' : ''}`}
                                    triggerStyle={{fontSize: '1.7vw', fontWeight: 'bold'}}
                                >

                                {c_tasks.map(task => {
                                    return (
                                        <Task key={task.id} task={task} setNewTask={setNewTask} />
                                    )
                                })}
                                </Collapsible>
                            </div>
                        )
                    })}
                    <div className="completed-tasks">
                        <h1>Completadas / <span>{completedTasks.length} elemento{completedTasks.length > 1 ? 's' : null}</span></h1>
                        {completedTasks.map(task => {
                            return (
                                <Task key={task.id} task={task} />
                            )
                        })}
                    </div>
                </div>
            </div>}
        </section>
    )
}