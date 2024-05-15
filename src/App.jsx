import { useEffect, useState } from "react";
import "./App.css";
import getAllStarships from "./services/sw_api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [starships, setStarships] = useState([]);
  console.log(starships);
  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error("Error fetching starships: ", error);
      }
    }

    fetchStarships();
  }, []);
  return (
    <div>
      <h1>Starships</h1>
      <div>
        {starships.map((starship) => (
          <StarShipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;
