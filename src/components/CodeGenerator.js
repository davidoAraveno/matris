import React, {useEffect} from 'react'



const generator = (funcionCodigoAleatorio) => {
    
    const letras = 'A B C D E F G H I J K L M N O P Q R S T U V';
    const numeros = '0 1 2 3 4 5 6 7 8 9';

    const caracteresFinales = letras.split(' ');
    caracteresFinales.sort(function() {return Math.random() - 0.5})

    const numerosFinales = numeros.split(' ');
    numerosFinales.sort(function() {return Math.random() - 0.5});

    funcionCodigoAleatorio(caracteresFinales[0]+numerosFinales[0]+caracteresFinales[0]+numerosFinales[0]);
}
    
    
    
    
    const CodeGenerator = ({codigoAleatorio, funcionCodigoAleatorio}) => {
        useEffect( () => {
            generator(funcionCodigoAleatorio)
        }, []);

        return (
            <>
                <input type="text" value={codigoAleatorio} id="codigoAleatorio" />
                {/* <button onClick={generator}> generar codigo </button> */}
            </>
        );
  }


  export default CodeGenerator