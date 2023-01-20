import { Form } from 'react-burgos';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import './style.scss';

export const NewTask = () => {

    const onSubmitNewTask = (values) => {
        alert(values)
    }

    return (
        <div className='NewTask-Component' >
            <div className="top">
                <input type="radio" name="" id="teste" />
                <Form initialValues={{new_task: ''}} onSubmit={values => onSubmitNewTask(values)}>
                    <input id="new_task" type="text" placeholder='Adicionar Tarefa' />
                </Form>
                <hr />
                <div>
                    <p>Responsável</p>
                </div>
                <hr />
                <div>
                    <p>Desenvolvedor</p>
                </div>
            </div>
            <hr />
            <div className="bottom">

            </div>
        </div>
    )
}