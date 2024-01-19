import {IMGUR_API_URL, IMGUR_API_KEY, PEXELS_API_URL, PEXELS_API_KEY } from "../config";
import axios from 'axios';

export default class ApiService {

  async getData(path,endpointServer = 'imgur') {

    let endpoint = endpointServer === "imgur" ? IMGUR_API_URL + path : PEXELS_API_URL + path;
    let authToken = endpointServer === "imgur" ? IMGUR_API_KEY : PEXELS_API_KEY;

    let requestData = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    };
    
    return await axios.get(endpoint, requestData); 
  }
}