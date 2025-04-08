import { useState } from "react"
import './JobForm.css'

export default function JobForm({onAddJob}){
    
    const[company,setCompany] = useState('');
    const [role,setRole]= useState('');
    const [status,setStatus] = useState("Applied");

    function handlerSubmit(e){
        e.preventDefault();
        const newJob={
            id:Date.now(),company,role,status
        };
        onAddJob(newJob);
        
        setCompany('');
        setRole('');
        setStatus("Applied");
    }

    return <div className="form">
    <form action="GET" onSubmit={handlerSubmit}>
        <div id='secs'>
        <label className="labels" htmlFor="company">Enter company's name:</label>
        <input className="inputs" type="text" placeholder="Company's Name" id='company' value={company} onChange={(e) => {setCompany(e.target.value);}}></input></div>

        <div id='secs'>
        <label className="labels" htmlFor="role">Enter your role:</label>
        <input className="inputs" type="text" placeholder="Your Role" id='role' value={role} onChange={(e) => {setRole(e.target.value);}}></input></div>
        <div id='secs'>
        <label className="labels" htmlFor="status">What's your status?</label>
        <select className="inputs" id='status' value={status} onChange={(e) => {setStatus(e.target.value);}}>
            <option value="Accepted" htmlFor='status'>Accepted</option>
            <option value="Applied" htmlFor='status'>Applied</option>
            <option value="Interview" htmlFor='status'>Interview</option>
            <option value="Rejected" htmlFor='status'>Rejected</option>
        </select></div>
        
        
        <button id='btn' type="submit">Finish Here</button>

    </form>
    </div>
}