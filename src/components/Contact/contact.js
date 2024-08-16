import React, { useRef } from 'react'
import './contact.css'
// import walmart from '../../assets/walmart.png'
// import facebook from '../../assets/facebook.png'
// import adobe from '../../assets/adobe.png'
// import microsoft from '../../assets/microsoft.png'
import FacebookIcon from '../../assets/FacebookIcon.png'
import InstagramIcon from '../../assets/InstagramIcon.png'
import XIcon from '../../assets/XIcon.png'
import WhatsappIcon from '../../assets/WhatsappIcon.png'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zl2lyce', 'template_ovf95dw', form.current, 'i1WT44H5K47wIyy9d')
      .then ((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Send !');
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    
    <section id='contactPage'>
      <div id='clients'>
        {/* <h1 className='contactPageTitle'> My Clients</h1>
        <p className='clientDesc'>
          I have had the oportunity to work with a diverse group of companies.
          some of the notable companies I have worked with includes 
        </p>
        <div className='clientImgs'>
          <img src={walmart} alt='' className='clientImg'/>
          <img src={adobe} alt='' className='clientImg'/>
          <img src={microsoft} alt='' className='clientImg'/>
          <img src={facebook} alt='' className='clientImg'/>
        </div> */}
      </div>

      <div className='Contact'>
        
        
        <h1 className='contactPageTitle'>Contact Me</h1>

        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>

        <form className='contactForm' ref={form}  onSubmit={sendEmail} >

          <input type='text' className='name' placeholder='Your Name' name='your_name' required/>
          <input type='email' className='email' placeholder='Your Email' name='your_email' required/>
          <textarea className='msg' rows='5' placeholder='Your Message' required></textarea>

          <button type='submit' value='Send' className='submitBtn'  style={{ cursor: 'pointer' }} >Submit</button>


          <div className='links'>

          <a href='https://www.linkedin.com/in/aflal-ahamed-0bb645205' target='_blank' rel='noopener noreferrer'> 
            <img src={linkedinIcon} alt='Whatsapp' className='link' />
            </a>

            <a href='https://github.com/Aflalahamed19' target='_blank' rel='noopener noreferrer'> 
            <img src={githubIcon} alt='Whatsapp' className='link' />
            </a>

            <a href='http://wa.me/94767104890' target='_blank' rel='noopener noreferrer'> 
            <img src={WhatsappIcon} alt='Whatsapp' className='link' />
            </a>

            <a href='https://www.instagram.com/aflal.ahamed.19/' target='_blank' rel='noopener noreferrer'>
            <img src={InstagramIcon} alt='Instagram' className='link' />
            </a>
            
            <a href='https://twitter.com/ahamed_adolf?t=z0H-7fAQ8lGk0WjQWVdtWg&s=09' target='_blank' rel='noopener noreferrer'>
            <img src={XIcon} alt='X' className='link' />
            </a>

          <a href='https://web.facebook.com/adolflal' target='_blank' rel='noopener noreferrer'>
            <img src={FacebookIcon} alt='Facebook' className='link' />
            </a>
            

           
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact