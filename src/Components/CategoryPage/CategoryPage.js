import react, { useEffect } from 'react';
import i1 from '../../assets/img/catimg.jpg';
import i2 from '../../assets/img/laptops.jpg';
import i3 from '../../assets/img/tv.jpg';
import i4 from '../../assets/img/cloth.jpg';
import SideBar from "../Commons/SideBar/SideBar";
import {Link} from "react-router-dom";
import useFireFetch from '../../hooks/firebase.hook';
import LoaderCircle from '../Commons/Loaders/loader.circle';


const Cat = () =>{

    const getImageRef = (id) => {
            const data = {
                "i1":i1,
                "i2":i2,
                "i3":i3,
                "i4":i3,
            }

            return data[id];
    }

    // const [categories,setcategories] = useAtom(categoriesAtom);
    const { data, error, isLoading } = useFireFetch('categories');
    console.log(data);

    // useEffect(() => {
    //     if(data){
    //         setcategories(data);
    //     }
    // }, [data]);

    // useEffect(() => {
    //     if(categories){
    //        console.log('categories',categories);
    //     }
    // }, [categories]);

    // const categoryData = [
    //     {
    //         id:"1",
    //         typename:"Mobiles",
    //         types:"Mobiles",
    //         url:"/product/mobiles",
    //         img:i1
    //     },
    //     {
    //         id:"2",
    //         typename:"Laptops",
    //         types:"Laptops",
    //         url:"/product/laptops",
    //         img:i2
    //     },
    //     {
    //         id:"3",
    //         typename:"TV",
    //         types:"Tv",
    //         url:"/product/tv",
    //         img:i3
    //     },
    //     {
    //         id:"4",
    //         typename:"Cloths",
    //         types:"Cloths",
    //         url:"/product/cloths",
    //         img:i4
    //     }
    // ]
   

    return(
        <>
          <div className="container">
			<h3 className="text-center">All Categories</h3>
			<div className="row">
                {isLoading && <LoaderCircle/>}
                {data && data.map((i) => {
                    return(
                        <div key={i.id} className="col-md-3">
                        <Link type={i.types} to={i.url} style={{textDecoration:"none"}} >
                        <div  className="card" >
                        <img src={getImageRef(i.img)} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-text text-center" style={{color:"black"}}>{i.typename}</h6>
                        </div>
                        </div>
                        </Link>
				        </div>
                    )
                })}
				</div>
			</div>
        </> 
    );
}

export default Cat;