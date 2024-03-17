import React from 'react'
import './VisitButton.scss'
const VisitButton = ({icon, text}) => {
    return (
        <div className='visitButton'>
            <button><i>{icon}</i><label>{text}</label></button>
        </div>
    )
}

export default VisitButton