import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/SideBar';
import { Topbar } from '../../components/Topbar';
import { MyDay } from './MyDay';
import { Users } from '../Users';
import './style.scss';
import { Review } from './Review';
import { Important } from './Important';
import { TaskList } from '../../components/TaskList';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Tasks = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("/tarefas")

    const DefaultTasks = () => {
        return (
        <div className='Default-Tasks-Component' >
            <TaskList title={'Tarefas'} variation={{all: true}} icon={<HomeOutlinedIcon />}
            />
        </div>
        )
    }

    return (
        <div className="Tasks-page">
            <Topbar />
            <div className="SideBar-wrapper">
                <SideBar current={current} setCurrent={setCurrent} navigate={navigate} />
                <div className="main-container">
                        <Routes>
                            <Route index element={<DefaultTasks />} />
                            <Route path="/hoje" element={<MyDay />} />
                            <Route path="/revisao" element={<Review />} />
                            <Route path="/importante" element={<Important />} />
                            <Route path="/usuarios" element={<Users />} />
                        </Routes>
                </div>
            </div>
        </div>
    )
}