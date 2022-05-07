export const PokemonSpeciesApi = async (id) => {
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    let data = await response.json();
    return data;
  } catch {
    console.error("Unable to fetch Pokemon Species Api");
  }
};
