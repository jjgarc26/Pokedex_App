import React, { useEffect, useState } from "react";
import defaultBasicInfo from "../../../../DefaultValues/DefaultBasicInfo";
const PokemonStats = (props) => {
  const [stats, setStats] = useState(defaultBasicInfo);

  useEffect(() => {
    const getStats = async () => {
      try {
        let api = await props.stats;
        console.log(api.stats);
      } catch {}
    };
    getStats();
  }, []);
  return <div>Pokemon Stats</div>;
};

export default PokemonStats;
