import React from "react";

import logo from "../../../assets/img/logo.png";

import { Link, NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../../../atom/auth.atom";
import classes from "./navbar.module.css";

const Navbar = () => {
  const [isAuth, setAuth] = useAtom(authAtom);

  const logoutHandler = () => {
    setAuth(false);
  };

  const CartIcon = () => {
    return (
      <>
        <div className={classes.wrapper}>
          <i className={"bi bi-cart " + [classes.cart_icon]} value="5"></i>
          <span> 5 </span>
        </div>
      </>
    );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="LOGO" width="30" height="24" />
          <b> Online Market </b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="container-fluid collapse navbar-collapse"
          id="navbarMain"
        >
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Add To Cart
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isAuth ? (
              <li className="pe-3">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-warning"
                  onClick={() => {
                    logoutHandler();
                  }}
                >
                  LogOut
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="../signin" className="nav-link ">
                  LogIn
                </Link>
              </li>
            )}

            <li className="nav-item">
              <CartIcon />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
