import react, { useEffect, useState } from 'react';
import img from '../../assets/img/iphone.jpg';
import SideBar from '../Commons/SideBar/SideBar.js'
import i1 from '../../assets/img/iphone.jpg';
import i2 from '../../assets/img/laptop1.jpg';
import GetFilters from '../Helpers/GetFilters';

const Prolist = (props) =>{

    
    const productData = [
        {
        id:1,
        product:"Mobiles",
        type:"mobiles",
        data:[{
            id:"1",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"2",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"3",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"4",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"5",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"6",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"7",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"8",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"9",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"10",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"11",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        },
        {
            id:"12",
            title:"iPhone",
            about:"Super Retina XDR display",
            img:i1
        }]
        },

        {
            id:2,
            product:"Laptops",
            type:"laptops",
            data:[{
                id:"1",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"2",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"3",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"4",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"5",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"6",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"7",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"8",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"9",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"10",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"11",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            },
            {
                id:"12",
                title:"Asus Zenbook",
                about:"144hz display",
                img:i2
            }]
            }
    ];

    // const [displayData,setdisplayData] = useState({})
    const displayData = productData.filter((i)=>{
            return i.type === props.location.pathname.toString().split('/')[2];
        })[0];



    return(
        <>
        
        <SideBar type={props.location.pathname.toString().split('/')[2]} >
                  <h3 className="text-center">{displayData.product}</h3>
                    <div className="row">
                        { displayData.data.map((i) => {
                            return(
                                <div key={i.id} className="col-md-3">
                                <div className="card" >
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
         </SideBar>
        </>
    );
}

export default Prolist;