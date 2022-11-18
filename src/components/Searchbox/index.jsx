import './style.scss';
import { Form, Input } from 'react-burgos';

export const Searchbox = () => {

    const inputs = {
        searchbox: ''
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
            </Form>
        </div>
    )
}