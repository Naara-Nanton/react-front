import React from 'react';
import './CreateUser.css';
import {Input, Formulario, Label, GrupoInput,  LeyendaError, IconoValidacion, ContenedorTerminos,
   ContenedorBotonCentrado,Enviar ,  MensajeExito,   MensajeError } from '../elementos/Formularios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'; //ICONOS
import { useState } from 'react/cjs/react.development';
const url= 'https://irso-tallervi.herokuapp.com/users';






const CreateUser = () => {


  return(
   <main>
     <Formulario action= "">



   <div>
    <Label htmlFor= "user">Usuario </Label>
    <GrupoInput>
    <Input type= "text" placeholder ="Nombre de Usuario" id="user" />
 
 
    </GrupoInput>  
  
    </div>

    
   <div>
    <Label htmlFor= "name">Nombre </Label>
    <GrupoInput>
    <Input type= "text" placeholder ="Nombre " id="name" />
 
    </GrupoInput>  
  
    </div>

  
    

  


     <div>
     <Label htmlFor= "nombre">Contraseña </Label>
     <GrupoInput>
     <Input type= "password" placeholder ="Contraseña" id="Contraseña"/>
     </GrupoInput>  
     
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
