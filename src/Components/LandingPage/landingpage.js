import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../Commons/Navbar/navbar';
import Slid from '../Slider/slider';
import Random from '../Commons/randomproducts';
import Navsub from '../Commons/NavBarsub/navbarsub';

import Can from '../Canvas';

function Landingpage() {
    return(
        <div>
            
             <Nav/>
             <Navsub/>
             <Slid/>
             <Random/>
             <Random/>
        </div>
           
          
    );

}

export default Landingpage;