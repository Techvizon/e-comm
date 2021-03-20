import React from 'react';

import Navbar from '../Commons/Navbar/navbar';
import '../Account/Account.css'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


function SignUP() {

  console.log(useHistory());

    return(
        <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-md-12 text-center'>
                    <br/>
                    <h1>Welcome to Online Market</h1>
                    <br/>
                  <form className="row g-3">
                  <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">Name</label>
                  <input type="text" className="form-control" id="inputName"/>
                  </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-6">
                  <label for="inputAddress" className="form-label">Email Address</label>
                  <input type="text" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                  <label for="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select">
                    <option selected>Uttar Pradesh</option>
                    <option>Delhi</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">Pincode</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                     I Agree to Terms and Conditions
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Register</button>    <Link  to="/signin"><button type="submit" className="btn btn-primary">Log In</button></Link>
                </div>
              </form>
              </div>
            </div>
        </div>
        </>
    );
}

export default SignUP;