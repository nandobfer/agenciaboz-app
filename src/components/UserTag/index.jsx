import './style.scss';
import { ReactComponent as UserIcon } from '../../icons/userIcon.svg';

export const UserTag = ({ user, customer, onClick }) => {
    
    return (
        <div className='UserTag-Component' onClick={() => onClick()} >
            <UserIcon />
            <p>{user ? user.name : customer ? customer.company : null}</p>
        </div>
    )
}