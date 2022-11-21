import { SideBar } from '../../components/SideBar';
import { Topbar } from '../../components/Topbar';
import './style.scss';

export const Tasks = () => {

    return (
        <div className="Tasks-page">
            <Topbar />
            <div className="SideBar-wrapper">
                <SideBar />
                <div className="main-container">

                </div>
            </div>
        </div>
    )
}