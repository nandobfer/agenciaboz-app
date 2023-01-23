import { Dialog } from '@mui/material';
import { useTeam } from '../../hooks/useTeam';
import { UserTag } from '../UserTag';
import './style.scss';

export const TeamChooser = ({ showModal, setShowModal, choose, list }) => {

    const team = useTeam().value

    const modal_style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const selectUser = (user) => {
        choose([...list, user])
        setShowModal(false)
    }
    
    return (
        <div className='TeamChooser-Component' >
            <Dialog keepMounted
                open={showModal}
                onClose={() => setShowModal(false)}
                sx={modal_style}>
                {team.map(user => {
                    return (
                        <div key={user.id} className="member-container" onClick={() => selectUser(user)}>
                            <UserTag user={user} />
                        </div>
                    )
                })}
            </Dialog>
        </div>
    )
}