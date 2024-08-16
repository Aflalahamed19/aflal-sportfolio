import React from 'react'
import './education.css'
import openUni from '../../assets/openunilogo.png'
import aatLogo from '../../assets/aatlogo.png'
import ATILogo from '../../assets/atilogo.jpeg'

const Education = () => {
  return (
    <section id='educations'>
    <span className='educationTitle'>Education</span>
    <span className='educationDecs'> </span>
<div className='educationBars'>
    
    <div className='educationBar'>
        <img src={ATILogo} alt='HashnateLogo' className='educationBarImg'/>
        <div className='educationBarText'>
            <h2>Higher National Diploma in Information Technology</h2>
            <p> Sri Lanka Institute of Advanced Technological Education (SLIATE) <br/> 2021 - 2023 </p>
        </div>
    </div>

    <div className='educationBar'>
        <img src={openUni} alt='WebDesign' className='educationBarImg'/>
        <div className='educationBarText'>
            <h2>Bachelor of Software Engineering Honors</h2>
            <p>Open University of Sri Lanka (OUSL) <br/> 2021 - 2025</p>
        </div>
    </div>

    <div className='educationBar'>
        <img src={aatLogo} alt='AppDesign' className='educationBarImg'/>
        <div className='educationBarText'>
            <h2>Association of Accounting Technicians</h2>
            <p> Association of Accounting Technicians, a global professional body for accounting technicians and bookkeepers. The AAT is headquartered in the UK and offers finance and accounting qualifications.<br/><b>Level 3(R)</b></p>
        </div>
    </div>

</div>
</section>
  )
}

export default Education