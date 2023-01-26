import './style.scss';
import Modal from 'react-modal';
import { useEffect } from 'react';

export const TopbarModal = ({ show, setShow, menuList }) => {

    const customStyles = {
        content: {
        top: '3vw',
        left: 'auto',
        right: '1vw',
        bottom: 'auto',
        gap: '1vw'
        },
    }

    Modal.setAppElement('body')

    return (
        <div className='TopbarModal-Component' >
            <Modal isOpen={show}
                style={customStyles}
                onRequestClose={() => setShow(false)}
                contentLabel="Example Modal"
            >
                {menuList.map(menu => {
                    return (
                        <div key={menu.text} className="menu-container" onClick={menu.onClick}>
                            <p>{menu.text}</p>
                            <hr />
                        </div>
                    )
                })}
            </Modal>
        </div>
    )
}