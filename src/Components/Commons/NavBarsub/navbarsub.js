import React, { useState } from 'react';
import classes from './NavbarSub.module.css'
import { ReactComponent as HamburgerIcon } from '../../../assets/img/hamburger_icon.svg';
import { Link } from 'react-router-dom';
import sb from '../../../assets/img/white.png';
const Navsub = () =>{
    return(
        <>
        <nav className="navbar-xs navbar-expand navbar-dark bg-dark">
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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/mobiles">Mobiles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product/laptops">Laptops</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Deals</a>
            </li>
            </ul>
            </div>
        </div>
        </nav>
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">Hello User</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <hr/>
          <h5>Trending</h5>
          <p>Best Deals</p>
          <p>Latest Products</p>
          <p>Upcoming Products</p>
          <hr/>
          <h5>Electronics</h5>
          <p>Mobiles</p>
          <p>Laptops</p>
          <p>TV</p>
          <p>Audio</p>
          <hr/>
          <h5>Fashion</h5>
          <p>Men's Wear</p>
          <p>Women's Wear</p>
          <p>Footwear</p>
          <p>Accessories</p>
        </div>
        </div>
        </>
    );
}

export default Navsub;