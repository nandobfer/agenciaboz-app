import './style.scss';
import Modal from 'react-modal';
import { ReactComponent as MediumPriorityIcon } from '../../icons/medium_priority.svg';
import { ReactComponent as HighPriorityIcon } from '../../icons/high_priority.svg';
import BlockIcon from '@mui/icons-material/Block';
import { useEffect } from 'react';

export const PriorityModal = ({ show, setShow, setValue }) => {

    const customStyles = {
        content: {
        top: '17vw',
        left: '20vw',
        right: 'auto',
        bottom: 'auto',
        gap: '1vw'
        },
    }

    const setPriority = (value) => {
        setValue(value)
        setShow(false)
    }

    Modal.setAppElement('body')

    return (
        <div className='PriorityModal-Component' >
            <Modal isOpen={show}
                style={customStyles}
                onRequestClose={() => setShow(false)}
                contentLabel="Example Modal">
                <BlockIcon onClick={() => setPriority(0)} />
                <MediumPriorityIcon onClick={() => setPriority(1)} />
                <HighPriorityIcon onClick={() => setPriority(2)} />
            </Modal>
        </div>
    )
}