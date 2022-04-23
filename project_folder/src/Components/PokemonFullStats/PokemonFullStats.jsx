import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./PokemonFullStatus.module.css";
const PokemonFullStatus = (props) => {
  return (
    <div className={styles.mainFullStatus}>
      <Tabs>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Abilities</Tab>
          <Tab>Location</Tab>
          <Tab>Images</Tab>
          <Tab>Attributes</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};
export default PokemonFullStatus;
