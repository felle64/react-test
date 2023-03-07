import { Result } from "./result"
import { Calc } from "./calc"
export function AddNumber(){
    return <form id="form">
        <input type="number" placeholder="Number 1" id="number1"/>
        <input type="number" placeholder="Number 2" id="number2"/>
        <button type="button" id="button">Add</button>
        <Calc/>
        <Result/>
    </form>
}
    
