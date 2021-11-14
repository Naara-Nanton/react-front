import React,{  useState } from 'react';
import './Login.css';
import Title from './componentes/Title/Title';
import Label from './componentes/Label/label';
import Input from './componentes/Input/Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory} from 'react-router-dom';
import ClimaApi from '../Clima/Clima';







const Login = () => {

    let history = useHistory();
    history.push('/')

    const [ user, setUser] = useState ('');
    const [ password, setPassword ] = useState ('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState (false);
    const [ hasError, setHasError ] = useState (false);

    function handleChange (name,value){
        if (name === 'usuario' ){
          setUser(value);
          setHasError(false);
        } else {
            if(value.length < 6){
                setPasswordError(true);
                setHasError(false);

            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }       
        }
    };
    function ifMatch(param){
        if(param.user.length > 0 && param.password.length > 0 ) {
         if(param.user === 'Naara' && param.password === '123456')   {
            
            const {user,password } = param;
            let ac = {user,password};
            let account = JSON.stringify(ac);
           // localStorage.setItem('accont',account);
            setIsLogin(true);

         }else {
             setIsLogin(false);
             setHasError(true);

         }
        }else{
            setIsLogin(false);
            setHasError(true);

        }

    }

    function handleSubmit () {
        let account = { user, password }
        if (account) {
          ifMatch(account);
        }


    };

    const Registrate =()=>
    {
         //preventDefault()
       console.log ('ok')       
    };




    return (
        <div className='login-container'>
            { isLogin ?

            <div className='home-container'>
            <h1>Hola, {user}! El clima es <ClimaApi/> </h1>
            <label>
           Elegì una opcion para realizar la registacion 
           <div className = 'submit-button-container'>
                       <button onClick= {()=>{history.push('/Alumnos')}} className='submit-button' > 
                       Alumnos
                       </button>
                    </div>
                    <div className = 'submit-button-container'>
                       <button onClick= {()=>{history.push('/Materias')}}className='submit-button'> Materias </button>                       
                    </div>
            </label>
            </div>
            :

           

            <div className ='login-content'>
                   <Title  text= 'LOGIN ADMINISTRADOR IRSO'/>
                   { hasError &&
                   <label className='label-alert'> 
                   Su contraseña o nombre de usuario no existe o es incorrecto.
                       </label>

                    }
                   <Label  text= 'Usuario'/>
                   <Input
                    attribute= {{
                     id: 'usuario',
                     name: 'usuario',
                      type: 'text',
                          placeholder: 'Ingrese su usuario'
                            } }
                         handleChange={handleChange}
                          />
                         <Label  text= 'Contraseña'/>
                        <Input
                     attribute= {{
                     id: 'contraseña',
                     name: 'contraseña',
                        type: 'password',
                     placeholder: 'Ingrese su contraseña'
                    }  }

                    handleChange={handleChange}
                    param={passwordError}
                     />

                    {passwordError &&
                     <label className= 'label-error'>
                        Contraseña Invalida o Incompleta
                         </label>

                    }

                    <div className = 'submit-button-container'>
                       <button onClick= {handleSubmit} className='submit-button' > 
                        Ingresar
                       </button>
                    </div>
                    <div className = 'submit-button-container'>
                       <button onClick= {()=>{history.push('/CreateUser')}}className='submit-button'>  Registrarse </button>                       
                    </div>
             </div>
              }
        </div>
                    
    )
};

export default Login;