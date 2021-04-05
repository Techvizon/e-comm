import react from 'react';
import img from '../../assets/img/iphone.jpg';
import SideBar from '../Commons/SideBar/SideBar.js'
import i1 from '../../assets/img/iphone.jpg';

const Prolist = () =>{
    return(
        <>
        <SideBar>
            
            <h3 class="text-center">Mobiles</h3>
            <div class="row">
			<div class="col-md-4">
            <div class="card" style={{width: "18rem"}}>
            <img src={i1} class="card-img-top" alt="..."/>
           <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div class="col-md-4">
            <div class="card" style={{width: "18rem"}}>
            <img src={i1} class="card-img-top" alt="..."/>
           <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            <div class="col-md-4">
            <div class="card" style={{width: "18rem"}}>
            <img src={i1} class="card-img-top" alt="..."/>
           <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
            </div>
            </div>
            </div>
            </div>
         </SideBar>
        </>
    );
}

export default Prolist;