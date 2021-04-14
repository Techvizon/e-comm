import react, { useState } from 'react';

const Arrival = (props) =>{
    return(
        <>
        <h5 className='text-center'>{props.typefilter}</h5>
        <div className="alert alert-light" role="alert">
            {props.data.map((i)=>{
                return(
                    <>
                    <a href="#" className="alert-link"><h6 className='text-center'>{i.text}</h6></a>
                    </>
                )
            })}
     </div>
     </>
    );
}

export default Arrival;