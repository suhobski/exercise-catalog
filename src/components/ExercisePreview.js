import React from 'react'
import {Button, Card, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
    cursor: 'pointer',
  },
  details: {
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: '200px auto',
    overflow: 'auto',
  },
  textWrap: {
    display: 'grid',
    // gap: '0.25rem',

  },
  image: {
    marginTop: '0.25rem',
  },
  description: {
    marginTop: '-0.25rem',
    maxHeight: 72,
    fontSize: 12,
    overflow: 'hidden',
  },
  actions: {
    justifySelf: 'end',
  },
  button: {
    fontSize: 12,
    marginLeft: '0.5rem',
    '&:first-child': {
      marginLeft: 0,
    }
  }
})

const ExercisePreview = ({exercise}) => {

  const classes = useStyles();
  const {imgPath, name, description} = exercise;

  return (
    <Card className={classes.root}>
      <h3>{name}</h3>
      <div className={classes.details}>
        <img
          className={classes.image} 
          src={'./img/' + imgPath} 
          alt={name}
        />
        <div className={classes.textWrap}>
          <h4>Описание упражнения:</h4>
          <p className={classes.description}>{description}</p>
          <div className={classes.actions}>
            <Button className={classes.button} variant="contained">В избранное</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ExercisePreview;