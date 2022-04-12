import React from "react";
const PokemonPreview = (props) => {
  const pokemon = {
    name: props.previewInfo.name,
    id: props.previewInfo.id,
    image: props.previewInfo.image,
  };
  return (
    <React.Fragment>
      <div>{pokemon.name}</div>
      <div>{pokemon.id}</div>
      <div>
        <img src={pokemon.image} alt="pokemon artwork" />
      </div>
    </React.Fragment>
  );
};
export default PokemonPreview;
