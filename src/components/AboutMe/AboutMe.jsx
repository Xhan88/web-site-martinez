import './AboutMe.css';
import 'animate.css';
import React from 'react';

const AboutMe = () => {
  return (
    <>
      <div className='AboutMe'>
        <div className='title-about'>
          <h1>| About Me |</h1>
        </div>
        <div className='content-section'>
          <div className='text'>
            <p className= 'animate__animated animate__fadeIn'>
              <span className= 'subtitles'>Who I am?</span> My name is Christian Martínez, originally from Mexico. I am a front-end web developer using technologies such as HTML, CSS, JavaScript, React.js, FirebaseDB, React Router Dom, API implementation, HOOKS, and testing. I am currently in a learning stage, which, accompanied by education, discipline, and perseverance, has made me a self-taught person passionate about web development, taking care of the details of my code, learning new technologies, and hungry to learn more.
              <span className='subtitles'>Studies</span> I studied high school in Tepatitla de Morelos, my current city, at the Jalisco Regional High School (Graduate). In August 2021, I started my web development courses at UDEMY, starting with HTML, CSS, Responsive web pages, JavaScript, and SASS. Later, I took a bootcamp at CoderHouse for React.js.
              <span className='subtitles'>Focus</span> I fully trust that with discipline, dedication, and a firm and passionate will, goals that seem very distant at the beginning can be achieved. It is incredible what I have managed to create and learn in a year of studies, and I am thrilled to know what I will learn through the years.
            </p>
          </div>
          <div className='image'>
            <img className='imgMe animate__animated animate__fadeInRight' src='./profil.jpg' alt='Profile' />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
