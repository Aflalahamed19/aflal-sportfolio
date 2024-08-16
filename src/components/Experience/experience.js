import React from 'react'
import './experience.css'
// import WebDesign from '../../assets/website-design.png'
// import AppDesign from '../../assets/app-design.png'
import HashnateLogo from '../../assets/hashnatelg.jpeg'

const Experience = () => {
  return (
    <section id='experiences'>
    <span className='experienceTitle'>Experience</span>
    <span className='experienceDecs'>I am well expreance in a software engineering feild. i am doing for website design, app design and UI/UX design such as a relavant feild . i ahave a good expreqanced in the mysql oracle etc.</span>
<div className='experienceBars'>
    
    <div className='experienceBar'>
        <img src={HashnateLogo} alt='HashnateLogo' className='experienceBarImg'/>
        <div className='experienceBarText'>
            <h2>Hashnate Software Company</h2>
            <h4>Intern Software Engineer</h4>
            <p>As a Software Engineer Intern at Hashnate, I contributed to various projects, 
                gaining valuable experience in the software development lifecycle. 
                I played a key role in designing, developing, and deploying impactful projects,
                showcasing strong problem-solving abilities and effective teamwork. </p>
        </div>
    </div>

    {/* <div className='experienceBar'>
        <img src={WebDesign} alt='WebDesign' className='experienceBarImg'/>
        <div className='experienceBarText'>
            <h2>Website Design</h2>
            <p>This a demo Text,you can write your own content</p>
        </div>
    </div>

    <div className='experienceBar'>
        <img src={AppDesign} alt='AppDesign' className='experienceBarImg'/>
        <div className='experienceBarText'>
            <h2>App Design</h2>
            <p>This a demo Text,you can write your own content</p>
        </div>
    </div> */}

</div>
</section>
  )
}

export default Experience