import React from "react";
const PokemonPreview = (props) => {
  const name = props.previewInfo.name;
  const id = props.previewInfo.id;
  const image = props.previewInfo.image;
  return (
    <React.Fragment>
      <div>{name}</div>
      <div>{id}</div>
      <div>
        <img src={image} alt="pokemon artwork" />
      </div>
    </React.Fragment>
  );
};
export default PokemonPreview;
