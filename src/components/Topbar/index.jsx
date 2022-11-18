import { Logo } from '../Logo';
import { Searchbox } from '../Searchbox';
import './style.scss';

export const Topbar = () => {

    return (
        <div className="Topbar-Component">
            <Logo />
            <p>Tarefas</p>
            <Searchbox />
        </div>
    )
}