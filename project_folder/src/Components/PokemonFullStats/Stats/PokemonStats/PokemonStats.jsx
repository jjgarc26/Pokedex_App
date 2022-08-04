import React, { useEffect, useState } from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
import defaultBasicInfo from "../../../../DefaultValues/DefaultBasicInfo";
const PokemonStats = (props) => {
  const [stats, setStats] = useState(defaultBasicInfo);

  useEffect(() => {
    const getStats = async () => {
      try {
        let api = await props.stats;
        console.log(api.stats);
        let baseStat = api.stats.map((stat) => {
          return stat.base_stat;
        });
        setStats(baseStat);
      } catch {}
    };
    getStats();
  }, []);

  const listItems = (name, stat) => {
    return (
      <div>
        <li>
          <div>{name}</div>
          <div>{stat}</div>
        </li>
      </div>
    );
  };
  return (
    <TabCard>
      <div>Pokemon Stats</div>
      <div>
        <ul>
          {listItems("HP", stats[0])}
          {listItems("Attack", stats[1])}
          {listItems("Defence", stats[2])}
        </ul>
      </div>
      <div></div>
    </TabCard>
  );
};

export default PokemonStats;
