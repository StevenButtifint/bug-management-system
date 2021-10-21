import React from "react";
import Priority from '../../../Controllers/priorityController'

import './card.css'

export default (props)=>{
    const {level,color} = Priority(props.priority);


    return(
        <div className='dashboard-card' onClick={props.clicked} style={{color: color}}>
            <h2>{level}</h2>
            <h3> Priority Bugs </h3>
            <p>{props.count}</p>
        </div>
    )
}