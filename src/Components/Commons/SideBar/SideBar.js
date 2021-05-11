import { react,useEffect, useState  } from "react";
import Checkbox from '../Filters/filter_checkbox';
import Arrival from '../Filters/filter_text';
import GetFilters from '../../Helpers/GetFilters'
const SideBar = (props) => {
    const data = [
        {
            id:1,
            proType:'mobiles',
            data:[{
                filterType: "checkbox",
                filterName: "Price",
                data:[{id:1, name:"<10000", checked:false},
                {id:2, name:"10000 - 20000", checked:false},
                {id:3, name:"20000 - 30000", checked:false},
                {id:4, name:"30000 - 40000", checked:false},
                {id:5, name:">40000", checked:false}]
            },
            {
                filterType: "checkbox",
                filterName: "Discount",
                data:[{id:1, name:"10% Off or more", checked:false},
                {id:2, name:"20% Off or more", checked:false},
                {id:3, name:"35% Off or more", checked:false},
                {id:4, name:"50% Off or more", checked:false}]   
            },
            {
                filterType: "checkbox",
                filterName: "Brands",
                data:[{id:1, name:"Apple", checked:false},
                {id:2, name:"Samsung", checked:false},
                {id:3, name:"OnePlus", checked:false},
                {id:4, name:"Nokia", checked:false}]   
            },
            {
                filterType: "checkbox",
                filterName: "Sellers",
                data:[ {id:1, name:"Seller1", checked:false},
                {id:2, name:"Seller2", checked:false},
                {id:3, name:"Seller3", checked:false},
                {id:4, name:"Seller4", checked:false},
                {id:5, name:"Seller5", checked:false}]   
            },
            {
                filterType: "checkbox",
                filterName: "Availability",
                data:[{id:1,name:"Include Out of Stock", checked:false}]
            },
            {
                filterType: "arrival",
                filterName: "Arrivals",
                data:[{id:"1",text:"30 days"},{id:"2",text:"60 days"}]
            }]
        },
        {
            id:2,
            proType:'laptops',
            data:[{
                filterType: "checkbox",
                filterName: "Brands",
                data:[{id:1, name:"Apple", checked:false},
                {id:2, name:"Asus", checked:false},
                {id:3, name:"Lenovo", checked:false},
                {id:4, name:"Dell", checked:false}]   
            },
            {
                filterType: "checkbox",
                filterName: "Price",
                data:[{id:1, name:"<10000", checked:false},
                {id:2, name:"10000 - 20000", checked:false},
                {id:3, name:"20000 - 30000", checked:false},
                {id:4, name:"30000 - 40000", checked:false},
                {id:5, name:">40000", checked:false}]
            },
            {
                filterType: "checkbox",
                filterName: "Discount",
                data:[{id:1, name:"10% Off or more", checked:false},
                {id:2, name:"20% Off or more", checked:false},
                {id:3, name:"35% Off or more", checked:false},
                {id:4, name:"50% Off or more", checked:false}]   
            },
            {
                filterType: "checkbox",
                filterName: "Sellers",
                data:[ {id:1, name:"Seller1", checked:false},
                {id:2, name:"Seller2", checked:false},
                {id:3, name:"Seller3", checked:false},
                {id:4, name:"Seller4", checked:false},
                {id:5, name:"Seller5", checked:false}]   
            },
            {
                filterType: "checkbox",
                filterName: "Availability",
                data:[{id:1,name:"Include Out of Stock", checked:false}]
            },
            {
                filterType: "arrival",
                filterName: "Arrivals",
                data:[{id:"1",text:"30 days"},{id:"2",text:"60 days"}]
            }]
        }
    ]
    useEffect(()=>{
        console.log("in useEffect")
        setProdType(props.type);
             
    let tmp = data.filter((i)=>{
        return i.proType === props.type;
    })[0];
    console.log('tmp:',tmp);
    setsidebarData(tmp);

    },[])

    const [prodType,setProdType] = useState(null);
    const [sidebarData,setsidebarData] = useState(null);
   



    
    
    return (
        <>
        {/* <button className="btn btn-primary btn-xs" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Filters
  </button> */}
  
        <div className="container-fluid">
	      <div className="row">
          {/* <div className="collapse" id="collapseExample"> */}
		    <div className="col-md-2" style={{borderRight:"2px solid #d0d3d9"}}>
                {/* {filterData && filterData.map((item)=>{
                    getFilters(item)
                })} */}
                {sidebarData && sidebarData.data.map((i)=>{
                   return(GetFilters(i))
                })}
         </div>
         
        <div className="col-md-10">{props.children}</div>
        </div>
        </div>
        </>
    )


}

export default SideBar;