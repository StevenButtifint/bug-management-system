import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import {signIn} from '../../../Controllers/Redux/authSlice';

import './login.css'

export default () =>{
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name: "",
        password:""
    })

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }

    return(
        <div className="loginBG">
            <form className='login-panel'>
                <h3>Username</h3>
                <input name='name' placeholder='Username' onChange={inputChanged} value={formInput.name}></input>
                <h3>Password</h3>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button className='signup-button' type='submit' >Create Account</button>
                <button className='login-button' type='submit' onClick={submit}>Login</button>
            </form>
        </div>
    )
}