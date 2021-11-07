
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const url="https://irso-tallervi.herokuapp.com/alumnos/";

class Alumnos extends Component {
   
    constructor(props){
        super(props);
    
        this.state={
          alumnos:[] ,
          modalEliminarAlumnos: false,
          modalInsertarAlumnos: false,
          form:{
            
            id: '',
            nombres: '',
            apellido: '',
            direccion: '',
            cod_postal:'',
            telefono:'',
            tipoModal: ''
          }
          
        }
        this.getAlumnos = this.getAlumnos.bind(this);
     
      }
    seleccionarAlumnos=(alumno)=>{
      this.setState({
        tipoModal: 'actualizar',
        form: {
          id:alumno.id,
          nombres:alumno.nombres,
          apellido: alumno.apellido,
          direccion: alumno.direccion,
          cod_postal:alumno.cod_postal,
          telefono: alumno.telefono
        }
    
      })
    }
    
    modalInsertarAlumnos=()=>{
      this.setState({modalInsertarAlumnos: !this.state.modalInsertarAlumnos});
    }
    
    
    handleChange=async e=>{
    e.persist();
    await this.setState({
    form: {
      ...this.state.form,
      [e.target.name]: e.target.value
    }
    });
    console.log(this.state.form);
    }
    
    
    componentDidMount(){
      this.getAlumnos();

     
    }
    
      getAlumnos=async()=>{
        await Axios.get('https://irso-tallervi.herokuapp.com/alumnos/')
        .then(res=>{
          this.setState({alumnos: res.data.alumnos});
          console.log(res.data);
    
        }).catch((error)=>{
          console.log(error);
        });
      }
    
    peticionPostAlumnos=async()=>{
      delete this.state.form.id;
     await axios.post(url,this.state.form)
      .then(response=>{
        this.modalInsertarAlumnos();
        this.getAlumnos();
      }).catch((error)=>{
        console.log(error);
        
      });
    }
    
    peticionPutAlumnos=()=>{
      axios.put(url+this.state.form.id, this.state.form).then(response=>{
        this.modalInsertarAlumnos();
        this.getAlumnos();
      })
    }
    
    
    
      peticionDeleteAlumnos=()=>{
        axios.delete(url+this.state.form.id)
        .then(res=>{
        this.setState({modalEliminarAlumnos: false});
        this.getAlumnos();
        }).catch((error)=>{
          console.log(error);
        });
    
      }
    
    
    
      render() {
        const{form}=this.state;
    
        return (
            <div className="Alumnos">
              
              <button className= "btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'});this.modalInsertarAlumnos()}}>Agregar Alumnos</button>
              
              
                <table className="table">
                    <thead className= "thead-dark">
                        <tr>
                            <th scope="col"><h3>ID</h3></th>
                            <th scope="col"><h3>Nombres</h3></th>
                            <th scope="col"><h3>Apellido</h3></th>
                            <th scope="col"><h3> Direccion</h3></th>
                            <th scope="col"><h3> Codigo Postal</h3></th>
                            <th scope="col"><h3> Telefono</h3></th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {  this.state.alumnos.map(alumno=>{
                        return(
                                 <tr key={alumno.id}>
                                    <th>{alumno.id}</th>
                                    <th>{alumno.nombres}</th>
                                    <th >{alumno.apellido}</th>
                                    <th >{alumno.direccion}</th>
                                    <th >{alumno.cod_postal}</th>
                                    <th >{alumno.telefono}</th>   
                                    <td>                      
                                        <button className="btn btn-secondary"onClick= {()=>{this.seleccionarAlumnos(alumno); this.modalInsertarAlumnos()} }><FontAwesomeIcon icon={faEdit}/>  Editar</button> {"   "}                                             
                                        <button className="btn btn-danger" onClick= {()=>{this.seleccionarAlumnos(alumno);this.setState({modalEliminarAlumnos:true})}}><FontAwesomeIcon icon={faTrashAlt}/>  Eliminar </button> {"   "}
                                    </td> 
                                </tr>
                             )
                          })}
                    </tbody>
                </table>
    
       <Modal isOpen={this.state.modalInsertarAlumnos}>
                  <ModalHeader style={{display:'block'}}>
                    <span style={{float:'rigth'}}>Alumnos</span>
                    </ModalHeader>          
                <ModalBody>
                  <div className="form-group">
                   
                    <label htmlFor="id" >id</label>
                   {/*  <input className="form-control" type= "text" name= "id" id="id" readOnly onChange={this.handleChange} value ={form?form.id:this.stat.id.length+1} /> */}
                   <input className="form-control" type= "text" name= "id" id="id" readOnly onChange={this.handleChange} value ={form?form.id: ''} />
                    <br  />
                    <label htmlFor="nombres" >Nombres</label>
                    <input className="form-control" type= "text" name= "nombres" id= "nombres"onChange={this.handleChange}value ={form?form.nombres: ' '} />
                    <br  />
                    <label htmlFor="apellido" >Apellido</label>
                    <input className="form-control" type= "text" name= "apellido" id="apellido"onChange={this.handleChange}value ={form?form.apellido: ' '} />
                    <br  />
                    <label htmlFor="direccion" >Direccion</label>
                    <input className="form-control" type= "text" name= "direccion" id="direccion"onChange={this.handleChange} value={form?form.direccion: ' '} />
                
                  <label htmlFor="cod_postal" >Codigo Postal</label>
                    <input className="form-control" type= "text" name= "cod_postal" id="cod_postal"onChange={this.handleChange} value={form?form.cod_postal: ' '} />
                
                  <label htmlFor="telefono" >Telefono</label>
                    <input className="form-control" type= "text" name= "telefono" id="telefono"onChange={this.handleChange} value={form?form.telefono: ' '} />
                  </div>
    
                </ModalBody>
                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                  <button className="btn btn-success"onClick={()=>this.peticionPostAlumnos()}>
                     Insertar
                     
                     </button>:<button className="btn btn-success"onClick={()=>this.peticionPutAlumnos()}> 
                     Actualizar
                     </button>
                        }
                  <button className="btn btn-danger" onClick={()=>this.modalInsertarAlumnos()} >Cerrar </button>
    
                </ModalFooter>
    
                </Modal>
                  
    
              
    
                <Modal isOpen={this.state.modalEliminarAlumnos}>
                  <ModalBody>
                    Estas seguro que quieres eliminar el registro?  { form && form.id}
    
                  </ModalBody>
                  <ModalFooter>
                    <button className="btn btn-danger" onClick={()=>this.peticionDeleteAlumnos()}>Si</button>
                    <button className="btn btn-secondary"onClick={()=>this.setState({modalEliminarAlumnos: false})} >No</button>
                  </ModalFooter>
                </Modal>
            </div>
    
        );
      }
    }
    
    export default Alumnos;
    