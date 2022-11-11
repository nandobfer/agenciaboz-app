import { Form, Input } from 'react-burgos';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export const Home = () => {

    const navigate = useNavigate();

    const onFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }

    const inputs = {
        input_login: '',
        input_senha: '',
    }

    return (
        <div className='main-container'>
            <img src="boz-LogoBranco.png" alt="BOZ" />
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