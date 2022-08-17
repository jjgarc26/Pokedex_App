import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./PokemonFullStatus.module.css";
import PokemonBasicInfo from "./Stats/PokemonBasicInfo/PokemonBasicInfo";
import PokemonStats from "./Stats/PokemonStats/PokemonStats";
import PokemonSummary from "./Stats/PokemonSummary/PokemonSummary";

const PokemonFullStatus = (props) => {
  const [basic, setBasic] = useState({});
  useEffect(() => {
    const readApis = async () => {
      try {
        let basicApi = await props.basicApi;
        let speciesApi = await props.speciesApi;
        setBasic(basicApi);
      } catch {}
    };
    readApis();
  }, []);

  return (
    <div className={styles.mainFullStatus}>
      <Tabs>
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Basic Information</Tab>
          <Tab>Stats</Tab>
          <Tab>Attributes</Tab>
          <Tab>Moves</Tab>
          <Tab>Location</Tab>
        </TabList>
        <TabPanel>
          <h2>Summary</h2>
          <PokemonSummary summary={props.speciesApi} />
        </TabPanel>
        <TabPanel>
          <h2>Basic Information</h2>
          <PokemonBasicInfo basicInfo={basic} />
        </TabPanel>
        <TabPanel>
          <h2>Stats</h2>
          <PokemonStats stats={basic} />
        </TabPanel>
        <TabPanel>
          <h2>Attributes</h2>
        </TabPanel>
        <TabPanel>
          <h2>Moves</h2>
        </TabPanel>
        <TabPanel>
          <h2>Locations</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default PokemonFullStatus;
