import React , { Component} from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';
import './App.css';


import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Inicio from './components/inicio/Inicio'
import Ropa from './components/products/Ropa'
import Accesorios from './components/products/Accesorios'
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup'
import Vistaproducto from './components/products/Vistaproducto'
import Carrito from './components/shop/Carrito'
class App extends Component {

  
    render() {

      return (
        
        <div  ref={this.myRef}  onScroll={this.scrollDetection}>
          
        <Router >
           <Navigation></Navigation>
            <Switch>
              <Route path='/' exact  component={Inicio}></Route>
              <Route path='/ropa'   component={Ropa}></Route>
              <Route path='/accesorios'   component={Accesorios}></Route>
              <Route path='/signin' exact  component={Signin}></Route>
              <Route path='/signup'   component={Signup}></Route>
              <Route path='/carrito'   component={Carrito}></Route>
              <Route path='/productos/informacion'   component={Vistaproducto}></Route>
            </Switch>
            <Footer></Footer>
        </Router>
        </div>
    
    
      );
    }
}

export default App;
