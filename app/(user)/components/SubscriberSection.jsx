"use client"

import React, { useEffect, useState } from 'react'
// import { useSubscriberContext } from '../../context/SubscriberContext'
import { toast } from 'react-toastify'

const SubscriberSection = () => {
    // const { exist, success, addSubscriber } = useSubscriberContext()

    const [email, setEmail] = useState('')

    // useEffect(() => {
    //     if(success){
    //         toast.success('Your email has been added to subscribers list!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //         });

    //         setEmail('')
    //     }

    //     if(exist){
    //         toast.warn('This email address is already exist in subscriber list and receiving emails!', {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //         });
    //     }
    // }, [success, exist])

    const onSubmit = (e) => {
        e.preventDefault()

        addSubscriber(email)
    }

    return (
        <div className='container skills-section d-block py-5'>
            <h2 className='text-center'>Subscribed To Get Weekly Updates</h2>
            
            <div className="subscribe-form mt-5">
                <form onSubmit={onSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email address...' />
                    <button className='my-btn m-0'> SUBSCRIBE </button>

                    {/* {exist && <div className="text-danger">This email address is already exist in subscriber list and receiving emails!</div>}
                    {success && <div className="text-success">Your email has been added to subscribers list! You'll get regular updates.</div>} */}
                </form>
            </div>
        </div>
    )
}

export default SubscriberSection