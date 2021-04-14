import React from 'react';
import Checkbox from "../Commons/Filters/filter_checkbox";
import Arrival from "../Commons/Filters/filter_text";
const GetFilters = (data) => {
// console.log(type);
// const data = [{
//     filterType: "checkbox",
//     filterName: "MyBrands",
//     data:[{},{}]
// },{
//     filterType: "checkbox",
//     filterName: "MyBrand2",
//     data:[{},{}]
// }]

//     switch (type) {
//         case 'mobiles':
//             return (
//                 <>
               
//                 </>
//             )
            
//             break;
//         case 'laptop':
//             return(
//                 <>
//                 <h1>HIII</h1>
//                 </>
//             )
    
//         default:
//             break;
//     }
if(data.filterType === 'checkbox') 
    return(<>
        <Checkbox key={data.id} typefilter={data.filterName} data={data} />
        </>)
 else if(data.filterType === 'arrival') 
    return(<>
        <Arrival key={data.id} typefilter={data.filterName} data={data.data}/>
        </>)
}


export default GetFilters;