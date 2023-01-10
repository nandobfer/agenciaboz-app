import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import './style.scss';

export const Home = () => {

    const navigate = useNavigate()
    const user = useLocation().state.user

    return (
        <div className='home-page'>
            <h1>Olá, {user.name}</h1>
            <div className="buttons-container">
                <button onClick={() => navigate('/tarefas')}>Tarefas</button>
                <button onClick={() => navigate('/usuarios')}>Usuários</button>
                <button onClick={() => navigate('/cadastro')}>Cadastrar</button>
                <button onClick={() => navigate('/')}>Sair</button>
            </div>
        </div>
    )
}