import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png' 
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className='worksDesc'>I work for excelent for my works in the website for software engineering. This not a lie this my confidence so work hard gain top level inthe world no 1 place in the world </span>
      
      <div className='worksImgs'>
        <img src={portfolio1} alt='' className='worksImg'></img>
        <img src={portfolio2} alt='' className='worksImg'></img>
        <img src={portfolio3} alt='' className='worksImg'></img>
        <img src={portfolio4} alt='' className='worksImg'></img>
        <img src={portfolio5} alt='' className='worksImg'></img>
        <img src={portfolio6} alt='' className='worksImg'></img>
      </div>

      <button className='worksBtn' style={{ cursor: 'pointer' }} >See More</button>

      
    </section>
  )
}

export default Works