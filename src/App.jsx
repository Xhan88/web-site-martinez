
import './App.css'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const App = () => {
  
  const typedElement = useRef(null);

  useEffect(() => {
    
    const options = {
      strings: ["I'm Christian Martínez", "FrontEnd Developer web"],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

   
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='greething'>
      <h1>Hello,</h1>
      <h1 ref={typedElement}></h1>
    </div>
  );
};

export default App;
