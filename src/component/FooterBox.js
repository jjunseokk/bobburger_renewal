import React from 'react'

const FooterBox = (props) => {
    return (
        <div className='box'>
            <img src={props.img} alt="" />
            <p>{props.text} <br />{props.text2}</p>
        </div>
    )
}

export default FooterBox