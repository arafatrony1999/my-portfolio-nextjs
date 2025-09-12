import React from 'react'
import BigText from './BigText'
import service1 from '@/public/images/service1.png'
import service2 from '@/public/images/service2.png'
import service3 from '@/public/images/service3.png'
import OnlyWhiteBtn from './OnlyWhiteBtn'
import Image from 'next/image'

const ServicesSection = () => {
    return (
        <div className='services-section py-4 px-3'>
            <BigText className="py-3" txtColor='white' big='SERVICES' normal='SERVICES' colored='PROVIDED' />

            <div className="skills-section mx-auto">
                <div className="services-cards w-100 d-flex justify-content-between flex-wrap">
                    <div className="service-card">
                        <Image className='img-fluid' src={service1} alt="" />
                        <h3 className='text-center py-3'>UI / UX DESIGN</h3>
                        <div className="service-details">
                            From an eye-catching logo to a user-friendly and intuitive interface, design is regarded to be the most significant part of any organization. I provide a wide range of creative services. Just say it in my ear, and I'll take care of the rest.
                        </div>
                    </div>
                    <div className="service-card">
                        <Image className='img-fluid' src={service2} alt="" />
                        <h3 className='text-center py-3'>Web Development</h3>
                        <div className="service-details">
                            I'll create a website for your little or large business, whether it's for Ecommerce, Product Customizer, or WordPress. I will create a website using custom or theme-based solutions while staying within your budget.
                        </div>
                    </div>
                    <div className="service-card">
                        <Image className='img-fluid' src={service3} alt="" />
                        <h3 className='text-center py-3'>Custom Service</h3>
                        <div className="service-details">
                            I'll make changes to your website and delete or add functionality as needed. I can create and customize websites using WordPress, Laravel, Codeigniter, and any other PHP framework. Within 24 hours, I will provide you with a solution.
                        </div>
                    </div>
                </div>
                <div className="text-center w-100 my-4 py-5">
                    <OnlyWhiteBtn btnText='Get a service' btnLink='/get_service' />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection