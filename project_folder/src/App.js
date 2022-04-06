import React, { useState } from "react";
import PokemonApi from "./api/PokemonAPI";
import PokemonInformation from "./Components/PokemonInformation/PokemonInformation";
import styles from "./App.module.css";
import Card from "./UI/Card/Card";
import mainLogo from "./Images/pokemon_logo.png";
function App() {
  const [showList, setShowList] = useState(false);
  const [option, setOption] = useState("list");
  const [mainData, setMainData] = useState({});
  const showListHandler = () => {
    setShowList(true);
  };
  const getMainPokemon = (data) => {
    console.log(data);
  };
  const defaultView = () => {
    return (
      <Card>
        <div className={styles.mainLogo}>
          <img src={mainLogo} alt="main pokemon logo" />
        </div>
        <div className={styles.appH2}>
          <h2>Pokedex</h2>
        </div>
        <div className={styles.appButton}>
          <button onClick={showListHandler}>Click to Begin</button>
        </div>
      </Card>
    );
  };
  const previewRender = () => {
    option = "list" ? <PokemonApi /> : <PokemonInformation />;
  };
  return (
    <div>
      {!showList ? defaultView() : <PokemonApi mainData={getMainPokemon} />}
    </div>
  );
}

export default App;
