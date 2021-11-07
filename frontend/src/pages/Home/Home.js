import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Input } from 'reactstrap';
import  Axios  from 'axios';

const data = [

  {codigo: 1, cantidad_horas: 12341, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 1",  },
  {codigo: 2, cantidad_horas: 12342, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 2",  },
  {codigo: 3, cantidad_horas: 12343, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 3",  },
  {codigo: 4, cantidad_horas: 12344, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 4",  },
  {codigo: 5, cantidad_horas: 12345, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 5",  },
  {codigo: 6, cantidad_horas: 12346, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 6",  },
  {codigo: 7, cantidad_horas: 12347, cuatrimestre: " Primer Cuatrimestre", nombre: "Materia 7 ",  },

];

class Home extends React.Component {


  state = {
    data: data,
    form:{
      codigo: '',
      cantidad_horas: '',
      cuatrimestre: '',
      nombre: ''
     

    },
    modalInsertar: false,
    modalEditar: false,
  };

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [ e.target.name]: e.target.value,
      }
    }) ;
  }

  mostrarModalInsertar=()=>{

    this.setState({modalInsertar:true});
  }

 ocultarModalInsertar=()=>{

    this.setState({modalInsertar:false});
  }

  mostrarModalEditar=( Registro)=>{

    this.setState({modalEditar:true, form: Registro});
  }

 ocultarModalEditar=()=>{

    this.setState({modalEditar:false});
  }

  insertar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.codigo=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({data:lista,  modalInsertar: false});

  }

  editar=(dato)=>{
    var contador=0;
    var lista= this.state.data;
    lista.map((registro)=>{
      if(dato.codigo==registro.codigo){
        lista [ contador ].cantidad_horas=dato.cantidad_horas;
        lista [ contador ].cuatrimestre=dato.cuatrimestre;
        lista [ contador ].nombre=dato.nombre;
      

      }
      contador++;

    });
    this.setState({data: lista, modalEditar: false});
  }
  eliminar=(dato)=>{
    var opcion= window.confirm("¿Desear eliminar registro  " +       dato.codigo + "?");
    if(opcion){
      var contador=0;
      var lista = this.state.data;
      lista.map((registro)=>{
        if(registro.codigo==dato.codigo){
          lista.splice(contador, 1);

        }
        contador++;
      });
      this.setState({data: lista})
    }
  }

  render() {
    return (
      <>
        <Container>

          <br />
          <Button color="primary" onClick={()=>this.mostrarModalInsertar() }>Insertar Registro </Button> 
          

          <br /><br />

          <Table>
            <thead> <tr><th>codigo</th>
            <th>cantidad_horas</th>
              <th>cuatrimestre</th>
              <th>nombre</th>
            
              <th>Acciones</th> </tr> </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.codigo}</td>
                  <td>{elemento.cantidad_horas}</td>
                  <td>{elemento.cuatrimestre}</td>
                  <td>{elemento.nombre}</td>
                 
                  <td>
                    <Button color="secondary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button>{"     "}
                    <Button color="danger" onClick= {()=>this.eliminar(elemento) }>Eliminar</Button>
                  </td>
                </tr>

              ))}
            </tbody>
          </Table>

        </Container>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
          <FormGroup>
              <label>  codigo: </label>
              <input className="form-control"  readOnly type="text" value={this.state.data.length+ 1 }   />    
             
            </FormGroup>

            <FormGroup>
              <label>  cantidad_horas: </label>
              <input className="form-control" name="cantidad_horas" type="text" onChange={this.handleChange} />  
             
            </FormGroup>

            <FormGroup>
              <label> cuatrimestre: </label>  
              <input  className="form-control" name="cuatrimestre" type="text" onChange={this.handleChange} />    
            </FormGroup>

            <FormGroup>
              <label> nombre: </label>  
              <input  className="form-control" name="nombre" type="text" onChange={this.handleChange} />    
            </FormGroup>

               
           
              
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.insertar()} >Insertar </Button>

              
           
            <Button color="danger"onClick={()=>this.ocultarModalInsertar() } >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>codigo:</label>
              <input className="form-control" readOnly type= "text" value={this.state.form.codigo} />
            </FormGroup>

            <FormGroup>
              <label>cantidad_horas</label>
              <input className="form-control" name= "cantidad_horas" type="text" onChange= {this.handleChange} value={this.state.form.cantidad_horas}/>
          
            </FormGroup>

            <FormGroup>
              <label>cuatrimestre</label>
              <input className="form-control" name= "cuatrimestre" type="text" onChange= {this.handleChange} value={this.state.form.cuatrimestre}/>
            </FormGroup>

            <FormGroup>
              <label>nombre</label>
              <input className="form-control" name= "nombre" type="text" onChange= {this.handleChange}value={this.state.form.nombre}/>
            </FormGroup>

           
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={()=>this.editar(this.state.form)} >Editar </Button>
                <Button color="danger" onClick= {()=>this.ocultarModalEditar()}>Cancelar</Button>
                </ModalFooter>

                 </Modal>
      </>)
  }
}
export default Home;

