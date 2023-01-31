import { useState } from 'react';
import { Form, Input } from 'react-burgos';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { useCustomers } from '../../hooks/useCustomers';
import { useTeam } from '../../hooks/useTeam';
import { useUser } from '../../hooks/useUser';
import { ReactComponent as EyeIcon } from '../../icons/eye.svg';
import './style.scss';

export const Login = () => {

    const user = useUser()
    const team = useTeam()
    const customers = useCustomers()
    const navigate = useNavigate();
    const [feedback, setFeedback] = useState('')

    const onFormSubmit = (values) => {
        setFeedback('Verificando')

        api.post('/login', { user: values.input_login, password: values.input_senha })
            .then((response) => {
                if (response.data.error) {
                    setFeedback(response.data.error)
                } else {
                    user.setValue(response.data.user)
                    team.setValue(response.data.team)
                    customers.setValue(response.data.customers)

                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    localStorage.setItem("team", JSON.stringify(response.data.team));
                    localStorage.setItem("customers", JSON.stringify(response.data.customers));

                    navigate('/tarefas')
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    const inputs = {
        input_login: '',
        input_senha: '',
    }

    const mailMask = (string) => {
        const placeholder = '@agenciaboz.com.br'
        const mask = Array.from(string).map(() => /[a-z]/i)

        return mask
    }

    return (
        <div className='login-page'>
            <div className='main-container'>
                <img src='boz-LogoBranco.png' alt='BOZ' />
                <div className="form-container">
                    <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                        {/* <label htmlFor='input_login'>Usuário</label> */}
                        <Input
                            mask={(string) => mailMask(string)}
                            id='input_login'
                            placeholder='Nome ou e-mail'
                            className='default-input'
                        />
                        {/* <label htmlFor='input_senha'>Senha</label> */}
                        <div className="password-container">
                        <Input
                            type='password'
                            id='input_senha'
                            placeholder='Senha'
                            className='default-input'
                        />
                            <EyeIcon />
                        </div>
                        <button className='default-button' type="submit">Entrar</button>
                        <p>{feedback}</p>
                        <a href="#">Esqueceu a senha?</a>
                        <hr />
                    </Form>
                        <button id='create-account-button' className='default-button' type="submit" onClick={() => navigate('/cadastro')}>Criar nova conta</button>
                </div>
            </div>
        </div>
    )
}