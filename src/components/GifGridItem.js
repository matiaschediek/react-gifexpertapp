import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id,title,url}) => {
    return (
        <div className='card animate__animated animate__fadeIn '>
            
            <img id={id} title={title} src={url} alt='{title}'></img>
            <p>{title}</p>
        </div>
    )
}


export default GifGridItem
