import react from 'react'

const Ct = () => {
    return(
        <>
         <section className="container pt-md-3 pb-5 mb-md-3">
      <h2 className="h3 text-center">Trending products</h2>
      <div className="row pt-4 mx-n2">
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="" data-bs-original-title="Add to wishlist" aria-label="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/01.jpg" alt="Product"/></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sneakers &amp; Keds</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">$154.<small>00</small></span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-75"/>
                  <label className="form-option-label" for="s-75">7.5</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-80" checked=""/>
                  <label className="form-option-label" for="s-80">8</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"/>
                  <label className="form-option-label" for="s-85">8.5</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-90"/>
                  <label className="form-option-label" for="s-90">9</label>
                </div>
              </div>
              <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
              <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
            </div>
          </div>
        
      </div>
      <div className="text-center pt-3"><a className="btn btn-outline-accent" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1"></i></a></div>
      </div>
    </section>
        </>
    )
}

export default Ct;