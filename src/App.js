import React, {useState} from 'react';
import Formulario from './components/Formulario';
import './App.css';





function App() {
  const [nombre, funcionNombre] = useState('');
  const [fono, funcionFono] = useState('');
  const [email, funcionEmail] = useState('');
  const [codigoAleatorio, funcionCodigoAleatorio] = useState("");

  
  return (
    <>
      <Formulario 
        funcionNombre={funcionNombre} 
        funcionFono={funcionFono} 
        funcionEmail={funcionEmail} 
        funcionCodigoAleatorio={funcionCodigoAleatorio} 
        nombre={nombre} 
        fono={fono} 
        email={email}
        codigoAleatorio={codigoAleatorio} />
    </>
  )

}

export default App;
