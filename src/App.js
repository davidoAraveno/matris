import React, {useState} from 'react';
import './App.css';



function App() {
  const [codigoAleatorio, funcionCodigoAleatorio] = useState("")
  const letras = 'A B C D E F G H I J K L M N O P Q R S T U V';
  const numeros = '0 1 2 3 4 5 6 7 8 9';


  const codeGenerator = (e) => {
    e.preventDefault();

    const caracteresFinales = letras.split(' ');
    caracteresFinales.sort(function() {return Math.random() - 0.5})
    console.log(caracteresFinales)
  
    const numerosFinales = numeros.split(' ');
    numerosFinales.sort(function() {return Math.random() - 0.5});
    console.log(numerosFinales[0]);

    funcionCodigoAleatorio(caracteresFinales[0]+numerosFinales[0]+caracteresFinales[0]+numerosFinales[0])
  }




  return (
    <div className="App">
      <form>
        <input type="text" value={codigoAleatorio} />
        <input type="submit" value="generar codigo" onClick={codeGenerator} />
      </form>
    </div>
  );
}

export default App;
