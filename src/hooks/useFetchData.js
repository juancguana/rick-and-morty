import React from 'react';
import { useEffect, useState } from 'react';

const useFetchData = () => {
  const [characterList, setCharacterList] = useState([]);

  const getAllFetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await response.json();
      setCharacterList(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFetchCharacters();
  }, []);

  return { characterList };
};

export default useFetchData;
