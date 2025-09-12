"use client"

import React, { useState } from 'react'
import BigText from './BigText'
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsEnvelope, BsTwitter, BsWhatsapp } from "react-icons/bs";

const ContactSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('message', message)

        fetch("https://portfolioapi.arafatrony.com/api/addContact", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: (JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message
            }))
        })
        .then((res) => res.json())
        .then((data) => {
            if(data === 1){
                toast.success('Your message has been recorded. Will notify you soon!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
            }else{
                toast.error('Something went wrong! Please try again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        })
        .catch((error) => {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }

    return (
        <div className='pricing-section' id='contacts'>
            <BigText big='CONTACT' normal='GET A FREE' colored='CONSULTANT' />

            <div className="container skills-section">
                <div className="contact-left d-flex flex-wrap">
                    <div className="py-3 w-100 d-flex">
                        <FaMapMarkerAlt />
                        <div className="contact-details">
                            <h4>Address</h4>
                            <p>43/3 Lalbagh, Dhaka 1205</p>
                        </div>
                    </div>
                    <div className="py-3 w-100 d-flex">
                        <FaRegEnvelope />
                        <div className="contact-details">
                            <h4>Email</h4>
                            <p>arafat.rony1999@gmail.com</p>
                        </div>
                    </div>
                    <div className="py-3 w-100 d-flex">
                        <FaPhoneAlt />
                        <div className="contact-details">
                            <h4>Phone</h4>
                            <p>+880 1879 923111</p>
                        </div>
                    </div>

                    <div className="social-buttons my-4">
                        <div className="products-others-right">
                            <a href="https://www.facebook.com/arafatrony1999" target='_blank' rel='noreferrer' style={{background: "#2D4373"}}><FaFacebookF /></a>
                            <a href="mailto:arafat.rony1999@gmail.com" style={{background: "#0E76E6"}}><BsEnvelope /></a>
                            <a href="https://twitter.com/ArafatRony1999" target='_blank' rel='noreferrer' style={{background: "#0087BA"}}><BsTwitter /></a>
                            <a href="https://www.linkedin.com/in/arafatrony1999/" target='_blank' rel='noreferrer' style={{background: "#005983"}}><FaLinkedinIn /></a>
                            <a href="https://api.whatsapp.com/send?phone=+8801879923111" target='_blank' rel='noreferrer' style={{background: "#1F7D1E"}}><BsWhatsapp /></a>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <form onSubmit={onSubmit} className="w-100">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name...' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Your Email...' />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Enter Your Phone Number...' />
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Write Your Message...'></textarea>
                        <button type='submit' className="my-btn white-btn m-0 my-3">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection