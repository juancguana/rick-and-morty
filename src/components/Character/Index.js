import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core';
import styles from './styles';

const useStyles = makeStyles(styles);

const Character = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img className={classes.image} src={data.image} alt={data.name}></img>
      </CardMedia>
      <CardContent>
        <Typography variant='h3'>{data.name}</Typography>
        <Typography>{`Genero: ${data.gender}`}</Typography>
        <Typography>{`Especie: ${data.species}`}</Typography>
        <Typography>{`Estado: ${data.status}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Character;
