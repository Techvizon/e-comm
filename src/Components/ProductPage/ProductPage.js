import react from 'react';
import { Link } from 'react-router-dom';
import i1 from '../../assets/img/iphone1.jpg';
import i2 from '../../assets/img/iphone2.jpg';
import i3 from '../../assets/img/iphone3.jpg';
import i4 from '../../assets/img/iphone4.jpg';
import i5 from '../../assets/img/iphone5.jpg';
import i6 from '../../assets/img/iphone6.jpg';
import review from '../../assets/img/review.png';
import classes from '../ProductPage/ProductPage.css';

const Product = () => {
    return(
        <>
            <div  class="container">
                <div className="row">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{textDecoration: 'none'}}>
                    <li class="breadcrumb-item"><a><Link  to="/">Home</Link></a></li>
                    <li class="breadcrumb-item"><a><Link  to="/categories">Categories</Link></a></li>
                    <li class="breadcrumb-item"><a><Link  to="/product/mobiles">Mobiles</Link></a></li>
                    <li class="breadcrumb-item active" aria-current="page">iPhone 12</li>
                </ol>
                </nav>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                <div class="col-md-6">
                    
                        <div class="row">
                        <div class="col grc"><img src={i1} class="card-img" alt="IMAGE"/></div>
                        <div class="col grc"><img src={i2} class="card-img" alt="IMAGE"/></div>
                        </div>
                        <div class="row">
                        <div class="col grc"><img src={i3} class="card-img" alt="IMAGE"/></div>
                        <div class="col grc"><img src={i4} class="card-img" alt="IMAGE"/></div>
                        </div>
                        <div class="row">
                        <div class="col grc"><img src={i5} class="card-img" alt="IMAGE"/></div>
                        <div class="col grc"><img src={i6} class="card-img" alt="IMAGE"/></div>
                        </div>
                    
                </div>
                <div class="col-md-6">
                    <h1 className="title">iPhone 12</h1>
                    <h1 className="title-sub">Apple iPhone 12 (128 GB) Black</h1>
                    <h5 className="title-sub" style={{borderBottom:"2px solid #535665"}}><img src={review}/>  500+ Reviews  </h5>
                    <br/>
                    <h3><strong> ₹ 69999 </strong></h3>
                    <br/>
                    <h5> Colours </h5>
                    <img src="https://m.media-amazon.com/images/I/417PwBC+iEL._SS36_.jpg" alt="(PRODUCT)RED" style={{height:'36px'} , {width:'36px'}} ></img><img src="https://m.media-amazon.com/images/I/417PwBC+iEL._SS36_.jpg" alt="(PRODUCT)RED" style={{height:'36px'} , {width:'36px'}} ></img>
                    <br/>
                    <br/>
                    <button type="button" className="btn btn-dark btn-lg">Add To Cart</button>  <button type="button" className="btn btn-outline-dark btn-lg">Add to Wishlist</button>
                    <br/>
                    <br/>
                    <h5>Delivery</h5>
                    <input placeholder="Enter a PIN code" value=""></input>
                    <br/>
                    <br/>
                    <h5>Available Offers</h5>
                    <div className="btn-group dropend" style={{borderBottom:"2px solid #535665"}}>
                    <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Bank Offers</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Bank1</a></li>
                    <li><a className="dropdown-item" href="#">Bank2</a></li>
                    </ul>
                    <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Exchange Offers</button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Company</a></li>
                    <li><a className="dropdown-item" href="#">Model</a></li>
                    <li><a className="dropdown-item" href="#">Estimated Price</a></li>
                    </ul>
                    </div>
                    <br/>
                    <br/>
                    <h5>Product Details</h5>
                    <p>6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording.</p>
                    
                </div>
                </div>
            </div>
        </>
    )
}

export default Product