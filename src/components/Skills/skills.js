import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillsTitle'>What I do</span>
        <span className='skillsDesc'> I specialize in designing and developing web applications and websites, with a strong focus on both frontend and backend technologies. My work involves building dynamic, user-friendly interfaces and robust backend systems that meet the needs of modern businesses.</span>
    <div className='skillsBars'>
        
        <div className='skillsBar'>
            <img src={UIDesign} alt='UIDesign' className='skillsBarImg'/>
            <div className='skillsBarText'>
                <h2>Web Development</h2>
                <p>I create responsive, visually appealing websites using technologies like ReactJS, HTML, CSS, and Bootstrap.</p>
            </div>
        </div>

        <div className='skillsBar'>
            <img src={WebDesign} alt='WebDesign' className='skillsBarImg'/>
            <div className='skillsBarText'>
                <h2>Backend Development</h2>
                <p>I design and implement efficient backend systems using Python, Flask, Firebase, and various SQL and NoSQL databases.</p>
            </div>
        </div>

        <div className='skillsBar'>
            <img src={AppDesign} alt='AppDesign' className='skillsBarImg'/>
            <div className='skillsBarText'>
                <h2>Project Collaboration</h2>
                <p> I work closely with teams to deliver high-impact projects on time, ensuring seamless integration between frontend and backend components.</p>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Skills