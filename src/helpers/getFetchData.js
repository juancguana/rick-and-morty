const getFetchData = async () => {
  const resp = await fetch('https://rickandmortyapi.com/api/character/');
  const { results } = await resp.json();
  console.log(results);
  return results;
};

export default getFetchData;
