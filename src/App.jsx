
import './App.css'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const App = () => {
  // Usamos useRef para referenciar el elemento DOM que Typed.js va a modificar
  const typedElement = useRef(null);

  useEffect(() => {
    // Configuración de Typed.js
    const options = {
      strings: ["I'm Christian Martinez", "FrontEnd Developer web"],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
    };

    // Inicializar Typed.js en el elemento referenciado
    const typed = new Typed(typedElement.current, options);

    // Limpiar el efecto al desmontar el componente para evitar fugas de memoria
    return () => {
      typed.destroy();
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className='greething'>
      <h1>Hello,</h1>
      <h1 ref={typedElement}></h1>
    </div>
  );
};

export default App;
