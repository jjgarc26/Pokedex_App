import React, { useEffect, useState } from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
import styles from "./PokemonStats.module.css";
const PokemonStats = (props) => {
  const listItems = (name, stat) => {
    return (
      <div>
        <li>
          <div className={styles.name}>{name}</div>
          <div className={styles.stat}>{stat}</div>
        </li>
      </div>
    );
  };
  return (
    <TabCard>
      <div className={styles.leftSection}>
        <ul>
          {listItems("HP", props.stats.stats[0].base_stat)}
          {listItems("Attack", props.stats.stats[1].base_stat)}
          {listItems("Defence", props.stats.stats[2].base_stat)}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <ul>
          {listItems("Speed", props.stats.stats[5].base_stat)}
          {listItems("Sp-Atk", props.stats.stats[3].base_stat)}
          {listItems("Sp-Def", props.stats.stats[4].base_stat)}
        </ul>
      </div>
    </TabCard>
  );
};

export default PokemonStats;
