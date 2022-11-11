import { Form, Input } from 'react-burgos';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import './style.scss';

export const Home = () => {

    const navigate = useNavigate();

    const onFormSubmit = (values) => {
        api.post('/login', {user: values.input_login, password: values.input_senha})
        .then((response) => {
            alert(JSON.stringify(response.data, null, 2))
        })
        .catch((error) => {
            alert(error)
        })
    }

    const inputs = {
        input_login: '',
        input_senha: '',
    }
    
    return (
        <div className='body'>
            <h1>Home</h1>
            <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                        <label htmlFor="input_login">Usuário</label>
                        <Input 
                            mask={() => false}
                            id='input_login'
                            placeholder='Usuário, e-mail ou CPF'
                            className='default-input'
                            />
                        <label htmlFor="input_senha">Senha</label>
                        <Input 
                            mask={() => false}
                            id='input_senha'
                            placeholder='Senha'
                            className='default-input'
                        />
                        <button className='default-button' type="submit">Entrar</button>
                    </Form>
        </div>
    )
}