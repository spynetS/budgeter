
import React, { useState } from 'react';

function Button(props){
    if(typeof(props.text)=="undefined"){
        props = {text:"No text prop"};
    }
    return(
        <div className="bg-white h-9 p-2 rounded-lg bg-opacity-25 hover:bg-opacity-12 select:none "  >
            {props.text}
        </div>
    );
}

export default Button;
