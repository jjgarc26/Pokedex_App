import React from "react";
import styles from "./PokemonPreview.module.css";

const PokemonPreview = (props) => {
  const preview = {
    name: props.previewInfo.name,
    id: props.previewInfo.id,
    image: props.previewInfo.image,
    capName: function () {
      return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    },
  };

  return (
    <div className={styles.previewMain}>
      <div className={styles.previewId}>{preview.id}</div>
      <div className={styles.previewImage}>
        <img src={preview.image} alt="pokemon artwork" />
      </div>
      <div className={styles.previewName}>{preview.capName()}</div>
    </div>
  );
};
export default PokemonPreview;
