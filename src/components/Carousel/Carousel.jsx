import React from 'react'
import '../Carousel/Carousel.css'
import proyects from '../../../datos';


const Carousel = () => {
  
  return (
    <div>
      <div id="carouselExample" className="carousel slide ">
        <div className="carousel-inner">

          <div className="carousel-item active img-style">
              <a href={proyects.urlGit} target="_blank">
                  <img 
                  src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyect-01.jpg?alt=media&token=ad981e14-e9e8-42b3-a211-a6e251d499b5&_gl=1*171ykzl*_ga*NjMxMDY4NzMxLjE2NzkwNjIxODE.*_ga_CW55HF8NVT*MTY4NTQyMjUzNC44LjEuMTY4NTQyMjkyOS4wLjAuMA.."  
                  className="d-block  img-proyect" 
                  alt=""/>
              </a>

              <a href="https://github.com/Xhan88/proyecto-final-e-commerce" target="_blank">
                  <img 
                  src="https://firebasestorage.googleapis.com/v0/b/pedicure-susy.appspot.com/o/mywebpack%2Fproyect-02.jpg?alt=media&token=8d21be4c-ef58-40e9-8002-be6cdfe85db4&_gl=1*1sg0bil*_ga*NjMxMDY4NzMxLjE2NzkwNjIxODE.*_ga_CW55HF8NVT*MTY4NTQyMjUzNC44LjEuMTY4NTQyMzE0MS4wLjAuMA.." 
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
