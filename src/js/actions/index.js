import axios from "axios";

// const apiKey = process.env.API_KEY;
// const yelpUrl = 'https://api.yelp.com/v3/businesses/search';
// const cors = 'https://cors-anywhere.herokuapp.com/';
// const ROOT_URL = cors + yelpUrl;
export const FETCH_DATA = "FETCH_DATA";

export function fetchData(input) {
  return {
    type: FETCH_DATA,
    payload: axios
    .get("/proxy/yelp?term=" + input)
    .then(resp => {
        return resp;
    })
  };
}
