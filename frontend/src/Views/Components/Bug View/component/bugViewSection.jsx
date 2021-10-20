import React from "react";
import './bugViewSection.css'

export default(props)=>{
    return(
        <div className='view-section'>
            <div className='view-section-title'>{props.title}</div>
            <div className='view-section-desc'>{props.info}</div>
        </div>
    )
}