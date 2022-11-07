import React from 'react'

const GalleryBox = (props) => {
    return (
        <li>
            <div className='gallery_list_box'>
                <div className='gallery_list_box_title'>
                    {props.title}
                </div>
                <div className='gallery_list_box_title'>
                    <b>{props.subTitle}</b>
                </div>
                <div className='gallery_list_box_text'>
                    {props.text} <br/>
                    {props.text2}
                </div>
            </div>
        </li>
    )
}

export default GalleryBox