import ReactLoading from 'react-loading';
import './style.scss';

export const Loading = ({ loading_state }) => {

    return (
        <div className='Loading-Component' style={!loading_state ? {display: 'none'} : null} >
			<ReactLoading className='loading' type={'spinningBubbles'} color={'#666'} height={'10%'} width={'10%'} />
        </div>
    )
}
