import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=55.60&longitude=13.00&current_weather=true&timezone=auto";

export const getWeather = async () => {
  try {
    // let response = await fetch(BASE_URL + "star");
    // let data = await response.json();

    // return data.Search;

    let response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
  } catch {
    return [];
  }
};

