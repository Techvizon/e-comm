import react from 'react';
import Navbar from '../Commons/Navbar/navbar';
import img from '/Users/MWxStarBoy/Desktop/Ecom/site/src/assets/img/catimg.jpg';

const Cat = () =>{
    return(
        <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-md-12 text-center'>
                    <br/>
                    <h1>All Categories</h1>
                    <br/>
                    </div>
         </div>
         </div>
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                  <img src={img} className="card-img-top" alt='Image 1'/>
                  <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                  </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={img} className="card-img-top" alt='Image 2'/>
                <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={img} className="card-img-top" alt='Image 3'/>
                <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src={img} className="card-img-top" alt='Image 4'/>
                <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                </div>
                </div>
            </div>
            </div>
        </> 
    );
}

export default Cat;