import React, { useState, useReducer } from "react";
import PokemonApi from "./api/PokemonAPI";
import PokemonInformation from "./Components/PokemonInformation/PokemonInformation";
import styles from "./App.module.css";
import Card from "./UI/Card/Card";
import mainLogo from "./Images/pokemon_logo.png";

const reducer = (state, action) => {
  switch (action.type) {
    case "Kanto":
      return { ...state, name: action.payload, limit: "150" };
    case "Johto":
      return { ...state, name: action.payload, limit: "250" };
    case "Shino":
      return { ...state, name: action.payload, limit: "150" };
    default:
      return { ...state, name: action.payload, limit: "150" };
  }
};

function App() {
  const [showList, setShowList] = useState(false);
  const [option, setOption] = useState("list");
  const [mainData, setMainData] = useState({});
  const [state, dispatch] = useReducer(reducer, {
    name: "Kanto",
    limit: "150",
  });
  const showListHandler = () => {
    setShowList(true);
  };
  const getMainPokemon = (data) => {
    console.log(data);
  };
  const setRegionHandler = (event) => {
    dispatch({
      type: event.target.value,
      payload: event.target.value,
    });
  };
  const mainMenu = () => {
    return (
      <Card>
        <div>
          <h3>Select region</h3>
          <select onChange={setRegionHandler}>
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
            <option value="Shino">Shino</option>
          </select>
        </div>
        <div className={styles.mainLogo}>
          <img
            className={styles.titleImage}
            src={mainLogo}
            alt="main pokemon logo"
          />
        </div>
        <div className={styles.appH2}>
          <h2>
            {state.name} <br /> Pokedex
          </h2>
        </div>
        <div className={styles.appButton}>
          <button onClick={showListHandler}>Begin Exploring</button>
        </div>
      </Card>
    );
  };
  const previewRender = () => {
    option = "list" ? <PokemonApi /> : <PokemonInformation />;
  };
  return (
    <div>
      {!showList ? (
        mainMenu()
      ) : (
        <PokemonApi mainData={getMainPokemon} limit={state.limit} />
      )}
    </div>
  );
}

export default App;
