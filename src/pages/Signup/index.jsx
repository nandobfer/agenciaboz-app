import { Form, Input } from 'react-burgos';
import { Field } from 'formik';
import { useUserType } from '../../hooks/useUserType';
import './style.scss';
import { api } from '../../api';
import { useUserRole } from '../../hooks/useUserRole';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { useTeam } from '../../hooks/useTeam';
import { useCustomers } from '../../hooks/useCustomers';

export const Signup = () => {

    const user_types = useUserType()

    const roles = useUserRole()

    const navigate = useNavigate()
    const user = useUser()
    const team = useTeam()
    const customers = useCustomers()

    // EXEMPLO DE HOOK
    // const cargos = useCargos()

    const inputs = {
        name: '',
        user: '',
        type: 0,
        cpf: '',
        birthday: '',
        role: '',
        password: ''
    }

    const onFormSubmit = (values) => {
        const [day, month, year] = values.birthday.split('/')
        const data = {
            ...values,
            cpf: values.cpf.replaceAll('.', '').replaceAll('-', ''),
            birthday: new Date(year, month - 1, day)
        }
        api.post('/cadastrar', data)
            .then(response => {
                const data = response.data
                if (data.error) {
                    alert(data.error)
                } else {
                    api.post('/login', { user: values.user, password: values.password })
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
            })
            .catch(error => {
                alert(error)
            })
    }

    const cpf_mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

    const dateMask = (string) => {
        let list = [/[0-3]/, /\d/, '/', /[0-1]/, /\d/]
        if (string[0] == '3') {
            list[1] = /[0-1]/
        }

        if (string[3] == '1') {
            list[4] = /[0-2]/
        }

        const data = new Date
        const current_year = data.getFullYear()

        const maxYear = current_year - 14
        const minYear = current_year - 100

        const milhar = new RegExp(`[${String(minYear)[0]}-${String(maxYear)[0]}]`)

        let centena = null
        if (string[6] == String(maxYear)[0]) {
            centena = /0/
        } else {
            centena = /9/
        }

        let dezena = null
        if (string[7] == String(maxYear)[1]) {
            dezena = new RegExp(`[0-${String(maxYear)[2]}]`)
        } else {
            dezena = new RegExp(`[${String(minYear)[2]}-9]`)
        }

        const year = ['/', milhar, centena, dezena, /\d/]
        list.push(...year)
        return list
    }


    return (
        <div className="Signup-page">
            <img src='boz-LogoBranco.png' alt='BOZ' />
            <div className="form-container">
                <h1>Cadastre-se</h1>
                <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                    <div className="input-container">
                        <label htmlFor="name">Nome</label>
                        <Input id="name" type="text" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="user">Usuário</label>
                        <Input id="user" type="text" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Senha</label>
                        <Input id="password" type="text" required />
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
                        <Input mask={cpf_mask} id="cpf" type="text" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="birthday">Data de nascimento</label>
                        <Input mask={dateMask} id="birthday" type="text" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="role">Cargo</label>
                        {/* EXEMPLO DE MAP */}
                        <Field as='select' name='role' id='role'>
                            {roles.map(item => {
                                return (
                                    <option key={item.id} value={item.id}>{item.name}</option>
                                )
                            })}
                        </Field>
                    </div>
                    <button onClick={() => navigate(-1)}>Voltar</button>
                    <button type='submit'>Cadastrar</button>
                </Form>
            </div>
        </div>
    )
}