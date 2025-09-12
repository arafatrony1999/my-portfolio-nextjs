import React from 'react'

const SmallTitle = (props) => {
    return (
        <div className='small-title'>
            {props.normal} <span className='colored-span'>{props.colored}</span>
        </div>
    )
}

export default SmallTitle