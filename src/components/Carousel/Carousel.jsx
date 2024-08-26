import React from 'react'
import '../Carousel/Carousel.css'



const Carousel = () => {
  
  return (
    <div>
      <div id="carouselExample" className="carousel slide animate__animated animate__fadeIn">
        <div className="carousel-inner">

        <div className="carousel-item active img-style">
                      <a href="https://github.com/Xhan88/pedicure-susy" target="_blank">
                          <img 
                          src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyecto-08.jpg?alt=media&token=2b12eb95-9f39-43f9-909a-ff12a02696ed"  
                          className="d-block  img-proyect" 
                          alt=""/>
                      </a>

                      <a href="https://github.com/Xhan88/super-heros" target="_blank">
                          <img 
                          src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyecto-07.jpg?alt=media&token=723af217-0c52-4536-b35e-ff13124272db"
                          className="d-block  img-proyect" 
                          alt=""/>
                      </a>

                      <a href="https://github.com/Xhan88/recetario" target="_blank">
                          <img 
                          src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyecto-09.jpg?alt=media&token=bca5e496-875b-4e61-a9c0-d2c4610bf5fb" 
                          className="d-block  img-proyect" 
                          alt=""/>
                      </a>
                        
                  </div>

          <div className="carousel-item  img-style">
              <a href='https://gifsexpertapp888.netlify.app/' target="_blank">
                  <img 
                  src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyect-01.jpg?alt=media&token=ad981e14-e9e8-42b3-a211-a6e251d499b5&_gl=1*171ykzl*_ga*NjMxMDY4NzMxLjE2NzkwNjIxODE.*_ga_CW55HF8NVT*MTY4NTQyMjUzNC44LjEuMTY4NTQyMjkyOS4wLjAuMA.."  
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>

              <a href="https://github.com/Xhan88/Christian-Butcher" target="_blank">
                  <img 
                  src="https://firebasestorage.googleapis.com/v0/b/web-site-proyects.appspot.com/o/Captura%20de%20pantalla%202024-08-23%20a%20la(s)%2011.08.57%20p.m..png?alt=media&token=cbaae83f-9704-4064-9929-f873f301ff0a" 
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>

              <a href="https://github.com/Xhan88/Blog-To-News" target="_blank">
                  <img 
                  src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyect-03.jpg?alt=media&token=c1fc259b-8f32-4299-a0e4-1e01a5b635bc&_gl=1*17vy1y4*_ga*NjMxMDY4NzMxLjE2NzkwNjIxODE.*_ga_CW55HF8NVT*MTY4NTQyMjUzNC44LjEuMTY4NTQyMzIyMC4wLjAuMA.." 
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>
                
          </div>

   <div className="carousel-item img-style">
        <a href="https://github.com/Xhan88/Festival-de-musica" target="_blank">
                <img 
                src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyect-04.jpg?alt=media&token=460b7186-d368-4f1e-9cab-20afaeb3b966&_gl=1*8jbnrx*_ga*NjMxMDY4NzMxLjE2NzkwNjIxODE.*_ga_CW55HF8NVT*MTY4NTQyMjUzNC44LjEuMTY4NTQyMzcxOC4wLjAuMA.." 
                className="d-block  img-proyect"  
                alt=""/>
        </a>

        <a href="https://github.com/Xhan88/challeng-3" target="_blank"> 
                <img 
                src="/proyect-05.jpg" 
                className="d-block  img-proyect" 
                alt=""/>
        </a>

        <a href="https://github.com/Xhan88/game-memo" target="_blank">      
                <img 
                src="/proyect-06.jpg" 
                className="d-block  img-proyect" 
                alt=""/>
        </a>
    </div>

    

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
