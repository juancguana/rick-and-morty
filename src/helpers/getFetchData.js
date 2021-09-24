

const getSingleFetchCharacter = async (id) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllFetchCharacters, getSingleFetchCharacter };
