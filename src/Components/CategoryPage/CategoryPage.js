import react from 'react';
import  SideBar  from "../Commons/SideBar/SideBar";

import img from '../../assets/img/catimg.jpg';


const Cat = () =>{
    return(
        <>
        
       
           
          <SideBar>
          <div >
			<h3 class="text-center">
				h3. Lorem ipsum dolor sit amet.
			</h3>
			<div class="row">
				<div class="col-md-4">
                <div class="card" style={{width:"18rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
				</div>
				<div class="col-md-4">
                <div class="card" style={{width:"18rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
				</div>
				<div class="col-md-4">
                <div class="card" style={{width:"18rem"}}>
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
				</div>
				
			</div>
			<div class="row">
				<div class="col-md-3">
				</div>
				<div class="col-md-3">
				</div>
				<div class="col-md-3">
				</div>
				<div class="col-md-3">
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
				</div>
				<div class="col-md-3">
				</div>
				<div class="col-md-3">
				</div>
				<div class="col-md-3">
				</div>
			</div>
		</div>

          </SideBar>
      
        
 
            
        </> 
    );
}

export default Cat;