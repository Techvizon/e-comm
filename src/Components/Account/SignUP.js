import React from 'react';

import Navbar from '../LandingPage/navbar';
import '../Account/Account.css'
import { useHistory } from "react-router-dom";


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
                        <form className='signin'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">Name</label>
                              <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPassword4">Password</label>
                              <input type="password" className="form-control" id="inputPassword4"/>
                            </div>
                            </div>
                            <div className="form-group">
                              <label for="inputAddress">Email Address</label>
                              <input type="text" className="form-control" id="inputAddress" placeholder="House No"/>
                            </div>
                            <div className="form-group">
                              <label for="inputAddress">Address</label>
                              <input type="text" className="form-control" id="inputAddress" placeholder="Floor"/>
                            </div>
                            <div className="form-group">
                              <label for="inputAddress2">Address 2</label>
                              <input type="text" className="form-control" id="inputAddress2" placeholder="Landmark"/>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputCity">City</label>
                              <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-4">
                              <label for="inputState">State</label>
                              <select id="inputState" className="form-control">
                                <option selected>Choose</option>
                                <option>Uttar Pradesh</option>
                              </select>
                            </div>
                            <div className="form-group col-md-2">
                              <label for="inputZip">ZipCode</label>
                              <input type="text" className="form-control" id="inputZip"/>
                            </div>
                            </div>
                            <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="gridCheck"/>
                              <label className="form-check-label" for="gridCheck">
                                I Agree to Terms and Conditions
                              </label>
                              </div>
                            </div>
                            <button type="submit" className="btn-lg btn-dark btn-block">Register</button>
                        </form>
                </div>    
            </div>
        </div>
        </>
    );
}

export default SignUP;