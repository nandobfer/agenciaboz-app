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

export const MyDay = () => {

    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [loadedTasks, setLoadedTasks] = useState(false)
    const [tasks, setTasks] = useState([])
    const [customers, setCustomers] = useState([])

    const user = useUser().value
    const team = useTeam().value
    const _customers = useCustomers().value

    const icon_style = {
        width: '1.5vw',
        height: '1.5vw',
        color: 'black'
    }

    const date = new Date()

    const onKeyPress = (event) => {
        if (event.key == 'Enter') {
            alert()
        }
    }

    
    useEffect(() => {
        api.post('/tasks', {user: user.id})
        .then((response) => {
            setTasks(response.data)
            setLoading(false)
        })

    }, [loaded])

    useEffect(() => {
        if (!loadedTasks) {
            for(const task of tasks) {
                const customer = _customers.filter(customer => customer.id == task.customer)[0]
                if (!customers.includes(customer)) {
                    setCustomers([...customers, customer])
                }
            }
        }

    }, [tasks])

    useEffect(() => {
        console.log(customers)

    }, [customers])

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress, false)
    
        return () => {
          document.removeEventListener("keydown", onKeyPress, false)
        }
    }, [])
    
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
                    <NewTask />
                    {customers.map(customer => {
                        const c_tasks = tasks.filter(task => task.customer == customer.id)
                        return (
                            <div className="customer-tasks" key={customer.id}>
                                <h1>{customer.company} / <span>{c_tasks.length}</span></h1>
                                {c_tasks.map(task => {
                                    return (
                                        <Task key={task.id} task={task} />
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>}
        </section>
    )
}