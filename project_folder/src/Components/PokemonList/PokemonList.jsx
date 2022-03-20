import React, { useEffect, useState } from "react";
import PokemonPreview from "../PokemonPreview/PokemonPreview";

//default data for preview
const defaultPreview = {
  name: "Bulbasaur",
  id: 1,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
};
const PokemonList = (props) => {
  const [previewData, setPreviewData] = useState(defaultPreview);
  const [stats, setStats] = useState({});
  useEffect(() => {
    setStats(props.pokemonData[0]);
  }, [props]);
  const previewHandler = (id, name, image, data) => {
    setPreviewData({ id: id, name: name, image: image });
    setStats(data);
  };
  const sendStatsHandler = (data) => {
    const mainInfo = { ...data };
    props.fullStats(mainInfo);
  };
  const pokemonList = props.pokemonData.map((pokemon) => {
    return (
      <li
        key={pokemon.id}
        onClick={() =>
          previewHandler(
            pokemon.id,
            pokemon.name,
            pokemon.sprites.other["official-artwork"].front_default,
            pokemon
          )
        }
      >
        <div>{pokemon.id}</div>
        <div>
          <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
        </div>
        <div>{pokemon.name}</div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <div>
        <PokemonPreview previewInfo={previewData} />
        <button onClick={() => sendStatsHandler(stats)}>Load Stats</button>
      </div>
      <div>
        <ul>
          <div>{pokemonList}</div>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default PokemonList;
