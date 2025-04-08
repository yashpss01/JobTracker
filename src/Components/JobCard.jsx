import './JobCard.css'

export default function JobCard({job,onDelete}){
    const getBackgroundColor = (status) => {
        if (status === 'Accepted') return '#d4edda';
        if (status === 'Rejected') return '#f8d7da';
        if (status === 'Interview') return '#d1ecf1';
        if (status === 'Applied') return '#fff3cd';
        return '#ffffff'; // default
      }



    return <div key = {job.id} className='card' style={{backgroundColor:getBackgroundColor(job.status)}}>
    <ul>
        <h3 className='company'>{job.company}</h3>
        <p className='role'>{job.role}</p>
        <p className='status '>{job.status}</p>
    </ul>
    <button className='dlt-btn' onClick={()=>{onDelete(job.id)}}>Delete</button>
</div>
}