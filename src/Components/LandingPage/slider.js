import React from 'react';

import i1 from '../Media/img1.jpg'
import i2 from '../Media/img2.jpg'
import i3 from '../Media/img3.jpg'

function Slid() {
    return(
        <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
            <div className="carousel-inner">
                 <div className="carousel-item active">
                 <img className="img-fluid" src={i1} className="d-block w-100" alt="Image1"/>
                 </div>
              <div class="carousel-item">
                 <img className="img-fluid" src={i2} className="d-block w-100" alt="Image2"/>
              </div>
              <div class="carousel-item">
                 <img className="img-fluid" src={i3} className="d-block w-100" alt="Image3"/>
              </div>
            </div>
                 <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                 </a>
                 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                 </a>
        </div>
        </div>
    );
}

export default Slid;