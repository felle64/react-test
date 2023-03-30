import { getWeather } from "../services/weatherService";
import { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState("");
    
    useEffect(() => {
        async function fetchData() {
        let data = await getWeather();
        setWeather(data);
        }
        fetchData();
    }, []);
    


    if (!weather) return <h1>reeeeee</h1>;
    
    const html = weather.map((weather) => {
    return (
        <div>
        <h1>Weather</h1>
        <h3>{weather}</h3>
        </div>
    );
    }
    );
    return <section className="weather">${html}</section>
}
    export default Weather;