import {Calc} from "./calc"
import { useState } from 'react';

export  function AddNumber(){
    console.log("Reload");
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');
    
    const handleChange = (event) => {

        setMessage(event.target.value);
      };
    
      const handleChange2 = (event) => {

        setMessage2(event.target.value);
      };
    
      const handleStartValueChange = (value, value2) => {
        const number1 = Number(value); // converts '' from empty input -> 0
        const number2 = Number(value2);
        Calc (number1,number2)
      };

    let input1 = document.getElementById("number1");
    let input2 = document.getElementById("number2");
    handleStartValueChange(2,4)

  
    
    return (<>
       
        <input
        type="number"
        id="number1"
        name="number1"
        onChange={handleChange}
      />

        <input
        type="number"
        id="number2"
        name="number2"
        onChange={handleChange2}
      />
      <h2>Message: {message}</h2>
      <h2>Message2: {message2}</h2>

        
    
    </>
    )
}
    
