import {Calc} from "./calc"
import { useState } from 'react';

export function AddNumber(){
    console.log("Reload");
    const [number1, setMessage] = useState(0);
    const [number2, setMessage2] = useState(0);
    
    const handleChange = (event) => {

        setMessage(event.target.value);
      };
    
      const handleChange2 = (event) => {
   

        setMessage2(event.target.value);
      };
    
        
 
    let result = Calc (number1,number2)
    

    
   

  
    
    return (<>
        <h1>Add Numbers</h1>
        <input
        placeholder="Number1"
        type="number"
        id="number1"
        onChange={handleChange}
      />

        <input
        placeholder="Number2"
        type="number"
        id="number2"
        onChange={handleChange2}
      />
      <div className="resluts" type="text">Results: {number1} + {number2} = {result}</div>
    </>
    )
}
    
