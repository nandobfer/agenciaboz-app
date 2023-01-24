import { Dialog } from '@mui/material';
import { useCustomers } from '../../hooks/useCustomers';
import { UserTag } from '../UserTag';
import './style.scss';

export const CustomerChooser = ({ showModal, setShowModal, choose }) => {

    const customers = useCustomers().value || JSON.parse(localStorage.getItem("customers"))

    const modal_style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const selectCustomer = (customer) => {
        choose(customer)
        setShowModal(false)
    }
    
    return (
        <div className='CustomerChooser-Component' >
            <Dialog keepMounted
                open={showModal}
                onClose={() => setShowModal(false)}
                sx={modal_style}>
                {customers.map(customer => {
                    return (
                        <div key={customer.id} className="member-container" onClick={() => selectCustomer(customer)}>
                            <UserTag customer={customer} />
                        </div>
                    )
                })}
            </Dialog>
        </div>
    )
}