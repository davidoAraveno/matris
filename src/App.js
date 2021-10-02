import React, {useState} from 'react';
import './App.css';
import CodeGenerator from './components/CodeGenerator';



function App() {
  const [nombre, funcionNombre] = useState('');
  const [fono, funcionFono] = useState('');
  const [email, funcionEmail] = useState('');
  const [codigoAleatorio, funcionCodigoAleatorio] = useState("");
  

  const datosInvitado = (e) => {

    if(e.target.id === 'nombre') {
      funcionNombre(e.target.value);
    } else if(e.target.id === 'fono'){
      funcionFono(e.target.value);
    } else if(e.target.id === 'email'){
      funcionEmail(e.target.value);
    } else if(e.target.id === 'codigoAleatorio'){
      funcionCodigoAleatorio(e.target.value);
    }

  }

  
  return (
    <div>
      <form>
        <div>
          <input type="text" id="nombre" value={nombre} onChange={datosInvitado} />
        </div>
        <div>
          <input type="text" id="fono" value={fono} onChange={datosInvitado} />
        </div>
        <div>
          <input type="text" id="email" value={email} onChange={datosInvitado} />
        </div>
        <div>
          <CodeGenerator funcionCodigoAleatorio={funcionCodigoAleatorio} codigoAleatorio={codigoAleatorio} />
        </div>
        <div>
        <input type="submit" value="crear invitado" />
        </div>
      </form>
    </div>
  )

}

export default App;
