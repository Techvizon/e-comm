import { react  } from "react";
import Checkbox from '../Filters/filter_checkbox'

const SideBar = (props) => {

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
        <div className="container-fluid">
	      <div className="row">
		    <div className="col-md-2" style={{borderRight:"2px solid #d0d3d9"}}>
                {/* {filterData && filterData.map((item)=>{
                    getFilters(item)
                })} */}
         <Checkbox typefilter="Brands"
         filter1 ="Apple"
         filter2 ="Samsung"
         filter3 ="OnePlus"
         filter4 ="LG"
         filter5 ="Nokia"
         />
         <br/>
         <Checkbox typefilter="Price Range"
         filter1 ="Below 5000"
         filter2 ="Between 5000 and 10000"
         filter3 ="Between 10000 and 20000"
         filter4 ="Between 20000 and 40000"
         filter5 ="Above 40000"
         />
         </div>
        <div className="col-md-10">{props.children}</div>
        </div>
        </div>
        </>
    )


}

export default SideBar;