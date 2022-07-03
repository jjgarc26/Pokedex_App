import React, { useState, useEffect } from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
import styles from "./PokemonBasicInfo.module.css";
import defaultBasicInfo from "../../../../DefaultValues/DefaultBasicInfo";

const PokemonBasicInfo = (props) => {
  const [basicInfo, setBasicInfo] = useState(defaultBasicInfo);
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

  // listItem reduces repetitive lines of code for li

  const listItem = (label, listItem, meteric) => {
    return (
      <li>
        <div className={styles.title}>{label}:</div>
        <div className={styles.info}>
          {listItem} {meteric}
        </div>
      </li>
    );
  };

  return (
    <TabCard>
      <div className={styles.leftSection}>
        <ul>
          {listItem("ID", basicInfo.id)}
          {listItem("Name", basicInfo.name)}
          {listItem("Type", basicInfo.types)}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <ul>
          {listItem("Height", basicInfo.height, "M")}
          {listItem("Weight", basicInfo.weight, "Kg")}
          {listItem("Base EX", basicInfo.basicExp, "XP")}
        </ul>
      </div>
    </TabCard>
  );
};
export default PokemonBasicInfo;
