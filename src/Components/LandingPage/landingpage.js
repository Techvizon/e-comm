import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './navbar';
import Slid from './slider';
import Random from './randomproducts';

function Landingpage() {
    return(
        <div>
             <Nav/>
             <Slid/>
             <Random/>
             <Random/>
        </div>
           
          
    );

}

export default Landingpage;