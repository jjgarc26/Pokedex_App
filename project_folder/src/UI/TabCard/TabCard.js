import styles from "./TabCard.module.css";
const TabCard = (props) => {
  return <div className={styles.TabCard}>{props.children}</div>;
};
export default TabCard;
