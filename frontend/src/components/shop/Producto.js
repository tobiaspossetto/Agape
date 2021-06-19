import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'


import {Table, Container , Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
//import {  } from 'mdb-react-ui-kit';
export default class Producto extends Component {
    render() {
        return (
            <Col xs={12} sm={6} className='column justify-content-center ' >
                                
            <Table  className="z-depth-2"  size="sm">
               
             
            
            <tbody>
                <tr className="fila ">

                    <th className="nombre badge-dark" >Nombre</th>
                    <td className="contenido c-titulo orange accent-2 " >Blue Sueter</td>

                </tr>
                <tr className="fila">

                    <th className="nombre badge-dark">Categoria</th>
                    <td className="contenido orange accent-2">Ropa</td>

                </tr>
                <tr className="fila">

                    <th className="nombre badge-dark">Color</th>
                    <td className="contenido orange accent-2">Blue</td>

                </tr >
                <tr className="fila">

                    <th className="nombre badge-dark">Talle</th>
                    <td className="contenido orange accent-2">14</td>

                </tr>
                <tr className="fila">

                    <th className="nombre badge-dark">Cantidad</th>
                    <td className="contenido orange accent-2"><input className="cantidad" type="number" id="quantity" name="quantity" min="1" max="5"></input></td>

                </tr>
                <tr className="fila">

                    <th className="nombre badge-dark">Precio/U</th>
                    <td className="contenido orange accent-2">485</td>

                </tr>
                <tr className="fila">

                    <th className="nombre badge-dark ">Total</th>
                    <td className="contenido orange accent-2">485</td>

                </tr>
                <tr className="fila">

                    <th className="nombre badge-dark ">Eliminar</th>
                    <td className="contenido orange accent-2 ">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            startIcon={<DeleteIcon />}
                            >
                            Quitar
                        </Button>
                     </td>

                </tr>

            </tbody>
    </Table> 
            
            </Col>
        )
    }
}
