import React,{useState} from 'react'
import BugModel from '../../../Models/bugModel'
import './bugForm.css'

export default (props)=>{
    const [bugObject,setBugObject] = useState(new BugModel(props.bug))

    function inputChanged(e){
        setBugObject({
            ...bugObject,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div className='bug-create'>
            {props.title =="Edit Bug" &&<button className='close-btn' onClick={props.close}>Close</button>}
            <h1>Create Bug Record</h1>
            <form>
                <label>Name:</label>
                <input name='name' placeholder='Bug Name' required onChange={inputChanged} value={bugObject.name}></input>
                <label>Details:</label>
                <textarea name='details' placeholder='Description of bug' required onChange={inputChanged} value={bugObject.details}></textarea>
                <label>Steps:</label>
                <textarea name='steps' placeholder='Steps to recreate bug' required  onChange={inputChanged} value={bugObject.steps}></textarea>
                <label>Priority:</label>
                <select name='priority' required onChange={inputChanged} value={bugObject.priority}>
                    <option value='1'>High</option>
                    <option value='2'>Mid</option>
                    <option value='3'>Low</option>
                </select>
                <label>Assigned to:</label>
                <select name='assigned' onChange={inputChanged} value={bugObject.assigned}>
                    <option>Staff Member</option>
                </select>
                <label>App Version:</label>
                <input name='version' placeholder='Application Version' onChange={inputChanged} value={bugObject.version}></input>
                <button type='submit'>{props.title}</button>
            </form>
        </div>
    )
}
/*  {props.title} was in h1*/