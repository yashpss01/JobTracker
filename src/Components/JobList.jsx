import JobCard from "./JobCard"
import "./JobCard.css"

export default function JobList({allJobs,onDelete}){
    return <div id='slot'>
    {allJobs.map((job)=>{
        return <JobCard  job={job} onDelete={onDelete}/>
    })}
    </div>
}