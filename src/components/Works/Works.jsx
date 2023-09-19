import React from 'react'
import Carousel from '../Carousel/Carousel'
import '../Works/Works.css'

const Works = () => {
  
  return (  
    <div className='works'>
      <div className='description'>
        <h1 className='title-works'>| Works |</h1>
        <p className='proyect-description animate__animated animate__fadeIn'>
          In this section of my page, I show some of my projects and the skills that I have been learning hard for two year. A small portfolio   where I show basic works of HTML, CSS, JavaScript EC6, React.js, Hooks, API, responsive and Bootstrap.
        </p>
        <Carousel />
      </div>
    </div>
  )
}

export default Works
