import axios from "axios";

const BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=55.60&longitude=13.00&current_weather=true";

export const getWeather = async () => {
  try {
    // let response = await fetch(BASE_URL + "star");
    // let data = await response.json();

    // return data.Search;

    let response = await axios.get(BASE_URL);
    console.log(response.data.current_weather);
    return response.data.current_weather;
  } catch {
    return [];
  }

  // fetch("https://www.omdbapi.com/?apikey=416ed51a&s=star")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setMovies(data.Search);
  //   });
};

