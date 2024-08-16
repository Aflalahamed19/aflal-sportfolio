import React from 'react';
import './intro.css';
import bg from '../../assets/bg_2.png';
import btnImg from '../../assets/download.png';

const Intro = () => {
    return ( 
      <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Aflal Ahamed</span> <br/>  Software Engineer</span>
          <p className='introPara'>
            an enthusiastic and dedicated Software Engineer at the beginning of my career. 
            <br/>I have hands-on experience in developing web applications and websites, focusing 
            <br/>on both frontend and backend technologies. I'm continually honing my skills through 
            <br/>real-world projects and practical experience.
          </p>

          <a 
            href="https://drive.google.com/file/d/1-65ChEz7iptd4TWsjgHxu_aBjCwdD3ZL/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className='btn'>
              <img src={btnImg} className='btnImg' alt='Download Resume' />
              Download Resume
            </button>
          </a>
        </div>
        <img src={bg} alt='background' className='bg'/>
      </section>
    );
}

export default Intro;
