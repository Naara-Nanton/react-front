
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Alert, Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Validaciones from '../Validaciones';
const url="https://tallerirsoapi.herokuapp.com/taller/materias/";
const urlPost= "https://tallerirsoapi.herokuapp.com/taller/materias";










class Materias extends Component {
   
constructor(props){
    super(props);

    this.state={
      materias:[] ,
      modalEliminar: false,
      modalInsertar: false,
     
      form:{
        
        codigo: '',
        cuatrimestre: '',
        cantidad_horas: '',
        nombre: '',
        tipoModal: ''
      }
      
    }
    this.getMaterias = this.getMaterias.bind(this);
 
  }
seleccionarMateria=(materia)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      codigo: materia.codigo,
      cantidad_horas:materia.cantidad_horas,
      cuatrimestre: materia.cuatrimestre,
      nombre:materia.nombre
    }

  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
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
  this.getMaterias();
}

  getMaterias=async()=>{
    await Axios.get('https://tallerirsoapi.herokuapp.com/taller/materias/')
    .then(res=>{
      this.setState({materias: res.data});
      console.log(res.data);

    }).catch((error)=>{
      console.log(error);
    });
  }

peticionPost=async()=>{
  delete this.state.form.codigo;
 await axios.post(urlPost,this.state.form)
  .then(response=>{
    this.modalInsertar();
    this.getMaterias();
  }).catch((error)=>{
    console.log(error);
    
  });
}
//actualizar.
peticionPut=()=>{
  axios.put(url+this.state.form.codigo, this.state.form).then(response=>{
    this.modalInsertar();
    this.getMaterias();
  }).catch((error)=>{
    console.log(error);
  });



}




  peticionDelete=()=>{
    axios.delete(url+this.state.form.codigo)
    .then(res=>{
    this.setState({modalEliminar: false});
    this.getMaterias();
    }).catch((error)=>{
      console.log(error);
    });

  }




  render() {
    const{form}=this.state;

    return (
        <div className="Materias">
          
          <button className= "btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'});this.modalInsertar()}}>Agregar Materia</button>
          
          
            <table className="table">
                <thead className= "thead-dark">
                    <tr>
                        <th scope="col"><h3>Codigo</h3></th>
                        <th scope="col"><h3>Cantidad de horas</h3></th>
                        <th scope="col"><h3>Cuatrimestre</h3></th>
                        <th scope="col"><h3> Materia</h3></th>
                    </tr>
                </thead>
                <tbody>

                    {  this.state.materias.map(materia=>{
                    return(
                            <tr key={materia.id}>
                                 <th >{materia.codigo}</th>
                                 <th >{materia.cantidad_horas}</th>
                                 <th >{materia.cuatrimestre}</th>
                                 <th >{materia.nombre}</th>
                                 <td>                      
                                  <button className="btn btn-secondary"onClick= {()=>{this.seleccionarMateria(materia); this.modalInsertar()} }><FontAwesomeIcon icon={faEdit}/>  Editar</button> {"   "}                                             
                                 <button className="btn btn-danger" onClick= {()=>{this.seleccionarMateria(materia);this.setState({modalEliminar:true})}}><FontAwesomeIcon icon={faTrashAlt}/>  Eliminar </button> {"   "}
                                 </td>

                            </tr>
                                  
                         )
                      })}
                </tbody>
            </table>

   <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader style={{display:'block'}}>
                <span style={{float:'rigth'}}>Materias</span>
                </ModalHeader>          
            <ModalBody>
              <div className="form-group">
                
                <label htmlFor="cantidad_horas" >Cantidad de Horas</label>
                <input className="form-control" type= "text" name= "cantidad_horas" id= "cantidad_horas"onChange={this.handleChange}value ={form?form.cantidad_horas: ' '} />
                <br  />
                <label htmlFor="cuatrimestre" >Cuatrimestre</label>
                <input className="form-control" type= "text" name= "cuatrimestre" id="cuatrimestre"onChange={this.handleChange}value ={form?form.cuatrimestre: ' '} />
                <br  />
                <label htmlFor="nombre" >Nombre</label>
                <input className="form-control" type= "text" name= "nombre" id="nombre"onChange={this.handleChange} value={form?form.nombre: ' '} />
              </div>

            </ModalBody>
            <ModalFooter>
              {this.state.tipoModal=='insertar'?
              <button className="btn btn-success"onClick={()=>this.peticionPost(Validaciones())}>
                 Insertar
                 
                 </button>:<button className="btn btn-success"onClick={()=>this.peticionPut()}> 
                 Actualizar
                 </button>
                    }
              <button className="btn btn-danger" onClick={()=>this.modalInsertar()} >Cerrar </button>



            </ModalFooter>


            </Modal>
              

          


            <Modal isOpen={this.state.modalEliminar}>
              <ModalBody>
                Estas seguro que quieres eliminar el registro?  { form && form.nombre}

              </ModalBody>
              <ModalFooter>
                <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Si</button>
                <button className="btn btn-secondary"onClick={()=>this.setState({modalEliminar: false})} >No</button>
              </ModalFooter>
            </Modal>
        </div>


    );
  }
}

export default Materias;
