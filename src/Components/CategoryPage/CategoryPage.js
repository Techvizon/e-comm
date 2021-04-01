import react from 'react';


import img from '../../assets/img/catimg.jpg';


const Cat = () =>{
    return(
        <>

        <div className='container'>
            <div className='row'>
            <div className='col-md-12 text-center'>
                    <br/>
                    <h1>All Categories</h1>
                    <br/>
                    </div>
         </div>
        
        
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col-md-3">
                <div className="card">
                  <img src={img} className="card-img-top" alt='Image 1'/>
                  <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                  </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <img src={img} className="card-img-top" alt='Image 2'/>
                <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <img src={img} className="card-img-top" alt='Image 3'/>
                <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <img src={img} className="card-img-top" alt='Image 4'/>
                <div className="card-body">
                    <h5 className="card-title, text-center">Card title</h5>
                </div>
                </div>
            </div>
            </div>
            </div>
        </> 
    );
}

export default Cat;