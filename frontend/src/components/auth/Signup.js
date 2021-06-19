import React, { Component } from 'react';
import axios from 'axios'

  import {  Col, Container, Row } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
    require('./signin.css')
class Signin extends Component {
    render() {

       

        return (
            
            <Container>
            <Row className="row">
                <Col xs={12} md={6} className="mx-auto" >
                    <div className="Container-form z-depth-2">

                        <form >
                            <h1 className="form-titulo peach-gradient z-depth-2" >Crear cuenta</h1>
                            <div className="form-nombre form-content">
                                <p>Nombre de usuario:</p>
                                <input name="usuario" placeholder="Nombre de usuario"  type="text" className="form-input"></input>

                            </div>
                            <div className="form-contraseña form-content">
                                <p>Contraseña:</p>
                                <input name="contraseña" placeholder="Contraseña" type="password" className="form-input"></input>
                                
                            </div>
                            <div className="form-btn">
                                <button type="submit" className="btn btn-dark">Iniciar Sesion</button>
                            </div>
                        </form>
                            <div className="pregunta">
                                <p className="pregunta-p">No tienes cuenta?</p>
                                <Link className="pregunta-btn" to='/signin'>Iniciar sesión</Link>
                            </div>

                    </div>
                </Col>
            </Row>
            
        </Container>
       
        );
    }
}

export default Signin;
