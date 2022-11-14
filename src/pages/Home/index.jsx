import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import './style.scss';

export const Home = () => {

    const navigate = useNavigate()
    const user = useLocation().state.user

    const toUsers = () => {
        api.post('/usuarios', {})
        .then((response) => {
            if (response.data.error) alert(JSON.stringify(response.data.error, null, 2))

            navigate('/usuarios', {state: {users: response.data}})
        })
        .catch((error) => {
            alert(JSON.stringify(error, null, 2))
        })
    }
    
    return (
        <section className="home-page">
            <h1>{user.name}</h1>
            <button onClick={() => navigate('/')}>Sair</button>
            <button onClick={toUsers}>Usuários</button>
            <button onClick={() => navigate('/cadastro')}>Cadastrar</button>
        </section>
    )
}