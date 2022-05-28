import React, { useState, useEffect } from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
import styles from "./PokemonBasicInfo.module.css";
const pokemon = {
  name: "",
  id: "",
  type: "",
  height: "",
  weight: "",
  basicExp: "",
};

const PokemonBasicInfo = (props) => {
  const [basicInfo, setBasicInfo] = useState(pokemon);
  useEffect(() => {
    const getInfo = async () => {
      try {
        let api = await props.basicInfo;
        console.log(api);
        let types = api.types.map((type) => {
          let currentType = type.type.name;
          return currentType.charAt(0).toUpperCase() + currentType.slice(1);
        });
        console.log("TY: ", types);
        console.log(types);
        const pokemonData = {
          name: api.name.charAt(0).toUpperCase() + api.name.slice(1),
          id: api.id,
          types: types.join(" / "),
          height: api.height / 10,
          weight: api.weight / 10,
          basicExp: api.base_experience,
        };
        setBasicInfo(pokemonData);
      } catch {
        console.error("Could not find pokemon Basic information");
      }
    };
    getInfo();
  }, []);

  return (
    <TabCard>
      <div className={styles.leftSection}>
        <ul>
          <li>
            <div className={styles.title}>Id:</div>
            <div className={styles.info}>{basicInfo.id}</div>
          </li>
          <li>
            <div className={styles.title}>Name:</div>
            <div className={styles.info}>{basicInfo.name}</div>
          </li>
          <li>
            <div className={styles.title}>Type:</div>
            <div className={styles.info}>{basicInfo.types}</div>
          </li>
        </ul>
      </div>
      <div className={styles.rightSection}>
        <ul>
          <li>
            <div className={styles.title}>Height:</div>
            <div className={styles.info}>{basicInfo.height} M</div>
          </li>
          <li>
            <div className={styles.title}>Weight:</div>
            <div className={styles.info}>{basicInfo.weight} Kg</div>
          </li>
          <li>
            <div className={styles.title}>Base Ex:</div>
            <div className={styles.info}>{basicInfo.basicExp} XP</div>
          </li>
        </ul>
      </div>
    </TabCard>
  );
};
export default PokemonBasicInfo;
