const SkillsSection = async () => {

    const res = await fetch("https://portfolioapi.arafatrony.com/api/getSkills")
    const skills = await res.json();

    return (
        <div className='container skills-section py-5'>
            {
                skills.map((skill, index) => {
                    return(
                        <div className="skill" key={index}>
                            <div className="skill-title w-full flex justify-between">
                                <span>{skill.name}</span>
                                <span>{skill.percent}%</span>
                            </div>
                            <div className="progress-bar w-full">
                                <div style={{width: `${skill.percent}%`}} className="progress-bar-inner"></div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
        </div>
    )
}

export default SkillsSection