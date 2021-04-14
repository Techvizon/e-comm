import react from 'react';
import img from '../../assets/img/catimg.jpg';
import SideBar from "../Commons/SideBar/SideBar";
import {Link} from "react-router-dom";

const Cat = () =>{

    const categoryData = [
        {
            id:"1",
            typename:"Mobiles",
            types:"Mobiles",
            url:"/product/mobiles"
        },
        {
            id:"2",
            typename:"Laptops",
            types:"Laptops",
            url:"/product/laptops"
        },
        {
            id:"3",
            typename:"TV",
            types:"Tv",
            url:"/product/tv"
        },
        {
            id:"4",
            typename:"Cloths",
            types:"Cloths",
            url:"/product/cloths"
        }
    ]
   

    return(
        <>
          <div className="container">
			<h3 className="text-center">All Categories</h3>
			<div className="row">
                {categoryData && categoryData.map((i) => {
                    return(
                        <div key={i.id} className="col-md-3">
                        <div  className="card" >
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p className="card-text"><Link type={i.types} to={i.url}  >{i.typename}</Link></p>
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

export default Cat;