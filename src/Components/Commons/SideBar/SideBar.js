import { react,useEffect, useState  } from "react";
import Checkbox from '../Filters/filter_checkbox';
import Arrival from '../Filters/filter_text';
import GetFilters from '../../Helpers/GetFilters'
const SideBar = (props) => {
    
    useEffect(()=>{
        setProdType(props.type);
    })

    const [prodType,setProdType] = useState(null);
    const data = [{
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
     // const getFilters = (item) =>{
    //     switch (item.type) {
    //         case "checkbox":
    //             return <Checkbox data={item.data} filterName={item.filterName}/>
    //             break;
    //         case "checkbox":
    //              return <Ratings data={item.data} filterName={item.filterName}/>
    //              break;
    //         default:
    //             break;
    //     }
    // }
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
                {data.map((i)=>{
                   return(GetFilters(i))
                })}
        {/* {data.map((i)=>{
           if(i.filterType === 'checkbox') return(<>
           
           <Checkbox typefilter={i.filterName} data={i.data} />
           
           </>)
            else if(i.filterType === 'arrival') return(
                <>
                <Arrival typefilter={i.filterName} data={i.data}/>
                </>
            )
        })} */}

        {/* {props.type && props.type === 'mobiles' && <Brands typefilter="Brands"/>}   */}
        {/* {  GetFilters(prodType)} */}
         {/* <br/>
         <Checkbox typefilter="Price Range"/>
         <br/>
         <Discount typefilter="Discounts"/>
         <br/>
         <Deals typefilter="Deals"/>
         <br/>
         <Sellers typefilter="Sellers"/>
         <br/>
         <Available typefilter="Availability"/>
         <br/>
         <Arrival typefilter="New Arrivals"/> */}
         </div>
         {/* </div> */}
        <div className="col-md-10">{props.children}</div>
        </div>
        </div>
        </>
    )


}

export default SideBar;