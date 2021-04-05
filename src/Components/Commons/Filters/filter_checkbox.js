import react, { useState } from 'react';

const Checkbox = (props) =>{
    const [chkboxFilterData,setchkboxFilterData] = useState( [
        {id:1, name:"C1", checked:false},
        {id:2, name:"C2", checked:false},
        {id:3, name:"C3", checked:false},
        {id:4, name:"C4", checked:false},
        {id:5, name:"C5", checked:false},
    ]);

    const onChangeChkBox = (chkd,id) => {
        console.log(chkd, id);

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
            <ul class="list-group">
           { chkboxFilterData.map((item)=>{

               return(
                <li key={item.id} class="list-group-item">
                <input id={item.id}  checked={item.checked} onChange={(e)=>{console.log(e.target.checked,item.id );onChangeChkBox(e.target.checked,item.id)}} class="form-check-input me-1" type="checkbox"/>
                {item.name}
            </li>
               )

           })}
            
           
            </ul>
            </>
    );
}

export default Checkbox;