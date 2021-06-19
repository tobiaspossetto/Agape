import React, { Component } from 'react';
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Form, Table, Container , Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Producto from './Producto'

require('./carrito.css')
class Carrito extends Component {


    constructor(props) {
        super(props)
        
    }
    render() {



        return (



            <Container >
                <h2 className="main-titulo text-center mb-3"> Carrito de compras</h2>
                <Row className="row justify-content-center">
                    <Producto></Producto>
                    <Producto></Producto>
                    <Producto></Producto>
                </Row>
            </Container >





            
        );
    }
}

export default Carrito;
