import React from 'react';

import Navbar from '../LandingPage/navbar';
import img from '../Media/iphone.jpg';
import inr from '../Media/inr.png';
import star from '../Media/star.png';
import starh from '../Media/starhalf.png';
import check from '../Media/check.png';
import del from '../Media/del.png';
import next from '../Media/next.png';

function Product () {
    return(
        <>
        <Navbar/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-mid-12'>
                    <h2>Categories<img src={next}/>Mobiles<img src={next}/>iPhone 12</h2>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img src={img} class="d-block w-100" alt="IMAGE 1"/>
                  </div>
                  <div class="carousel-item">
                     <img src={img} class="d-block w-100" alt="IMAGE 2"/>
                  </div>
                  <div class="carousel-item">
                     <img src={img} class="d-block w-100" alt="IMAGE 3"/>
                  </div>
                  </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                   </div>
                </div>
                <div className='col-md-6'>
                      <h3>iPhone 12</h3>
                      <h1><img src={inr}/>59999</h1>
                      <br/>
                      <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={starh}/>200+Ratings</p>
                      <br/>
                      <p><img src={check}/> Bank Offer</p>
                      <p><img src={check}/> Exchange Offer</p>
                      <p><img src={check}/> Instant Discount</p>
                      <br/>
                      <p><img src={del}/>Delivery By Next Monday</p>
                      <br/>
                      <button type="button" className="btn btn-danger">Add To Cart</button>  <button type="button" className="btn btn-warning">Buy Now</button>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    About
                            </button>
                            </h2>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                                   6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording.
                        </div>
                        </div>
                        </div>
                        <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Reviews
                            </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={starh}/>4.5 Rating By Customer 1</p>
                        <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/>4 Rating By Customer 2</p>
                        <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/>5 Rating By Customer 3</p>
                        <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={starh}/>4.5 Rating By Customer 4</p>      
                        </div>
                        </div>
                        </div>
                        </div>
               </div>
            </div>
        </div>
        </>
    );
}

export default Product;