import axios from "axios";
const API = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  responseType: "json",
  headers: { "Content-Type": "application/json" },
});

export async function getAll() {
  const result = await API.get("/pokemon?limit=100000&offset=0");
  return result.data;
}

export async function getPokemon(pokemon) {
  const result = await API.get("/pokemon/" + pokemon.toLowerCase());
  return result.data;
}
