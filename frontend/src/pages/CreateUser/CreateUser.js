import React from 'react';
import './CreateUser.css';
import {Input, Formulario, Label, GrupoInput,  LeyendaError, IconoValidacion, ContenedorTerminos,
   ContenedorBotonCentrado,Enviar ,  MensajeExito,   MensajeError } from '../elementos/Formularios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'; //ICONOS
import { useState } from 'react/cjs/react.development';






const CreateUser = () => {

  /*const [ usuario, cambiarUsuario ] = useState ({campo: '', valido: null });
  const [ email, cambiarEmail ] = useState ({campo: '', valido: null });
  const [ telefono, cambiarTelefono ] = useState ({campo: '', valido: null });
  const [ documento, cambiarDocumento ] = useState ({campo: '', valido: null });
  const [ password, cambiarPassword ] = useState ({campo: '', valido: null });
  const [ password2, cambiarPasword2 ] = useState ({campo: '', valido: null });*/



  return(
   <main>
     <Formulario action= "">



   <div>
    <Label htmlFor= "nombre">Usuario </Label>
    <GrupoInput>
    <Input type= "text" placeholder ="Nombre de Usuario" id="nombre" />
 
    <IconoValidacion  icon= {faCheckCircle}/>
    </GrupoInput>  
      <LeyendaError>El nombre de usuario debe ser mas de 6 digitos y debe contener numeros y letras.</LeyendaError>
    </div>

    
    <div>
     <Label htmlFor= "nombre">Email</Label>
     <GrupoInput>
     <Input type= "email" placeholder ="Correo Electronico" id="Email"/>
     <IconoValidacion  icon= {faCheckCircle}/>
     </GrupoInput>  
       <LeyendaError>Mensaje de prueba.</LeyendaError>
     </div>

     <div>
     <Label htmlFor= "nombre">Telefono </Label>
     <GrupoInput>
     <Input type= "text" placeholder ="Telefono" id="Telefono"/>
     <IconoValidacion  icon= {faCheckCircle}/>
     </GrupoInput>  
       <LeyendaError>Mensaje de prueba.</LeyendaError>
     </div>

     <div>
     <Label htmlFor= "nombre">Documento </Label>
     <GrupoInput>
     <Input type= "text" placeholder ="Documento" id="Documento"/>
     <IconoValidacion  icon= {faCheckCircle}/>
     </GrupoInput>  
       <LeyendaError>Mensaje de prueba.</LeyendaError>
     </div>


     <div>
     <Label htmlFor= "nombre">Contraseña </Label>
     <GrupoInput>
     <Input type= "password" placeholder ="Contraseña" id="Contraseña"/>
     <IconoValidacion  icon= {faCheckCircle}/>
     </GrupoInput>  
       <LeyendaError>Mensaje de prueba.</LeyendaError>
     </div>

     <div>
     <Label htmlFor= "nombre">Repetir Contraseña </Label>
     <GrupoInput>
     <Input type= "password" placeholder ="Repetir Contraseña" id="Repetir Contraseña"/>
     <IconoValidacion  icon= {faCheckCircle}/>
     </GrupoInput>  
       <LeyendaError>Mensaje de prueba.</LeyendaError>
     </div>
     





     <ContenedorTerminos>
        <Label>
           <input type="checkbox" name= "terminos" id= "terminos"/>
            Aceptar y Continuar
         </Label>
     </ContenedorTerminos>
     
     {false && <MensajeError>
         <p> 
           <FontAwesomeIcon icon= {faExclamationTriangle} />
         <b>Error:</b> Faltan completar campos. 
         </p> 
      </MensajeError>}

     <ContenedorBotonCentrado>
       <Enviar type="submit">Guardar</Enviar>
       <MensajeExito>Los datos se ingresaron correctamente</MensajeExito>
     </ContenedorBotonCentrado>

     
     <ContenedorBotonCentrado>
       <Enviar  type="submit">Volver</Enviar>
     
      
     </ContenedorBotonCentrado>








     </Formulario>
   </main>

  );
}



export default CreateUser;
