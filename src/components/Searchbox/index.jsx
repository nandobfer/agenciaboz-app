import './style.scss';
import { Form, Input } from 'react-burgos';
import SearchIcon from '@mui/icons-material/Search';
import COLORS from '../../sass/_colors.scss';

export const Searchbox = () => {

    const inputs = {
        searchbox: ''
    }

    const icon_style = {
        color: COLORS.search_icon_color
    }

    const onFormSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div className="Searchbox-Component">
            <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                <Input
                    className='search-input'
                    id='searchbox'
                />
                <div className="icon-container">
                    <SearchIcon sx={icon_style} />
                </div>
            </Form>
        </div>
    )
}