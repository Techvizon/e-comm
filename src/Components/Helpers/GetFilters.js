import React from 'react';
import Checkbox from "../Commons/Filters/filter_checkbox";
import Arrival from "../Commons/Filters/filter_text";
const GetFilters = (data) => {

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