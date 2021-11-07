
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core';
const baseurl="https://irso-tallervi.herokuapp.com/alumnos";

function Alumnos(){
  const [data, setData]=useState([]);

  const peticionGet=async()=>{
   await axios.get(baseurl)
    .then(response=>{
      //console.log(response.data);
      setData(response.data);
    })
  }
  useEffect(async()=>{
  await peticionGet();
}, [])

return (
  <div className="Alumnos">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Nombres</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Codigo Postal</TableCell>
            <TableCell>Telefono</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {data.map(alumnos=>(
            <TableRow key={alumnos.id}>
              <TableCell>{alumnos.id}</TableCell>
              <TableCell>{alumnos.nombres}</TableCell>
              <TableCell>{alumnos.apellido}</TableCell>
              <TableCell>{alumnos.direccion}</TableCell>
              <TableCell>{alumnos.cod_postal}</TableCell>
              <TableCell>{alumnos.telefono}</TableCell>
            </TableRow>
          ))}

        </TableBody>

      </Table>
    </TableContainer>

  </div>

);
}
export default Alumnos;

