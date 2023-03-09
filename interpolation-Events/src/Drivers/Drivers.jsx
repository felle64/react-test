import { Driver } from "../modules/Driver";
import "./Drivers.css";

export const Drivers = () =>{
    const drivers = [
        new Driver("Felix Holmberg", "Porsche 911 991.2 R GT3", 7, 120),
        new Driver("Johan Kristoffersson", "Volvo S60 Polestar", 8, 119),
        new Driver("Mattias Ekström", "Audi RS 5 DTM", 9, 118),
        new Driver("Tom Kristensen", "Porsche 911 991.2 R GT3", 10, 120),
    ];
    console.log(drivers);

    const handleCarChange = (e) => {
        console.log(e.target.value);
    }

    const handleClick = (driver) => {
        console.log(driver);
        
    }
   
    const html = drivers.map((driver) =>{
    return (
        <div className="drivers">
            
                <div className="driver" key={driver.id}>
                    <h2>{driver.name}</h2>
                    <p>{driver.car}</p>
                    <p>Car number: {driver.carNumber}</p>
                    <p>Laptime: {driver.time} sec</p>
                    <button onClick={() => handleClick(driver)}>Click me</button>
                    <select onChange={handleCarChange}>
                        <option value="Porsche 911 991.2 R GT3">Porsche 911 991.2 R GT3</option>
                        <option value="Volvo S60 Polestar">Volvo S60 Polestar</option>
                        <option value="Audi RS 5 DTM">Audi RS 5 DTM</option>
                    </select>
                </div>
            
        </div>

    )})

    return <ul>{html}</ul> ;
}