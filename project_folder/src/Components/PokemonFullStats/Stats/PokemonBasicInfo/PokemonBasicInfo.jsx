import React, { useState, useEffect } from "react";
import TabCard from "../../../../UI/TabCard/TabCard";
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
      <div>
        <ul>
          <li>
            Id: <span>{basicInfo.id}</span>
          </li>
          <li>
            Name: <span>{basicInfo.name}</span>
          </li>
          <li>
            Types: <span>{basicInfo.types}</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            Height: <span>{basicInfo.height} m</span>
          </li>
          <li>
            {" "}
            Weight: <span>{basicInfo.weight} kg</span>
          </li>
          <li>
            {" "}
            Exp Points: <span>{basicInfo.basicExp} xp</span>
          </li>
        </ul>
      </div>
    </TabCard>
  );
};
export default PokemonBasicInfo;
