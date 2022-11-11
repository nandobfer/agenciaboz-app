import DataTable from "react-data-table-component";

export const Table = ({ data, columns }) => {
    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    return (
        <DataTable
            pagination
            paginationComponentOptions={paginationComponentOptions}
            columns={columns}
            data={data}
            highlightOnHover
            fixedHeader
            fixedHeaderScrollHeight={'37.1vw'}
        />
    )
}