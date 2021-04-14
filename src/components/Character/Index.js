import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from './styles';

const useStyles = makeStyles(styles);

const Character = ({ data, showlink }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia>
        <img className={classes.image} src={data.image} alt={data.name}></img>
      </CardMedia>
      <CardContent>
        <Typography variant='h3'>{data.name}</Typography>

        <Typography
          className={classes.text}
        >{`Especie: ${data.species}`}</Typography>
        <Typography
          className={classes.text}
        >{`Estado: ${data.status}`}</Typography>
        {showlink ? (
          <Link className={classes.link} to={`/personaje/${data.id}`}>
            Ver mas
          </Link>
        ) : (
          <>
            <Typography
              className={classes.text}
            >{`Género: ${data.gender}`}</Typography>
            <Typography
              className={classes.text}
            >{`Origen: ${data.origin?.name}`}</Typography>

            <Typography
              className={classes.text}
            >{`Localización: ${data.location?.name}`}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Character;
