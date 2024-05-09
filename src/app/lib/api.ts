// api.ts

export async function fetchPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    if (!response.ok) {
        throw new Error(`API error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
}

export async function fetchPokemonDetails(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`API error! status: ${response.status}`);
    }
    const pokemonDetails = await response.json();
    return pokemonDetails;
}
