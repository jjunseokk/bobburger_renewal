import React from 'react'

const FooterBox = (props) => {
    return (
        <div className='box'>
            <img src={process.env.PUBLIC_URL + props.img} alt="" />
            <p>{props.text} <br />{props.text2}</p>
        </div>
    )
}

export default FooterBox