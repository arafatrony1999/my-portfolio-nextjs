import React from 'react'
import SmallText from './SmallText'

const BigText = (props) => {
    return (
        <div className={props.txtColor === 'white' ? 'big-text text-center text-white' : 'big-text text-center'}>
            <p className='big-text-p'>{props.big}</p>
            <SmallText txtColor={props.txtColor} normal={props.normal} colored={props.colored} />
        </div>
    )
}

export default BigText