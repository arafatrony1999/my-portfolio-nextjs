import React from 'react';
import logo from '@/public/images/formal.jpg';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsEnvelope, BsTwitter, BsWhatsapp } from "react-icons/bs";

const HomepageIntro = () => {
    return (
        <div className='homepage-intro-container'>
        <div className="social-buttons my-4 d-flex justify-content-center">
            <div className="products-others-right">
                <a href="https://www.facebook.com/arafatrony1999" target='_blank' rel='noreferrer' style={{background: "#2D4373"}}><FaFacebookF /></a>
                <a href="mailto:arafat.rony1999@gmail.com" style={{background: "#0E76E6"}}><BsEnvelope /></a>
                <a href="https://twitter.com/ArafatRony1999" target='_blank' rel='noreferrer' style={{background: "#0087BA"}}><BsTwitter /></a>
                <a href="https://www.linkedin.com/in/arafatrony1999/" target='_blank' rel='noreferrer' style={{background: "#005983"}}><FaLinkedinIn /></a>
                <a href="https://api.whatsapp.com/send?phone=01879923111" target='_blank' rel='noreferrer' style={{background: "#1F7D1E"}}><BsWhatsapp /></a>
            </div>
        </div>
            <div className="homepage-intro">
                <div className="intro-image">
                    <Image className='img-fluid' height={500} width={500} src={logo} alt="Arafat Rony" />
                </div>
                <p>
                    {/* I'm <strong>Arafat Rony,</strong> a tech enthusiast with expertise in a range of front-end and back-end technologies. I have experience designing, developing, and maintaining small and enterprise-level applications using various development tools and languages to meet the unique project requirements. I have worked on a variety of projects, including web banking, social projects, multivendor e-commerce, LMS, affiliate blogs, startups, SAAS solutions, and web apps. I'm here to empower each other to create a better future whether you're searching for long-term sustainability, performance, security, or influence. */}
                    Hi, I’m <strong>Arafat Rony,</strong> — a full-time banker and a passionate part-time full-stack web developer. While I spend my days navigating the world of finance, I dedicate my off-hours to exploring my long-time hobby: building powerful, user-centric digital experiences.

                    With expertise in both front-end and back-end technologies, I design, develop, and maintain everything from small tools to enterprise-level applications. My work spans a wide range of industries and platforms, including web banking systems, social projects, multivendor e-commerce, LMS platforms, affiliate blogs, startups, SaaS solutions, and web apps.

                    Whether you're focused on long-term sustainability, performance, security, or impact, I’m here to collaborate and empower innovation—one line of code at a time.
                </p>
            </div>
        </div>
    );
}

export default HomepageIntro;