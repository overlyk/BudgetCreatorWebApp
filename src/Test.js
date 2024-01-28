import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import BasicModal from "./BasicModal";

export default function Test() 

{ 
    const [value, setValue] = useState(5);
    const [test, test2] = [4,5];
    
    const handleClick = () => {
        setValue(a => a + 1);
    }

    useEffect(() => {
        document.title = `You clicked ${value} times`;


    })

  return (
    <div>
        <p>
            <button onClick={handleClick}>hi guyz</button>
           {value} Thanks Test
        {value === 15 ? <Portal /> : null}
        </p>
    
    </div>
  );
}
