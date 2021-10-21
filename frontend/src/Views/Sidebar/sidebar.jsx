import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {signOut} from '../../Controllers/Redux/authSlice'

import dashboardIcon from '../../Images/icons/dashboard_icon.png'
import viewIcon from '../../Images/icons/view_icon.png'
import createIcon from '../../Images/icons/create_icon.png'

import './sidebar.css'

export default ()=>{
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state)

    function SignOut(){
        dispatch(signOut());
    }

    return(
        <div className="sidebar">
            <Link className='nav-link' to="/"><h1 className='brand'>BUG MANAGMENT SYSTEM</h1></Link>
            <ul>
                <li>
                    <Link to='/' className='nav-link'>
                    <img className='icons' src={dashboardIcon} />
                        <div className='icon-label'> Dashboard</div>
                    </Link>
                </li>
                <li>
                    <Link to='/viewbugs' className='nav-link'>
                        <img className='icons' src={viewIcon} />
                        <div className='icon-label' > View Bugs </div>
                    </Link>
                </li>
                {auth.admin && 
                    <li>
                        <Link to='/create' className='nav-link'>
                            <img className='icons' src={createIcon} />
                            <div className='icon-label'> Create Bug</div>
                        </Link>
                    </li>
                }
            </ul>
            <button className='nav-link-logout' onClick={SignOut}>Logout</button>
        </div>
    )
}
//{auth.admin && <li><Link to='/create' className='nav-link'>Create Bug</Link></li>}
//only display if user is admin