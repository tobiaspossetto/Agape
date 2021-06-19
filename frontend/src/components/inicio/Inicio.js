import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

require('./inicio.css')
class Inicio extends Component {
    render() {
        return (
            <div className='inicio'>

                <Container fluid className='container-anuncios' >
                    {/* Depende a donde se redirije cuando se cree el anuncio */}

                    <Row>

                        <Col xs={12} md={4} className="mx-auto">


                            <MDBCard className=' z-depth-2'>
                                <MDBCardImage
                                    top
                                    src='https://revistadiners.com.co/wp-content/uploads/2020/01/portada_cloudten_1200x800-1024x683.jpg'
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                <MDBCardBody className='card-body'>
                                    
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <hr />
                                    <MDBCardText className='card-body-info black-text'>
                                        <p>

                                        Some quick example text to build on the card title and make up the
                                        bulk of the card&apos;s content.
                                        </p>
                                    </MDBCardText>
                                   
                                    <Link className="btn btn-dark  " to='/accesorios'>Ver más</Link>
                                
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        
                        <Col xs={12} md={4} className="mx-auto">


                            <MDBCard className=' z-depth-2'>
                                <MDBCardImage
                                    top
                                    src='https://revistadiners.com.co/wp-content/uploads/2020/01/portada_cloudten_1200x800-1024x683.jpg'
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                <MDBCardBody className='card-body'>
                                    
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <hr />
                                    <MDBCardText className='card-body-info black-text'>
                                        <p>

                                        Some quick example text to build on the card title and make up the
                                        bulk of the card&apos;s content.
                                        </p>
                                    </MDBCardText>
                                   
                                    <Link className="btn btn-dark  " to='/accesorios'>Ver más</Link>
                                
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        
                        <Col xs={12} md={4} className="mx-auto">


                            <MDBCard className=' z-depth-2'>
                                <MDBCardImage
                                    top
                                    src='https://revistadiners.com.co/wp-content/uploads/2020/01/portada_cloudten_1200x800-1024x683.jpg'
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                <MDBCardBody className='card-body'>
                                    
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <hr />
                                    <MDBCardText className='card-body-info black-text'>
                                        <p>

                                        Some quick example text to build on the card title and make up the
                                        bulk of the card&apos;s content.
                                        </p>
                                    </MDBCardText>
                                   
                                    <Link className="btn btn-dark  " to='/accesorios'>Ver más</Link>
                                
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        
                        <Col xs={12} md={4} className="mx-auto">


                            <MDBCard className=' z-depth-2'>
                                <MDBCardImage
                                    top
                                    src='https://revistadiners.com.co/wp-content/uploads/2020/01/portada_cloudten_1200x800-1024x683.jpg'
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                <MDBCardBody className='card-body'>
                                    
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <hr />
                                    <MDBCardText className='card-body-info black-text'>
                                        <p>

                                        Some quick example text to build on the card title and make up the
                                        bulk of the card&apos;s content.
                                        </p>
                                    </MDBCardText>
                                   
                                    <Link className="btn btn-dark  " to='/accesorios'>Ver más</Link>
                                
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                        
                        <Col xs={12} md={4} className="mx-auto">


                            <MDBCard className=' z-depth-2'>
                                <MDBCardImage
                                    top
                                    src='https://revistadiners.com.co/wp-content/uploads/2020/01/portada_cloudten_1200x800-1024x683.jpg'
                                    overlay='white-slight'
                                    hover
                                    waves
                                    alt='MDBCard image cap'
                                />
                                <MDBCardBody className='card-body'>
                                    
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <hr />
                                    <MDBCardText className='card-body-info black-text'>
                                        <p>

                                        Some quick example text to build on the card title and make up the
                                        bulk of the card&apos;s content.
                                        </p>
                                    </MDBCardText>
                                   
                                    <Link className="btn btn-dark  " to='/accesorios'>Ver más</Link>
                                
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                       
                       

                        
                    </Row>


                </Container>
                <Container fluid className="nosotros">
                    <Row>
                        <Col xs={6} md={4} className="nosotros-img">
                            <img src="https://i.imgur.com/Rx0LB4F.png"></img>
                        </Col>
                        <Col xs={12} md={8} className="nosotros-info">
                            <div className="nosotros-info-text">

                                <h1>
                                    Sobre Nosotros
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="nosotros-info-btn">
                                <Link className="btn btn-danger  " to='/ropa'>Ropa</Link>
                                <Link className="btn btn-danger  " to='/accesorios'>Accesorios</Link>
                            </div>


                        </Col>
                        
                    </Row>


                </Container>
                <Container fluid className="contacto-container">

                    <Row className="row-contacto ">


                        <Col xs={12} md={8} className="contacto mx-auto ">


                            <section className="contacto " id='contacto'>

                                <h4 className="">Envíanos un mensaje</h4>
                                <form action="" className="form ">

                                    <input type="text" className="nombre z-depth-4" placeholder="Nombre:"></input>
                                    <input type="email" className="correo z-depth-4" placeholder="Correo:"></input>
                                    <textarea className='mensaje z-depth-4' name="" id="" cols="auto" rows="4" placeholder="Mensaje:"></textarea>

                                    <MDBBtn color="btn elegant-color white-text  " className=" submit w-35 mx-auto z-depth-4" outline type="submit">
                                        Send
                                            <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
                                </form>
                            </section>
                        </Col>
                    </Row>

                </Container>









            </div>

        );
    }
}

export default Inicio;


{/* 
    z-depth-4
z-depth-4
z-depth-4
    
    <Card className="mx-auto mb-5"  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9ujzwKakNvElI8cJaZzCi7DMMRjtQUZYnQ&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}



{/* <div className="blog-card">
                            <div className="meta">
                                <div className="photo" ></div>

                            </div>
                            <div className="description">
                                <h1>Anuncio Titulo</h1>

                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                                <p className="read-more">
                                    <Link className="btn btn-dark  " to='/accesorios'>Ver más</Link>
                                </p>
                            </div>
                        </div> */}