import './style.scss';
import { ReactComponent as UserIcon } from '../../icons/userIcon.svg';

export const UserTag = ({ user, customer }) => {
    
    return (
        <div className='UserTag-Component' >
            <UserIcon />
            <p>{user ? user.name : customer ? customer.company : null}</p>
        </div>
    )
}