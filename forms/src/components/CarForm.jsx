import React, {useState} from 'react';
import { Car } from '../modules/Car';


export const CarForm = () =>{
    const [car, setCar] = useState(
        new Car("","","","","")
    );
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);
    }

    const handleChange = (e)=>{
        //validate?
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }

    return (<form onSubmit={handleSubmit}>
        <h3>Add Car</h3>
        <label htmlFor="make">Make</label>
        <input type="text" name="make" value={car.make} onChange={handleChange}/>
        <label htmlFor="model">Model</label>
        <input type="text" name="model" value={car.model} onChange={handleChange}/>
        <label htmlFor="year">Year</label>
        <input type="text" name="year" value={car.year} onChange={handleChange}/>
        <label htmlFor="color">Color</label>
        <input type="text" name="color" value={car.color} onChange={handleChange}/>
        <label htmlFor="price">Price</label>
        <input type="text" name="price" value={car.price} onChange={handleChange}/>
        <button type="submit">Submit</button>
        </form>)

}