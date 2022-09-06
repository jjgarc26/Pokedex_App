import react from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
import styles from "./PokemonMoves.module.css";

const PokemonMoves = (props) => {
  const moveList = props.stats.moves.map((move) => {
    return (
      <li className={styles.list}>
        <div className={styles.name}>{move.move.name}</div>
      </li>
    );
  });

  return (
    <TabCard>
      <ul>{moveList}</ul>
    </TabCard>
  );
};

export default PokemonMoves;
