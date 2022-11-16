import { useState } from 'react';
import { Form, Input } from 'react-burgos';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import './style.scss';

export const Login = () => {

    const navigate = useNavigate();
    const [feedback, setFeedback] = useState('')

    const onFormSubmit = (values) => {
        console.log(values)

        api.post('/login', { user: values.input_login, password: values.input_senha })
            .then((response) => {
                if (response.data.error) {
                    setFeedback(response.data.error)
                } else {
                    navigate('/home', {state: {user: response.data}})
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
        <div className='main-container'>
            <img src="boz-LogoBranco.png" alt="BOZ" />
            <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                <label htmlFor="input_login">Usuário</label>
                <Input
                    mask={(string) => mailMask(string)}
                    id='input_login'
                    placeholder='@agenciaboz.com.br'
                    className='default-input'
                />
                <label htmlFor="input_senha">Senha</label>
                <Input
                    type='password'
                    id='input_senha'
                    placeholder='Senha'
                    className='default-input'
                />
                <button className='default-button' type="submit">Entrar</button>
                <p>{feedback}</p>

            </Form>

        </div>
    )
}