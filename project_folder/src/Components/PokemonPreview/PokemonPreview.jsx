import React, { useState } from "react";
const defaultPreview = {
  name: "Bulbasaur",
  id: 1,
};
const PokemonPreview = () => {
  const [preview, setPreview] = useState(defaultPreview);

  return (
    <React.Fragment>
      <div>{preview.id}</div>
      <div>{preview.name}</div>
    </React.Fragment>
  );
};
export default PokemonPreview;
