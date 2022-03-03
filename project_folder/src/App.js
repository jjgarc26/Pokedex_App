import React, { useState } from "react";
import PokemonApi from "./api/PokemonAPI";
import PokemonInformation from "./Components/PokemonInformation/PokemonInformation";
function App() {
  const [showList, setShowList] = useState(false);
  const [option, setOption] = useState("list");
  const showListHandler = () => {
    setShowList(true);
  };
  const defaultView = () => {
    return (
      <React.Fragment>
        <div>
          <h2>Pokedex</h2>
        </div>
        <div>
          <button onClick={showListHandler}>Click to Begin</button>
        </div>
      </React.Fragment>
    );
  };
  const previewRender = () => {
    option = "list" ? <PokemonApi /> : <PokemonInformation />;
  };
  return <div>{!showList ? defaultView() : <PokemonApi />}</div>;
}

export default App;
