import React from 'react'
import BlackBtn from './BlackBtn'
import WhiteBtn from './WhiteBtn'

const IntroBtns = () => {
    return (
        <div className='intro-btns'>
            <BlackBtn />
            <WhiteBtn btnLink='/get_service' btnText='Hire me now' />
        </div>
    )
}

export default IntroBtns