// src/services/api.js
import axios from "axios";

const BASE_URL =
  "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion";

export const fetchDestinationInfo = async (destinationName) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        name: destinationName,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
