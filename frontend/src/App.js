import React from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from "react-router-dom";

import Login from './pages/Login/Login';
import CreateUser from './pages/CreateUser/CreateUser';
import Materias from './pages/Materias/Materias';
import Alumnos from './pages/Alumnos/Alumnos';
import ClimaApi from './pages/Clima/Clima';




function App() {

  return (

    <Router>  
      <div className="container mt-5"> 
      <div className="btn-group">
      <Link to="/CreateUser">

      </Link>          
      </div>
      <ClimaApi/>
      <h1> Registro de Alumnos y Materias Irso</h1>
    
  

       <hr />
      <Switch>
      <Route exact path = "/" component={Login}>
        <Login/>
         </Route>
         <Route exact  path = "/CreateUser"component={CreateUser} >
           <CreateUser />

         </Route>

         <Route exact  path = "/Materias" component={Materias} >
        <Materias/>
         </Route>  

         <Route exact path = "/Alumnos" component={Alumnos}  >
        <Alumnos/>
         </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
