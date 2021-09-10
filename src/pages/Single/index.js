import React, { useEffect, useState } from 'react';
import { getSingleFetchCharacter } from '../../helpers/getFetchData';

import { useParams } from 'react-router';
import Character from '../../components/Character';
import { Box, Container, Grid } from '@material-ui/core';

const Single = () => {
  const { id } = useParams();

  
  return (
    <Container component={Box} maxWidth='xs' pt={8}>
      <Grid align='center'>
        <Character showlink={false} />
      </Grid>
    </Container>
  );
};

export default Single;
