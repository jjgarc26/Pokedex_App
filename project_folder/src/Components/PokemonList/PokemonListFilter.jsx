import React, { useState } from "react";
import styles from "./PokemonListFilter.module.css";

const PokemonFilterList = (props) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (event) => {
    let lowerCase = event.target.value;
    setFilter(lowerCase.toLowerCase());
    props.filterCriteria(filter);
  };
  return (
    <div className={styles.filterMain}>
      <input
        className={styles.filterInput}
        type="text"
        placeholder="Search..."
        onChange={filterHandler}
        value={filter}
      />
    </div>
  );
};
export default PokemonFilterList;
