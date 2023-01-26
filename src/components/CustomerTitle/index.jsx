import './style.scss';

export const CustomerTitle = ({ customer, tasks }) => {
    
    return (
        <div className='CustomerTitle-Component' >
            <h4>{customer.company} / <span>{tasks.length} elemento{tasks.length > 1 ? 's' : null}</span></h4>
        </div>
    )
}