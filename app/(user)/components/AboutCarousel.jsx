"use client"
import Slider from "react-slick";

const AboutCarousel = () => {

    const res = fetch('https://portfolioapi.arafatrony.com/api/getExperience', {cache: 'no-store'});
    const experience = res.json();

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    };
    
    return (
        <div style={{height: '100px'}} className="about-carousel w-100 overflow-hidden py-2">
            <Slider {...settings}>
                {
                    experience.map((experience, index) => {
                        return(
                            <div key={index}>
                                <Image height={50} width={50} src={experience.image} alt="Experience" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default AboutCarousel