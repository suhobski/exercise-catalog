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
    '&:hover' : {
      background: '#EFEFEF',
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  details: {
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: '200px auto',
    overflow: 'auto',
  },
  textWrap: {
    display: 'grid',
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
  const {level, imgPath, name, description} = exercise;

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <h3>{name}</h3>
        <h3>Уровень {level}</h3>
      </div>
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