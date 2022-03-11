import React, { useState } from "react";
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
  const previewHandler = (id, name, image) => {
    setPreviewData({ id: id, name: name, image: image });
  };
  const pokemonList = props.pokemonData.map((pokemon) => {
    return (
      <li
        key={pokemon.id}
        onClick={() =>
          previewHandler(
            pokemon.id,
            pokemon.name,
            pokemon.sprites.other["official-artwork"].front_default
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
