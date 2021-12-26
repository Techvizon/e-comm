import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authAtom } from '../../atom/auth.atom';
import '../Account/Account.css'

const SignIN =()=> {

    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [,setAuth] = useAtom(authAtom);
    const navigate = useNavigate();
    const { state } = useLocation();

    const loginHandler = async() =>{

        console.log(username,password)
        if(username === "a@b.com" && password === "123"){
            setAuth(true);
            navigate(state?.path || "/");
        }

        // const param = {
        //     "email":"Developer5@gmail.com",
        //     "password":123456
        // }
        
        // const resp = await axios.post("https://9c26d081-0af5-41d4-8b50-5b9ccf178bcb.mock.pstmn.io/api/login",param);
        // console.log('Login Response',resp);

    }


    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <br/>
                    <h1>Welcome to Online Market</h1>
                    <br/>
                    <form className='signin'>
                       <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onKeyUp={(e)=>{setusername(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                       </div>
                       <br/>
                       <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onKeyUp={(e)=>{setpassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1"/>
                       </div>
                       <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                       </div>
                       <br/>
                       <button type="submit" className="btn-lg btn-dark btn-block" onClick={()=>{loginHandler()}}>Log In</button>
                    </form>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                        <a href='/signup'>Sign Up</a>     <a>|</a>     <a href='/signup'>Password</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignIN;