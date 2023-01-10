import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { SideBar } from '../../components/SideBar';
import { Topbar } from '../../components/Topbar';
import { MyDay } from '../MyDay';
import { Users } from '../Users';
import './style.scss';

export const Tasks = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("/tarefas")

    return (
        <div className="Tasks-page">
            <Topbar />
            <div className="SideBar-wrapper">
                <SideBar current={current} setCurrent={setCurrent} navigate={navigate} />
                <div className="main-container">
                        <Routes>
                            <Route index element={<MyDay />} />
                            <Route path="/usuarios" element={<Users />} />
                        </Routes>
                </div>
            </div>
        </div>
    )
}