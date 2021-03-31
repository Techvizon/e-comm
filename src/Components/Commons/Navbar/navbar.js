import React from 'react';

import logo from '../../../assets/img/logo.png';

import { Link } from 'react-router-dom';


function Navbar() {
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand" href="#"><img src={logo} alt="LOGO" width="30" height="24"/><b> Online Market </b></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="navbarMain">
                <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarMain">
               <ul className="navbar-nav ml-auto ">
               <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>  
              </li>

              <li className="nav-item">
                 <Link className="nav-link" to="/categories">Categories</Link>
              </li>

              <li className="nav-item">
                 <a className="nav-link" href="#">Add To Cart</a>
              </li>

              <li className="nav-item">
                 <Link className="nav-link" to="/signup">SignUp</Link>
              </li>

                     
             </ul>
             </div>
            
        </nav>
          
      
       </>
    );

}


export default Navbar;