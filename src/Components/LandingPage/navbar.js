import React from 'react';

import logo from '../Media/logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
    return(
       
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand" href="#"><img src={logo} alt="LOGO"/><b> Online Market </b></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
               </button>
           
             <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                     </Link>
                 
              </li>

              <li className="nav-item active">
                  <Link className="nav-link" to="/signup">
                  SignUp <span className="sr-only">(current)</span>
                     </Link>
                 
              </li>

              <li className="nav-item">
                 <a className="nav-link" href="#">Categories</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="#">Add To Cart</a>
              </li>
              <li className="nav-item">
                 <a className="nav-link" href="#">My Account</a>
              </li>
             </ul>
            
        </nav>
          
       
    );

}

export default Navbar;