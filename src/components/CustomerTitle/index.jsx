import './style.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const CustomerTitle = ({ customer, tasks, open }) => {
    
    return (
        <div className='CustomerTitle-Component' >
            { open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon /> }
            { customer ? 
                <h4>{customer.company} / <span>{tasks.length} elemento{tasks.length > 1 ? 's' : null}</span></h4>
            : <h4>Completadas / <span>{tasks.length} elemento{tasks.length > 1 ? 's' : null}</span></h4>
            }
        </div>
    )
}