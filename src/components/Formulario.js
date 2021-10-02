import React from 'react';
import CodeGenerator from './CodeGenerator';
import db from './../firebase/firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

const Formulario = ({funcionNombre, funcionFono, funcionEmail, funcionCodigoAleatorio, nombre, fono, email, codigoAleatorio}) => {
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

    const firebaseCode = async (e) => {
        e.preventDefault();
        const docRef = collection(db, 'invitados');
        const payload = {
          nombre: nombre,
          fono: fono,
          email: email,
          codigoAleatorio: codigoAleatorio
        };
        await addDoc(docRef, payload);
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
            <input type="submit" value="crear invitado" onClick={firebaseCode} />
            </div>
          </form>
        </div>
      )

}

export default Formulario;
