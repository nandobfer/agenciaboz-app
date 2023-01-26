import { Dialog } from '@mui/material';
import ReactModal from 'react-modal';
import { useTeam } from '../../hooks/useTeam';
import { UserTag } from '../UserTag';
import './style.scss';

export const TeamChooser = ({ showModal, setShowModal, choose, list }) => {

    const team = useTeam().value || JSON.parse(localStorage.getItem("team"))

    const customStyles = {
        content: {
            flexDirection: 'column',
            top: '10vw',
            left: 'auto',
            right: '8vw',
            bottom: 'auto',
            gap: '1vw'
        },
        overlay: {
            // backgroundColor: 'unset!important'
            display: 'contents'
        }
    }

    const selectUser = (user) => {
        choose([...list, user])
        setShowModal(false)
    }
    
    return (
        <div className='TeamChooser-Component' >
            <ReactModal isOpen={showModal}
                style={customStyles}
                onRequestClose={() => setShowModal(false)}
            >
                {team.map(user => {
                    return (
                        <div key={user.id} className="member-container" onClick={() => selectUser(user)}>
                            <UserTag user={user} />
                        </div>
                    )
                })}
            </ReactModal>
        </div>
    )
}