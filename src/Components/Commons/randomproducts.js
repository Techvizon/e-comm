import React from 'react';
import img from '../../assets/img/iphone.jpg';
import i1 from '../../assets/img/iphone.jpg';
import i2 from '../../assets/img/laptop1.jpg';

function Random() {
    const randomData = [
        {
            id:"1",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"2",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"3",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"4",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"5",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"6",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"7",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"8",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"9",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"10",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"11",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"12",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"13",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"14",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        },
        {
            id:"15",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"16",
            title:"Asus Zenbook",
            about:"144hz display",
            img:i2
        }
    ]
    return(
      <>
      <div className='container'>
      <div className="row">
                        {randomData && randomData.map((i) => {
                            return(
                                <div key={i.id} className="col-md-3">
                                <div className="card" style={{border:'None',padding:'20px'}}>
                                   <img src={i.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{i.title}</h5>
                                    <p className="card-text">{i.about}</p>
                                    <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                                </div>
                                </div>
                                </div>
                            )
                        })}
                </div>
      </div>
      </>
    );
}

export default Random;