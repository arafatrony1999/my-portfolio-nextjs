// import CountUp from 'react-countup';

const AboutSection = async () => {

    const res = await fetch("https://portfolioapi.arafatrony.com/api/getAbout")
    const data = await res.json();
    
    return (
        <div className='about-section container w-full mx-auto'>
            {
                data.map((about, index) => {
                    return(
                        <div key={index} className="about-card my-2 mx-auto">
                            {/* <span><CountUp end={about.number} delay={2} />+</span> */}
                            <span>{about.number}+</span>
                            <span>{about.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AboutSection