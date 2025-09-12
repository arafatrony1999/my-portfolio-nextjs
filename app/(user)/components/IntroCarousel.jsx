"use client";

import Slider from "react-slick";

const IntroCarousel = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className='intro-carousel'>
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>Frontend & Backend Development</h3>
                    </div>
                    <div>
                        <h3>Web Development & Design</h3>
                    </div>
                    <div>
                        <h3>API Integration & Development</h3>
                    </div>
                    <div>
                        <h3>Wordpress & E-commerce Store</h3>
                    </div>
                    <div>
                        <h3>Affiliate Blog & Business Website</h3>
                    </div>
                    <div>
                        <h3>SAAS Product and Web Application</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default IntroCarousel;