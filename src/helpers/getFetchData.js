const getAllFetchCharacters = async () => {
  const resp = await fetch('https://rickandmortyapi.com/api/character/');
  const { results } = await resp.json();
  return results;
};

const getSingleFetchCharacter = async (id) => {
  const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await resp.json();
  return data;
};

export { getAllFetchCharacters, getSingleFetchCharacter };
