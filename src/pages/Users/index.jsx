import { Table } from "../../components/Table"

export const Users = () => {

    const data_test = [
        { nome: 'Fernando', idade: 24 }
    ]

    const columns = [
        {
            name: 'Nome',
            selector: row => row.nome,
            sortable: true,
        },
        {
            name: 'Idade',
            selector: row => row.idade,
            sortable: true,
        },
    ]

    return (
        <section>
            <h1>teste</h1>
            <Table
                data={data_test}
                columns={columns}
            />
        </section>
    )
}