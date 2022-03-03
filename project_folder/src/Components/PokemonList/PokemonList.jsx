import React from "react";

const PokemonList = (props) => {
  const pokemonList = props.pokemonData.map((pokemon) => {
    return (
      <li key={pokemon.id}>
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
      <div></div>
      <div>
        <ul>
          <div>{pokemonList}</div>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default PokemonList;
