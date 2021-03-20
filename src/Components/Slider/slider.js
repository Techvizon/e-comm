import React from 'react';

import i1 from '/Users/MWxStarBoy/Desktop/Ecom/site/src/assets/img/img1.jpg';
import i2 from '/Users/MWxStarBoy/Desktop/Ecom/site/src/assets/img/img2.jpg';
import i3 from '/Users/MWxStarBoy/Desktop/Ecom/site/src/assets/img/img3.jpg';

function Slid() {
    return(
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
         <div className="carousel-item active">
            <img src={i1} className="d-block w-100" alt="Image 1"/>
         </div>
         <div className="carousel-item">
            <img src={i2} className="d-block w-100" alt="Image 2"/>
         </div>
         <div className="carousel-item">
            <img src={i3} className="d-block w-100" alt="Image 3"/>
         </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
      </button>
   </div>   
    );
         
}

export default Slid;