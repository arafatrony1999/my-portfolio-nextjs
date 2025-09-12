"use client"

import { createRef } from 'react'
import quotation from '@/public/images/quotation.png'
import { Rating } from '@mui/material'
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export default function ClientTestemonialsSection(props) {
    const customSlider = createRef(Slider);

    const gotoNext = () => {
        customSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customSlider.current.slickPrev()
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    };

    return (
        <>

            <div className="container skills-section my-5">
                <div className="w-100 overflow-visible position-relative">
                    {
                        props.testimonials &&
                        <div className="testimonial-buttons">
                            <button onClick={() => gotoPrev()}>
                                <BsArrowLeftShort />
                            </button>
                            <button onClick={() => gotoNext()}>
                                <BsArrowRightShort />
                            </button>
                        </div>
                    }
                    
                    <Slider {...settings} ref={customSlider}>
                        {
                            props.testimonials.map((testimonial, index) => {
                                return(
                                    <div key={index} className='d-flex flex-wrap justify-content-between single-slider'>
                                        <div className="testimonial-left">
                                            <div className="w-100 d-flex justify-content-center">
                                                <img src={testimonial.image} className='img-fluid mb-4' alt="" />
                                            </div>
                                            <div className="py-4">
                                                <h5 className='text-truncate'>{testimonial.company}</h5>
                                                <h3 className='text-truncate' style={{color: '#F06233'}}>{testimonial.name}</h3>
                                                <strong className='text-truncate'>{testimonial.designation}</strong>
                                            </div>
                                        </div>
            
                                        <div className="testimonial-middle">
                                            <div className="line"></div>
                                        </div>
            
                                        <div className="testimonial-right">
                                            <div className="testimonial-right-top">
                                                <img className='img-fluid' src={quotation} alt="" />
                                            </div>
                                            <div className="testimonial-right-bottom">
                                                <div className="row d-flex flex-wrap justify-content-between border-bottom">
                                                    <div className="col-12 col-md-8">
                                                        <h3>{testimonial.title}</h3>
                                                        <p style={{color: '#F06233'}} className="text-truncate">
                                                            via {testimonial.via}, {testimonial.start} - {testimonial.end}
                                                        </p>
                                                    </div>
                                                    <div className="rounded col-12 col-md-4 rating-stars">
                                                        <Rating name="half-rating-read" defaultValue={parseFloat(testimonial.rating)} precision={0.5} readOnly />
                                                    </div>
                                                </div>
            
                                                <p className='py-3'>
                                                    {testimonial.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

            </div>
        </>
    )
}
