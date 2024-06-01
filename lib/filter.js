export function filter(pokemons, nome, tipo) {
  if(!nome || !pokemons) {
    console.log(pokemons)
    return pokemons;
  }
  console.log(nome);
  let filtered = [];
  for (let i = 0; i < pokemons.length; i += 1) {
    if (pokemons.name) {
      if (pokemons[i].name.includes(nome)) {
        filtered.push(pokemons[i]);
      }
    }
  }
  console.log(filtered)
  return filtered;
}
