
import React, { useState } from 'react';

function Inputfield(props){
    const[text,setText] = useState();

    return(
        <div >
            <input value={text} onChange={e=>{setText(e.target.value);if(typeof(props.value)!="undefined"){props.value(e.target.value)}}}  className="rounded-lg bg-white bg-opacity-50 h-9 p-2 " placeholder={props.placeholder} />
        </div>
    );
}

export default Inputfield;
