import React, { useEffect, useState } from 'react';
import { getSingleFetchCharacter } from '../../helpers/getFetchData';

import { useParams } from 'react-router';
import Character from '../../components/Character';
import { Box, Container, Grid } from '@material-ui/core';

const Single = () => {
  const { id } = useParams();
  const [single, setSingle] = useState({});

  useEffect(() => {
    const getSingleData = async (id) => {
      const data = await getSingleFetchCharacter(id);
      setSingle(data);
    };
    getSingleData(id);
  }, []);

  return (
    <Container component={Box} maxWidth='xs' pt={8}>
      <Grid align='center'>
        <Character data={single} showlink={false} />
      </Grid>
    </Container>
  );
};

export default Single;
