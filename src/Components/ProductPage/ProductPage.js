import React from 'react';


import img from '../../assets/img/iphone.jpg';
import inr from '../../assets/img/inr.png';
import star from '../../assets/img/star.png';
import starh from '../../assets/img/starhalf.png';
import check from '../../assets/img/check.png';
import del from '../../assets/img/del.png';
import next from '../../assets/img/next.png';

function Product () {
    return(
        <>

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
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src={img} className="d-block w-100" alt="IMAGE 1"/>
                  </div>
                  <div className="carousel-item">
                     <img src={img} className="d-block w-100" alt="IMAGE 2"/>
                  </div>
                  <div className="carousel-item">
                     <img src={img} className="d-block w-100" alt="IMAGE 3"/>
                  </div>
                  </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
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
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    About
                            </button>
                            </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                                   6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording.
                        </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Reviews
                            </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
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