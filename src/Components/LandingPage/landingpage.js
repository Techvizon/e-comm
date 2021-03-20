import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../Commons/Navbar/navbar';
import Slid from '../Slider/slider';
import Random from '../Commons/randomproducts';

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