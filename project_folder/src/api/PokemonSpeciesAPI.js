import React, { useEffect, useState } from "react";
import PokemonFullStatus from "../Components/PokemonFullStats/PokemonFullStats";
const PokemonSpeciesAPI = (props) => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`
      );
      let data = await response.json();
      setApi(data);
    } catch {
      console.error("Unable to fetch Pokemon Species Api");
    }
  };
  console.log(props.fullStatus);
  console.log(api);
  return (
    <div>
      <PokemonFullStatus speciesData={api} />
    </div>
  );
};
export default PokemonSpeciesAPI;
