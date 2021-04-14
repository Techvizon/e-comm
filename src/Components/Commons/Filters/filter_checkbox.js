import react, { useEffect, useState } from 'react';

const Checkbox = (props) =>{
   
    const [chkboxFilterData,setchkboxFilterData] = useState(props.data.data);

    const onChangeChkBox = (chkd,id) => {
        console.log(chkd, id);
        
        /*
        1. Deep clone --> let tmpData = [...Data]
        2. Iterate the temp array --> for() foreach() map() filter()
        3. Update data
        */
        
        let tmpData = [...chkboxFilterData];
        tmpData.forEach((i) => {
          return i.id === id ? (i.checked = chkd) : null;
        });

        console.log(tmpData);
        setchkboxFilterData(tmpData);
    }
    
    return(
            <>
            <h5 className='text-center'>{props.typefilter}</h5>
            <ul className="list-group mb-3">
                
           {chkboxFilterData && chkboxFilterData.map((item)=>{

               return(
                <li key={item.id} className="list-group-item">
                <input key={item.id} id={item.id}  checked={item.checked} onChange={(e)=>{console.log(e.target.checked,item.id );onChangeChkBox(e.target.checked,item.id)}} className="form-check-input me-1" type="checkbox"/>
                {item.name}
                </li>
               )

           })}
            
           
                </ul>
                </>
    );
}

export default Checkbox;