import React, { Component } from 'react';

//Boostrap
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, ProgressBar } from 'react-bootstrap'

//Material UI
import { AppBar,Tabs,  Tab } from '@material-ui/core';

import { Link } from 'react-router-dom';
require('./navigation.css')
class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            navColor: 'navbar negro'
        }
      
        this.scrollDetection = this.scrollDetection.bind(this);
      }
    
      componentDidMount () {
          this.setState({
                 navColor:'navbar negro'
              })
              
        window.addEventListener('scroll', this.scrollDetection);   
              
      }
      
    
      scrollDetection() {
        let actual = window.scrollY;
        actual = actual.toFixed()
        let maximoDeLaVentana = document.body.offsetHeight;
        let porcentaje = (actual*100)/maximoDeLaVentana
        porcentaje = porcentaje.toFixed()
        console.log(porcentaje)
        if(porcentaje > 25){
            console.log("navbar negro")
            this.setState({
                navColor:'navbar blanco'
             })
        }else{
            console.log("blanco")
            this.setState({
                navColor:'navbar negro'
             })
        }
     }

        


    render() {
       


        




       // className={`navigation  ${this.state.navColor}`
        
        return (
            <div  className={`navigation  `}>
                {/* {this.scrollDetection()}  */}
                <header className="header">
                    <img className="header-img" src='https://i.imgur.com/Rx0LB4F.png' ></img>
                    <div>
                        <Link className="btn  green accent-2  btn-login " to='/signin'>Ingresar</Link>
                        <Link className="btn btn-outline-warning btn-registro" to='/signup'>Registrarse</Link>
                    </div>
                </header>
                <navbar className={this.state.navColor}>
                    <ul className='navbar-ul'>
                            <Link className="link" to='/'>Inicio</Link>
                            <Link className="link" to='/ropa'>Ropa</Link>
                            <Link className="link" to='/accesorios'>Accesorios</Link>
                    </ul>
                    <Link className="link" to='/carrito'><img src='https://i.imgur.com/njkbEqP.png' className="carritoIMG"></img></Link>
                    
                </navbar>

                
            </div>


        );
    }
}

export default Navigation;
