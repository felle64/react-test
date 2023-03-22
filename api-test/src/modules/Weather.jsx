import { getWeather } from "../services/weatherService";
import { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
        const { data } = await getWeather();
        setWeather(data);
        }
        fetchData();
    }, []);
    
    if (!weather) return <h1>Loading...</h1>;
    
    return (
        <div>
        <h1>Weather</h1>
        <h3>{weather.temperature}</h3>
        </div>
    );
    }

    export default Weather;