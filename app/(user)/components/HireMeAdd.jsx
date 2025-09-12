import React from 'react'
import formal from '@/public/images/formal.jpg'
import Link from 'next/link'
import Image from 'next/image'

const HireMeAdd = () => {
    return (
        <div className='hire-me-add w-100 my-5 rounded p-3'>
            <div className="row">
                <div className="col-12 col-md-2">
                    <div className="d-flex justify-content-center">
                        <Image height={300} width={300} className='rounded-circle' src={formal} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-10 m-auto">
                    <h5 className='mb-3 w-100 text-center text-lg-start py-3 py-md-0'>Do you want me to develop a website for you?</h5>
                    <Link href='/get_service' className="rounded white-btn d-inline-block py-1 px-3 text-center d-block d-md-inline">Yes, I want Arafat to develop my website</Link>
                </div>
            </div>
        </div>
    )
}

export default HireMeAdd