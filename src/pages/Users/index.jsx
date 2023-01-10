import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { api } from "../../api";
import { Loading } from "../../components/Loading";
import { SideBar } from "../../components/SideBar";
import { Table } from "../../components/Table"
import { Topbar } from "../../components/Topbar";
import './style.scss';

export const Users = () => {

    const [loading, setLoading] = useState(true)
    const [loaded, setLoaded] = useState(false)
    const [users, setUsers] = useState([])

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

    useEffect(() => {
        api.post('/usuarios', {})
            .then((response) => {
                if (response.data.error) alert(JSON.stringify(response.data.error, null, 2))
                setUsers(response.data)
                setLoading(false)
            })
            .catch((error) => {
                alert(JSON.stringify(error, null, 2))
            })
    }, [loaded])

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
        <div className="users-page">
            <div className="main-container">
                <Loading loading_state={loading} />
                <Table
                    data={users}
                    columns={columns}
                />
            </div>
        </div>
    )
}