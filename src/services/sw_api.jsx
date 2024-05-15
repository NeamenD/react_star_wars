import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

// fetch starships from API
async function getAllStarships() {
  try {
    const response = await axios.get(`${BASE_URL}/starships`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    throw error;
  }
}

export default getAllStarships;
