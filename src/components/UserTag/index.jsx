import './style.scss';
import { ReactComponent as UserIcon } from '../../icons/userIcon.svg';

export const UserTag = ({ user }) => {
    
    return (
        <div className='UserTag-Component' >
            <UserIcon />
            <p>{user.name}</p>
        </div>
    )
}