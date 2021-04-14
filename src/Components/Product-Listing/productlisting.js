import react, { useEffect } from 'react';
import img from '../../assets/img/iphone.jpg';
import SideBar from '../Commons/SideBar/SideBar.js'
import i1 from '../../assets/img/iphone.jpg';
import GetFilters from '../Helpers/GetFilters';

const Prolist = (props) =>{

 

    
    
    return(
        <>
        <SideBar type={props.location.pathname.toString().split('/')[2]} >
                  <h3 className="text-center">Mobiles</h3>
                    <div className="row">
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card" >
                       <img src={i1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iPhone</h5>
                        <p className="card-text">Super Retina XDR display</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>         <a href="#" className="btn btn-warning">Add To Cart</a>
                    </div>
                    </div>
                    </div>
                </div>
         </SideBar>
        </>
    );
}

export default Prolist;