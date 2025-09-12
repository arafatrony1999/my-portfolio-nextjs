import React from 'react'

const SmallText = (props) => {
    return (
        <div className={props.txtColor === 'white' ? "small-text text-white" : "small-text"}>
            {props.normal} <span className={props.txtColor === 'white' ? 'colored-span text-white' : 'colored-span'}>{props.colored}</span>
        </div>
    )
}

export default SmallText