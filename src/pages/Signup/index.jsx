import { Form, Input } from 'react-burgos';
import { Field } from 'formik';
import { useUserType } from '../../hooks/useUserType';
import './style.scss';
import { api } from '../../api';

export const Signup = () => {

    const user_types = useUserType()
    // EXEMPLO DE HOOK
    // const cargos = useCargos()

    const inputs = {
        name: '',
        user: '',
        type: 0,
        cpf: '',
        birthday: '',
        role: '',
    }

    const onFormSubmit = (values) => {
        const [day, month, year] = values.birthday.split('/')
        const data = {
            ...values, 
            cpf: values.cpf.replaceAll('.', '').replaceAll('-',''),
            birthday: new Date(year, month-1, day)
        }
        api.post('/cadastrar', data)
        .then(response => {
            const data = response.data
            alert(JSON.stringify(data, null, 2))
        })
        .catch(error => {
            alert(error)
        })
    }

    // EXEMPLO DE MASCARA
    const cpf_mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]


    return (
        <div className="Signup-page">
            <h1>Cadastrar usuário</h1>
            <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                <div className="input-container">
                    <label htmlFor="name">Nome</label>
                    <Input id="name" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="user">Usuário</label>
                    <Input id="user" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Senha</label>
                    <Input id="password" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="type">Tipo</label>
                    <Field as='select' name="type" id="type">
                        {user_types.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )
                        })}
                    </Field>
                </div>
                <div className="input-container">
                    <label htmlFor="cpf">CPF</label>
                    {/* EXEMPLO DE MASCARA */}
                    <Input mask={cpf_mask} id="cpf" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">Data de nascimento</label>
                    <Input id="birthday" type="text" />
                </div>
                <div className="input-container">
                    <label htmlFor="role">Cargo</label>
                    {/* EXEMPLO DE MAP */}
                    <Input id="role" type="text" />
                </div>
                <button type='submit'>Cadastrar</button>
            </Form>
        </div>
    )
}