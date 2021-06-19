import React, { Component } from 'react';
import axios from 'axios'

require('./footer.css')
class Footer extends Component {
    render() {

       

        return (
            <div className="container-footer">

                <div className="footer">
                    <div className='footer-titulo'>
                        <p>A g á p e </p>
                        <p> 2021-2022</p>
                    </div>
                    
                    <div className="social">
                        <a href="https://www.facebook.com/Ag%C3%A1pe-Tienda-Online-105297704567427/" target="_blank" className="a facebook"><img src="https://i.imgur.com/G8ZrHYl.png" className="social-icon facebook"></img></a>
                        <a  target="_blank"  href="https://www.instagram.com/agapetiendaonline/" className="a instagram"><img src="https://i.imgur.com/1j0Qpyh.png" className="social-icon instagram"></img></a>
                        <a  target="_blank"  href='https://api.whatsapp.com/send?phone=549356465-6612' className="a wpp">  <img src="https://i.imgur.com/dwmKlWp.png" className="social-icon facebook wpp"></img></a>
                    
                        
                        
                    
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
