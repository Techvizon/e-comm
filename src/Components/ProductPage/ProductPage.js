import React from 'react';
import ImageGallery from 'react-image-gallery';
import img1 from '../../assets/img/iphoneblack1.jpeg';
import img1s from '../../assets/img/iphoneblack1small.jpeg';
import img2 from '../../assets/img/iphoneblack2.jpeg';
import img2s from '../../assets/img/iphoneblack2small.jpeg';
import img from '../../assets/img/iphone.jpg';
import inr from '../../assets/img/inr.png';
import star from '../../assets/img/star.png';
import starh from '../../assets/img/starhalf.png';
import check from '../../assets/img/check.png';
import del from '../../assets/img/del.png';
import next from '../../assets/img/next.png';
import "react-image-gallery/styles/css/image-gallery.css";
const Product = (props) =>{
    const images = [
        {
          original: img1,
          thumbnail: img1s,
        },
        {
          original: img2,
          thumbnail: img2s,
        },
      ];
      const singleproductData =[
        {
            id:"1",
            title: "iPhone",
            rating: "5",
            reviews:"400+",
            price: "69999",
            discount:"10%",
            tax:"10%",
            offers: [
                {
                bank_offers: [
                    {
                        text: "SBI Credit Card Offer",
                        tnc:"Terms & Conditions",
                        extLink:""
                    }
                ],
                exchange_offers: [
                    {
                        text: "Old Phone Exchange",
                        tnc:"Terms & Conditions",
                        oldproductname:"Apple",
                        price:"10000"
                    }
                ],
                emi_offers: [
                    {
                        text: "SBI and ICICI Emi options",
                        tnc:"Terms & Conditions",
                        extLink:"",
                        emiamount:"60000"
                    }
                ]
            }
            ],
            promtions:{
                text:"Get Cover Free",
                price:""
            },
            productType:{
                color:[
                    {
                        id:"2",
                        name:"Black",
                        image:""
                    }
                ],
                storage:[
                    {
                        id:"3",
                        name:"64 GB",
                        image:""
                    }
                ],
                variants:[
                    {
                        id:"4",
                        name:"iPhone 12 Pro",
                        image:""
                    }
                ]
            },
            productDetails:"6.1-inch 15.5 cm diagonal Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording.",
            highlightDetails:"Retina Display",
            technicalDetails:"4 GB Ram",
            productDescription:"Six Different Colours"
        }
      ]
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-mid-12'>
                    <h4>{singleproductData.title}</h4>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="col-md-4">
            <ImageGallery showPlayButton={false} showNav={false} showFullscreenButton={false} thumbnailPosition="left" items={images} />
            </div>
            {singleproductData.map((i)=>{
                return(
                    <div key={i.id} class="col-sm-6">
                    <h3>{i.title}</h3>
                    <h1><img src={inr}/>{i.price}</h1>
                    <br/>
                    <p><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={starh}/>{i.rating} Rating</p>
                    <br/>
                    <p><img src={check}/> {i.reviews} Reviews</p>
                    <p><img src={check}/> {i.bank_offers} Bank Offers</p>
                    <p><img src={check}/> {i.exchange_offers} Exchange Offers</p>
                    <p><img src={check}/> {i.discount} Discounts</p>
                    <br/>
                    <p><img src={del}/>Delivery By Next Monday</p>
                    <br/>
                    <button type="button" className="btn btn-danger">Add To Cart</button>  <button type="button" className="btn btn-warning">Buy Now</button>
                    </div>
                )})}
           </div>
</div>
<hr />
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