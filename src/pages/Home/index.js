import {
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import Character from '../../components/Character';
import { getAllFetchCharacters } from '../../helpers/getFetchData';

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

  return (
    <Container component={Box} pt={4}>
      <Typography variant='h1' align="center" >RICK AND MORTY</Typography>
      <Grid container spacing={8} align="center">
        {characterList.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Character data={item} showlink={true}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
