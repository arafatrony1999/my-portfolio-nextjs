import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import DateFormat from './/DateFormat'

const Experience = async () => {

    const res = await fetch('https://portfolioapi.arafatrony.com/api/getExperience', {cache: 'no-store'});
    const experience = await res.json();

    return (
        <div className='container skills-section py-5'>
            <div className="d-flex justify-content-between flex-wrap w-100">
                {
                    experience.map((experience, index) => {
                        return(
                            <div key={index} className="col-12 col-md-6 d-flex my-2">
                                <div className="experience-left">
                                    {
                                        experience.type === 'job' ?
                                        <>
                                            <div>
                                                <FaBriefcase />
                                            </div>
                                        </> :
                                        <>
                                            <div style={{background: '#F06233'}}>
                                                <FaGraduationCap />
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="experience-right">
                                    <h5>
                                        <a href={experience.site} target="_blank" rel="noopener noreferrer">{experience.company}</a>
                                    </h5>
                                    <p>
                                        {experience.description} (<DateFormat date={experience.start} /> - {experience.end ? <DateFormat date={experience.end} /> : 'Running...'})
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className="col-12 col-md-6 d-flex my-2">
                    <div className="experience-left">
                        <div>
                            <FaBriefcase />
                        </div>
                    </div>
                    <div className="experience-right">
                        <h5>
                            <a href='http://' target="_blank" rel="noopener noreferrer">ARFAJBD.COM</a>
                        </h5>
                        <p>Co-founder & Developer</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex my-2">
                    <div className="experience-left">
                        <div>
                            <FaBriefcase />
                        </div>
                    </div>
                    <div className="experience-right">
                        <h5>APONSEBA HOMECARE SERVICE</h5>
                        <p>IT Consultant at Aponseba Homecare Service (01 April, 2020 - 30 September, 2022)</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex my-2">
                    <div className="experience-left">
                        <div style={{background: '#F06233'}}>
                            <FaGraduationCap />
                        </div>
                    </div>
                    <div className="experience-right">
                        <h5>JAGATPUR HIGH SCHOOL</h5>
                        <p>Completed SSC (Science) from Jagatpur High School (01 January, 2010 - 31 March, 2015)</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex my-2">
                    <div className="experience-left">
                        <div style={{background: '#F06233'}}>
                            <FaGraduationCap />
                        </div>
                    </div>
                    <div className="experience-right">
                        <h5>HAJIGONJ MODEL GOVT. COLLEGE</h5>
                        <p>Completed HSC (Science) from Hajigonj Model Govt. College (08 July, 2015 - 31 May, 2017)</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex my-2">
                    <div className="experience-left">
                        <div style={{background: '#F06233'}}>
                            <FaGraduationCap />
                        </div>
                    </div>
                    <div className="experience-right">
                        <h5>DHAKA COLLEGE BSc</h5>
                        <p>Bachelor of Science in Mathematics (03 March, 2018 - 15 September, 2022)</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex my-2">
                    <div className="experience-left">
                        <div style={{background: '#F06233'}}>
                            <FaGraduationCap />
                        </div>
                    </div>
                    <div className="experience-right">
                        <h5>DHAKA COLLEGE MSc</h5>
                        <p>Master of Science in Mathematics (15 March, 2023 - Running...)</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Experience