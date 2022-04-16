import React, { useEffect, useState } from "react";
import PokemonPreview from "../PokemonPreview/PokemonPreview";
import Card from "../../UI/Card/Card";
import styles from "./PokemonList.module.css";
import PokemonFilterList from "./PokemonListFilter";

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
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setFilterList(props.pokemonData);
    setStats(props.pokemonData[0]);
  }, [props]);
  const previewHandler = (id, name, image, data) => {
    setPreviewData({ id: id, name: name, image: image });
    setStats(data);
  };
  const sendStatsHandler = (data) => {
    const mainInfo = { ...data };
    props.fullStats(mainInfo);
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
        onClick={() =>
          previewHandler(
            pokemon.id,
            pokemon.name,
            pokemon.sprites.other["official-artwork"].front_default,
            pokemon
          )
        }
      >
        <div className={styles.liId}>{pokemon.id}</div>
        <div className={styles.liName}>{pokemon.name}</div>
        <div>
          <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
        </div>
      </li>
    );
  });

  return (
    <Card>
      <PokemonFilterList filterCriteria={filterListHandler} />
      <div className={styles.previewContainer}>
        <PokemonPreview previewInfo={previewData} />
        <button onClick={() => sendStatsHandler(stats)}>Load Stats</button>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.listUls}>
          <div className={styles.liContainer}>{pokemonList}</div>
        </ul>
      </div>
    </Card>
  );
};
export default PokemonList;
