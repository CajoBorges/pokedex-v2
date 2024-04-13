function filter(pokemons, nome, tipo) {
  let filtered = [];
  for (let i = 0; i < pokemons.length; i += 1) {
    if (pokemons.name && nome) {
      if (pokemons[i].name.includes(nome)) {
        filtered.push(pokemons[i]);
      }
    }
  }
  return filtered;
}
