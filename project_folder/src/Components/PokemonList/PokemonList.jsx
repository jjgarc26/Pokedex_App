import React from "react";

const PokemonList = (props) => {
  const pokemonList = props.pokemonData.map((pokemon) => {
    return (
      <div>
        <li key={pokemon.id}>
          <div>{pokemon.id}</div>
          <div>
            <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
          </div>
          <div>{pokemon.name}</div>
        </li>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div>
        <ul>{pokemonList}</ul>
      </div>
    </React.Fragment>
  );
};
export default PokemonList;
