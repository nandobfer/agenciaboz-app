import { useLocation } from "react-router-dom"
import { Table } from "../../components/Table"

export const Users = () => {

    const users = useLocation().state.users
    console.log(users)

    const formatCPF = (cpf) => {
        if (cpf === 'None') {
            return null
        }
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }

    const formatZero = (number) => {
        return Math.floor(number/10) ? number : `0${number}`
    }

    const formatBirthday = (datetime) => {
        const date = new Date(datetime)
        const day = formatZero(date.getDate())
        const month = formatZero(date.getMonth()+1)
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    const columns = [
        {
            name: 'Nome',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'CPF',
            selector: row => row.cpf,
            sortable: true,
            format: row => formatCPF(row.cpf)
        },
        {
            name: 'Data de nascimento',
            selector: row => row.birthday,
            sortable: true,
            format: row => formatBirthday(row.birthday)
        },
    ]

    return (
        <section>
            <h1>Painel de Usuários</h1>
            <Table
                data={users}
                columns={columns}
            />
        </section>
    )
}