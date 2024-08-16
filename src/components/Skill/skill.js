import React from 'react'
import './skill.css'
import c from '../../assets/c.png'
import css from '../../assets/css.png'
import github from '../../assets/github.png'
import html from '../../assets/html-5.png'
import java from '../../assets/java.png'
import javascript from '../../assets/javascript.png'
import mysql from '../../assets/mysql.png'
import notejs from '../../assets/nodejs.png'
import php from '../../assets/php.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import flask from '../../assets/flask.png'
import Bootstrap from '../../assets/Bootstrap.png'
import json from '../../assets/json.png'
import sass from '../../assets/sass.png'
import xml from '../../assets/xml.png'
import chash from '../../assets/chash.png'
import typescript from '../../assets/typescript.png'
import firebase from '../../assets/firebase.png'
import MongoDB from '../../assets/mongodb.svg'
import canva from '../../assets/canva.jpeg'
import wordpress from '../../assets/wordpress.png'
import git from '../../assets/Git.png'
import postgresql from '../../assets/postgresql.png'

const Skill = () => {
  return (
    <section id='skillPage'>
      <div id='languages'>
        <h1 className='skillPageTitle'> My Skills</h1>

        <div className='skillImgs'>
         <p className='skillDesc'>
          <b>Frontend :</b> ReactJS, Python, HTML5, TypeScript, CSS3, JavaScript (ES6+), Java, Bootstrap, SCSS (Sassy CSS), C++<br/>
          <img src={react} alt='' className='skillImg'/>
          <img src={python} alt='' className='skillImg'/>
          <img src={html} alt='' className='skillImg'/>
          <img src={typescript} alt='' className='skillImg'/>
          <img src={css} alt='' className='skillImg'/>
          <img src={javascript} alt='' className='skillImg'/>
          <img src={java} alt='' className='skillImg'/>
          <img src={Bootstrap} alt='' className='skillImg'/>
          <img src={sass} alt='' className='skillImg'/>
          <img src={c} alt='' className='skillImg'/><br/>

          <b>Backend :</b> Firebase, MongoDB, NodeJS, Flask, MySQL, PHP, PostgreSQL, C#, Json, XML<br/>
          <img src={firebase} alt='' className='skillImg'/>
          <img src={MongoDB} alt='' className='skillImg'/>
          <img src={notejs} alt='' className='skillImg'/>
          <img src={flask} alt='' className='skillImg'/>
          <img src={mysql} alt='' className='skillImg'/>
          <img src={php} alt='' className='skillImg'/>
          <img src={postgresql} alt='' className='skillImg'/>
          <img src={chash} alt='' className='skillImg'/>
          <img src={json} alt='' className='skillImg'/>
          <img src={xml} alt='' className='skillImg'/><br/>

          <b>Tools & Platforms :</b> Git, GitHub, WordPress, Canva<br/>
          <img src={git} alt='' className='skillImg'/>
          <img src={github} alt='' className='skillImg'/>
          <img src={wordpress} alt='' className='skillImg'/>
          <img src={canva} alt='' className='skillImg'/>
          <br/>
          </p>

      
          
       
         
          
   
          
         
        </div>
      </div>
      </section>
  )
}

export default Skill