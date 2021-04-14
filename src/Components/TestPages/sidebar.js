import { react  } from "react";

const Si = () => {


    return (
        <>
        <div className="container">
	<div className="row">
		<div className="col-md-2" style={{borderRight:"2px solid #d0d3d9"}}>
        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
        Home
      </button>
    
      <div className="collapse" id="home-collapse" >
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" className="link-dark rounded">Overview</a></li>
          <li><a href="#" className="link-dark rounded">Updates</a></li>
          <li><a href="#" className="link-dark rounded">Reports</a></li>
        </ul>
      </div>
        <br/>

        <ul className="list-group">
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    First checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Second checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Third checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Fourth checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Fifth checkbox
  </li>
</ul>
<br/>
<ul className="list-group">
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    First checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Second checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Third checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Fourth checkbox
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
    Fifth checkbox
  </li>
</ul>


		</div>


  

		<div className="col-md-10">
			<h3 className="text-center">
				h3. Lorem ipsum dolor sit amet.
			</h3>
			<div className="row">
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
			</div>
			<div className="row">
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
			</div>
			<div className="row">
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
				<div className="col-md-3">
				</div>
			</div>
		</div>
	</div>
</div>
        </>
    )


}

export default Si;