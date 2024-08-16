import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.gif';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return ( 
        <nav className = 'navbar'> 

          <Link to="intro">
            <img src = { logo } alt = 'logo' className = 'logo'  style={{ cursor: 'pointer' }} />
            </Link>

            <div className = 'desktopMenu' >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className = 'desktopMenuListItem' > Home </Link> 
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className = 'desktopMenuListItem' > About </Link> 
                <Link activeClass='active' to='languages' spy={true} smooth={true} offset={-50} duration={500} className = 'desktopMenuListItem' > Skills </Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className = 'desktopMenuListItem' > Porjects </Link>
                <Link activeClass='active' to='experiences' spy={true} smooth={true} offset={-50} duration={500} className = 'desktopMenuListItem' > Experience </Link> 
                <Link activeClass='active' to='educations' spy={true} smooth={true} offset={-50} duration={500} className = 'desktopMenuListItem' > Education </Link>

            </div>

            <button className='desktopMenuBtn'  style={{ cursor: 'pointer' }} onClick={() => {
                const contactElement = document.getElementById('clients');
                if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
                }
            }}>
        <img src = { contactImg } alt = '' className = 'desktopMenuImg'/> Contact Me </button>



            <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className = 'navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem' onClick={()=>setShowMenu(false)} > Home </Link> 
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem'  onClick={()=>setShowMenu(false)} > About </Link>
                <Link activeClass='active' to='languages' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem'  onClick={()=>setShowMenu(false)} > Skills </Link> 
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem'  onClick={()=>setShowMenu(false)} > Porjects </Link> 
                <Link activeClass='active' to='experiences' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem'  onClick={()=>setShowMenu(false)} > Experience </Link>
                <Link activeClass='active' to='educations' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem'  onClick={()=>setShowMenu(false)} > Education </Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className = 'ListItem'  onClick={()=>setShowMenu(false)} > Contact </Link>
            </div>    

        </nav>
    )
}

export default Navbar;