import React, { useEffect, useState } from 'react';
import { getSingleFetchCharacter } from '../../helpers/getFetchData';

import { useParams } from 'react-router';
import Character from '../../components/Character';
import { Box, Container, Grid } from '@material-ui/core';

const Single = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    const getSingleCharacter = async () => {
      const data = await getSingleFetchCharacter(id);
      setCharacter(data);
    };
    getSingleCharacter();
  }, []);
  console.log(character);
  return (
    <Container component={Box} maxWidth='xs' pt={8}>
      <Grid align='center'>
        <Character data={character} showlink={false} />
      </Grid>
    </Container>
  );
};

export default Single;
