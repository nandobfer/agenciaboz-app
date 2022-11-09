import { useNavigate } from 'react-router-dom';
import './style.scss';

export const Home = () => {

    const navigate = useNavigate();
    
    return (
        <div className='body'>
            <h1>Home</h1>
            <form>
                <div>
                    <label htmlFor="user-input">Usuário</label>
                    <input id='user-input' type="text" />
                </div>
                <div>
                    <label htmlFor="password-input">Senha</label>
                    <input id='password-input' type="text" />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}