import React, { useEffect, useState } from "react";
import PokemonPreview from "../PokemonPreview/PokemonPreview";
import Card from "../../UI/Card/Card";
import styles from "./PokemonList.module.css";
import PokemonFilterList from "./PokemonListFilter";
import PokemonSpeciesAPI from "../../api/PokemonSpeciesAPI";
import PokemonFullStatus from "../PokemonFullStats/PokemonFullStats";

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
  const [loadStats, setLoadStatus] = useState(false);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setFilterList(props.pokemonData);
    setStats(props.pokemonData[0]);
  }, [props]);
  const previewHandler = (data) => {
    setPreviewData({
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
    });
    setStats(data);
  };
  const loadStatsHandler = () => {
    setLoadStatus(true);
  };
  const filterListHandler = (criteria) => {
    if (criteria != "") {
      const filterPokemonList = props.pokemonData.filter((pokemon) => {
        if (pokemon.name.includes(criteria)) {
          return pokemon;
        }
      });
      setFilterList(filterPokemonList);
    } else {
      setFilterList(props.pokemonData);
    }
  };
  const pokemonList = filterList.map((pokemon) => {
    return (
      <li
        className={styles.items}
        key={pokemon.id}
        onClick={() => previewHandler(pokemon)}
      >
        <div className={styles.liId}>{pokemon.id}</div>
        <div className={styles.liName}>{pokemon.name}</div>
        <div>
          <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
        </div>
      </li>
    );
  });
  const pokemonFullList = () => {
    return (
      <div className={styles.listContainer}>
        <ul className={styles.listUls}>
          <div className={styles.liContainer}>{pokemonList}</div>
        </ul>
      </div>
    );
  };

  return (
    <Card>
      <PokemonFilterList filterCriteria={filterListHandler} />
      <div className={styles.previewContainer}>
        <PokemonPreview previewInfo={previewData} />
        <button onClick={() => loadStatsHandler()}>Load Stats</button>
      </div>
      {!loadStats ? (
        <PokemonSpeciesAPI fullStatus={stats} id={previewData.id} />
      ) : (
        pokemonFullList()
      )}
    </Card>
  );
};
export default PokemonList;
