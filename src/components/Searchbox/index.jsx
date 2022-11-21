import './style.scss';
import { Form, Input } from 'react-burgos';
import SearchIcon from '@mui/icons-material/Search';
import COLORS from '../../sass/_colors.scss'

export const Searchbox = () => {

    const inputs = {
        searchbox: ''
    }

    const icon_style = {
        color: 'red'
    }

    const onFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div className="Searchbox-Component">
            <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                <Input
                    id='searchbox'
                />
                <div className="icon-container">
                    <SearchIcon />
                </div>
            </Form>
        </div>
    )
}