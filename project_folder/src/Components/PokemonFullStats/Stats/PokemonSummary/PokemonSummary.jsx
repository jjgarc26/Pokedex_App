import React, { useState, useEffect } from "react";

const PokemonSummary = (props) => {
  const [summary, setSummary] = useState("");
  // useEffect(() => {
  //   readApi();
  // }, []);
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

  console.log(props.summary);
  return (
    <div>
      <p>{summary}</p>
    </div>
  );
};
export default PokemonSummary;
