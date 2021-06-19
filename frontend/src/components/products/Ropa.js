import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBCardFooter, MDBTooltip, MDBView } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
require('./productos.css')
class Ropa extends Component {
    render() {
        return (
            <Container fluid className="Container">
                <h1>Nuestra colección de ropa</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <MDBCard className="card z-depth-2">
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                waves />
                            <MDBCardBody className="card-body">
                                <MDBCardTitle className="card-title">Card title</MDBCardTitle>
                                <MDBCardText className='card-text black-text '>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                {/* Dependiendo el contenido */}
                                <Link className="btn btn-dark " to='/ropa'>Ver más</Link>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col xs={12} md={4}>
                        <MDBCard className="card z-depth-2">
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                waves />
                            <MDBCardBody className="card-body">
                                <MDBCardTitle className="card-title">Card title</MDBCardTitle>
                                <MDBCardText className='card-text black-text '>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                {/* Dependiendo el contenido */}
                                <Link className="btn btn-dark " to='/ropa'>Ver más</Link>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col xs={12} md={4}>
                        <MDBCard className="card z-depth-2">
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                waves />
                            <MDBCardBody className="card-body">
                                <MDBCardTitle className="card-title">Card title</MDBCardTitle>
                                <MDBCardText className='card-text black-text '>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                {/* Dependiendo el contenido */}
                                <Link className="btn btn-dark " to='/ropa'>Ver más</Link>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>

                    

                </Row>
            </Container>
        );
    }
}

export default Ropa;
