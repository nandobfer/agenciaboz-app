import { useEffect, useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Collapsible from 'react-collapsible';
import { api } from '../../api';
import { useCustomers } from '../../hooks/useCustomers';
import { useTasks } from '../../hooks/useTasks';
import { useTeam } from '../../hooks/useTeam';
import { useUser } from '../../hooks/useUser';
import { CustomerTitle } from '../CustomerTitle';
import { NewTask } from '../NewTask';
import { Task } from '../Task';
import './style.scss';
import { Loading } from '../Loading';

export const TaskList = ({ title, variation }) => {
    const date = new Date()

    const tasksContext = useTasks()
    const tasks = tasksContext.value
    const setTasks = tasksContext.setValue

    const [loading, setLoading] = useState(false)
    const [newTask, setNewTask] = useState(false)
    const [customers, setCustomers] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    
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

    useEffect(() => {
        setLoading(true)
        api.post('/tasks', {user: user.id, ...variation})
        .then((response) => {
            setTasks(response.data.empty ? [] : response.data.filter(task => !task.finished))
            setCompletedTasks(response.data.empty ? [] : response.data.filter(task => task.finished))
            setLoading(false)
        })
    }, [user])

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
            api.post('/tasks', {user: user.id, ...variation})
            .then((response) => {
                setTasks(response.data.filter(task => !task.finished))
                setCompletedTasks(response.data.filter(task => task.finished))
                setLoading(false)
            })

            setNewTask(false)
        }

    }, [newTask])

    return (
        <div className='TaskList-Component' >
            <Loading loading_state={loading} />
            {loading ? null
            : 
            <section>
                <div className="title">
                    <WbSunnyIcon sx={icon_style} />
                    <p>{title}</p>
                </div>
                <p className='date'>{date.toLocaleDateString('pt-br', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                <div className="main-container">
                    <NewTask setNewTask={setNewTask} setLoading={setLoading} />
                    {customers.map(customer => {
                        const c_tasks = tasks.filter(task => task.customer == customer.id)
                        return (
                            <div className="customer-tasks" key={customer.id}>
                                <Collapsible trigger={<CustomerTitle customer={customer} tasks={c_tasks} />}
                                    triggerWhenOpen={<CustomerTitle customer={customer} tasks={c_tasks} open={true} />}
                                    open={true}
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
                        <Collapsible trigger={<CustomerTitle tasks={completedTasks} />}
                            triggerWhenOpen={<CustomerTitle tasks={completedTasks} open={true} />}
                        >
                
                            {completedTasks.map(task => {
                                return (
                                    <Task key={task.id} task={task} />
                                )
                            })}
                        </Collapsible>
                    </div>
                </div>
            </section>
            }
        </div>
    )
}