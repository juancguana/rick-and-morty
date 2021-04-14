import {
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Character from '../components/Character/Index';
import { getAllFetchCharacters } from '../helpers/getFetchData';

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    const getAllCharacter = async () => {
      const data = await getAllFetchCharacters();
      setCharacterList(data);
    };
    getAllCharacter();
  }, []);

  return (
    <Container component={Box} pt={8}>
      <Typography variant='h1' align="center">RICK AND MORTY CHARACTERS</Typography>
      <Grid container spacing={8} align="center">
        {characterList.map((item) => (
          <Grid item key={item} xs={12} sm={6} md={4} lg={3}>
            <Character data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
