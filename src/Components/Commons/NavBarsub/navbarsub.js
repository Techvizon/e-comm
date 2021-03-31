import React from 'react';

const Navsub = () =>{
    return(
        <nav className="navbar-xs navbar-expand navbar-light bg-light">
        <div className="container-fluid">
       
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSub" aria-controls="navbarSub" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSub">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <button className="btn btn-sm">
            <span className="navbar-toggler-icon"></span>
            </button>

           

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
    );
}

export default Navsub;