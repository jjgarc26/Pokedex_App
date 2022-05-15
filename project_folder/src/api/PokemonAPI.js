const PokemonAPI = async (limit) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const data = await response.json();
    const pokemonData = [];
    for (let i = 0; i < data.results.length; i++) {
      let res = await fetch(data.results[i].url);
      let secondData = await res.json();
      pokemonData.push(secondData);
    }
    return pokemonData;
  } catch {
    console.error("Could not fetch api");
  }
};
export default PokemonAPI;
