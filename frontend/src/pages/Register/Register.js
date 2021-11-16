import React,{  useState } from 'react';
import './Register.css';
import { useHistory} from 'react-router-dom';
import ClimaApi from '../Clima/Clima';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
const url= 'https://irso-tallervi.herokuapp.com/users';






const Register = () => {

    let history = useHistory();
    history.push('/Register')

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
                   <Title  text= 'REGISTRO DE ADMINISTRADOR'/>
                   { hasError &&
                   <label className='label-alert'> 
                   Su contraseña o nombre de usuario no existe o es incorrecto.
                       </label>

                    }


                
                   <Label  text= 'Usuario'/>  
                   <Input // Registro de Usuario : USER
                    attribute= {{
                     id: 'user',
                     name: 'user',
                      type: 'text',
                          placeholder: 'Ingrese su usuario'
                            } }
                         handleChange={handleChange}
                          />

                 <Label  text= 'Nombre'/>
                   <Input  //Registro de Nombre del usuario
                    attribute= {{
                     id: 'name',
                     name: 'name',
                      type: 'text',
                          placeholder: 'Ingrese su nombre'
                            } }
                         handleChange={handleChange}
                          />
                         <Label  text= 'Contraseña'/>
                        <Input
                     attribute= {{
                     id: 'pass',
                     name: 'pass',
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
                       Guargar
                       </button>
                    </div>
                    <div className = 'submit-button-container'>
                       <button onClick= {()=>{history.push('/')}}className='submit-button'>  Volver </button>                       
                    </div>
             </div>
              }
        </div>
                    
    )
};
const Title = ({text}) => {

    return (
        <div className='title-container'>
           <label className='title-label'>{text}</label> 
        </div>
    )
    
}

const Label = ({ text }) => {
    return (
        <div>
            <label>  {text}   </label> 
        </div>
       
    )


}
const Input = ({attribute, handleChange, param}) => {
    return (
          <div>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e)=> handleChange(e.target.name,e.target.value) }
            className={ param  ? 'input-error' : 'regular-style' }
            />
        </div>
    )
};


 /*    class Users extends Component {
   
         constructor(props){
             super(props);
    
            this.state={
             user:[] ,
         
          form:{
            
            name: '',
            pass: '',
            user: ''
          }
          
        }
        this.getUser= this.getUser.bind(this);
     
        peticionPost=async()=>{
        delete this.state.form.codigo;
        await axios.post(url,this.state.form)
        .then(response=>{
    
            }).catch((error)=>{
             console.log(error);
      
             });
             }

             peticionPut=()=>{
            axios.put(url+this.state.form.user, this.state.form).then(response=>{

            }).catch((error)=>{
             console.log(error);
            });
        }
    }



  }  */
  export default Register;