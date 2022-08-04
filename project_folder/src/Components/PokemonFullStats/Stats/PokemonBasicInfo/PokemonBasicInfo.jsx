import React, { useState, useEffect } from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
import styles from "./PokemonBasicInfo.module.css";

const PokemonBasicInfo = (props) => {
  const name =
    props.basicInfo.name.charAt(0).toUpperCase() +
    props.basicInfo.name.slice(1);

  const type = props.basicInfo.types.map((type) => {
    let currentType = type.type.name;
    return currentType.charAt(0).toUpperCase() + currentType.slice(1);
  });

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
          {listItem("ID", props.basicInfo.id)}
          {listItem("Name", name)}
          {listItem("Types", type.join(" / "))}
        </ul>
      </div>
      <div className={styles.rightSection}>
        <ul>
          {listItem("Height", props.basicInfo.height, "M")}
          {listItem("Weight", props.basicInfo.weight, "Kg")}
          {listItem("Base EX", props.basicInfo.basicExp, "XP")}
        </ul>
      </div>
    </TabCard>
  );
};
export default PokemonBasicInfo;
