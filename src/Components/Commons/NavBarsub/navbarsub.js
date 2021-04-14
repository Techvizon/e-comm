import React, { useState } from 'react';
import classes from './NavbarSub.module.css'
import { ReactComponent as HamburgerIcon } from '../../../assets/img/hamburger_icon.svg';
import sb from '../../../assets/img/hamburger_icon.svg';
const Navsub = () =>{

    
    return(
        <>
        <nav className="navbar-xs navbar-expand navbar-light bg-light">
        <div className="container-fluid">
       
           
            
            <div className="collapse navbar-collapse" id="navbarSub">
            {/* <button className="btn btn-outline-dark btn-sm" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
           All
            </button> 
&nbsp;&nbsp; */}

{/* <HamburgerIcon className="btn btn-sm" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"  className="sub_ham"/> */}
            
            <img className={classes.sub_ham} src={sb}  type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"/>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            


           

                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
               </ul>
            </div>
        </div>
        </nav>
        

      


<div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Offcanvas with backdrop</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>.....</p>
  </div>
</div>




        </>
    );
}

export default Navsub;