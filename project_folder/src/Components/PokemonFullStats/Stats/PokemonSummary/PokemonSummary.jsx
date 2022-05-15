import React, { useState, useEffect } from "react";

const PokemonSummary = (props) => {
  let [summary, setSummary] = useState("");
  useEffect(() => {
    const readApi = async () => {
      try {
        let speciesData = await props.summary;
        let summarytest = speciesData.flavor_text_entries[0].flavor_text;

        setSummary(summarytest.replace(/(\r\n|\n|\r)/gm, " "));
        console.log(summarytest);
      } catch {
        console.error("Could not read summary");
      }
    };
    readApi();
  }, [summary]);

  return <div>{(summary = "" ? "Loading" : summary)}</div>;
};
export default PokemonSummary;
