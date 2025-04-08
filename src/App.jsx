import { useState } from 'react'
import DarkModeToggle from './Components/DarkModeToggle'
import JobList from './Components/JobList'
import JobForm from './Components/JobForm'
// import JobCard from './Components/JobCard'
import './App.css'

function App() {
  const [allJobs,setAllJobs] = useState(()=>{
    const storedJobs=localStorage.getItem('jobs');
    return storedJobs? JSON.parse(storedJobs):[];
  });

  function handleDelete(id){
    const updatedJobs= allJobs.filter((job)=>job.id!==id);
    setAllJobs(updatedJobs);
    localStorage.setItem("jobs",JSON.stringify(updatedJobs));
  }
  function handleAddJobs(newJob){
    const updatedJobs=[...allJobs,newJob];
    setAllJobs(updatedJobs);
    localStorage.setItem("jobs",JSON.stringify(updatedJobs));
  }
  
  return (
    <>
      <header className='heading'>Job Trackr</header>
      
      <JobForm className='form' onAddJob={handleAddJobs} allJobs={allJobs}/>
      <JobList className='allcards' allJobs={allJobs} onDelete={handleDelete}/>
    </>
  )
}

export default App;
