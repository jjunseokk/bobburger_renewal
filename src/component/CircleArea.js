import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const CircleArea = (props) => {
    return (
        <div className='circle-area'>
            <div className='circle-icon'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default CircleArea