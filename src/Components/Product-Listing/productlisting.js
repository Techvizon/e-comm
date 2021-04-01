import react from 'react';
import img from '../../assets/img/iphone.jpg';

const Prolist = () =>{
    return(
        <>
        <div class="container">
         <div class="row">
          <div class="col-md-2">
            <h3 class="text-left">Filters</h3>
          </div>
          <div class="col-md-10">
             <h2 class="text-center">Products</h2>
          </div>
         </div>
        </div>
        <div class="container-fluid">
          <div class="row">
             <div class="col-md-2">
             <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        First checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Second checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Third checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Fourth checkbox
                    </li>
                    </ul>    
             </div>
             <div class="col-md-10">
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                    <div class="card h-100">
                    <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    </div>
             </div>
             <div class="col-md-2">
                    <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        First checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Second checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Third checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Fourth checkbox
                    </li>
                    </ul>
             </div>
             <div class="col-md-10">
             <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                    <div class="card h-100">
                    <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    </div>
             </div>
             <div class="col-md-2">
             <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        First checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Second checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Third checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Fourth checkbox
                    </li>
                    </ul>
             </div>
             <div class="col-md-10">
             <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                    <div class="card h-100">
                    <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    </div>
             </div>
             <div class="col-md-2">
             <ul class="list-group">
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        First checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Second checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Third checkbox
                    </li>
                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                        Fourth checkbox
                    </li>
                    </ul>
             </div>
             <div class="col-md-10">
             <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                    <div class="card h-100">
                    <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src={img} className="card-img-top" alt="IMAGE"/>
                        <div class="card-body">
                        <h5 class="card-title">iPhone 12</h5>
                        <p class="card-text">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                   Ceramic Shield, tougher than any smartphone glass
                                   A14 Bionic chip, the fastest chip ever in a smartphone
                                   Advanced dual-camera system with 12MP Ultra Wide and Wide cameras</p>
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

export default Prolist;