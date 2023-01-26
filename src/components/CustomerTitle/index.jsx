import './style.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const CustomerTitle = ({ customer, tasks, open }) => {
    
    return (
        <div className='CustomerTitle-Component' >
            { open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon /> }
            { customer ? 
                <h1>{customer.company} / <span>{tasks.length} elemento{tasks.length > 1 ? 's' : null}</span></h1>
            : <h1>Completadas / <span>{tasks.length} elemento{tasks.length > 1 ? 's' : null}</span></h1>
            }
        </div>
    )
}