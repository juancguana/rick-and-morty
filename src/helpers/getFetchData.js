const getAllFetchCharacters = async () => {
  const resp = await fetch('https://rickandmortyapi.com/api/character/');
  const { results } = await resp.json();
  return results;
};

export { getAllFetchCharacters };
