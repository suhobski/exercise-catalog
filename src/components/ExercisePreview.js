import React from 'react'
import {Button, Card, makeStyles} from "@material-ui/core"
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  root: {
    padding: '0.5rem 0.5rem 0 0.5rem',
    marginBottom: '0.5rem',
    background: '#F0FFFF',
    border: '1px solid #87CEEB',
    boxShadow: 'none',
    '&:last-child': {
      marginBottom: 0,
    },
    cursor: 'pointer',
    '&:hover' : {
      background: '#E1F0F0',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.5rem',
  },
  exerciseName: {
    margin: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  exerciseLevel: {
    margin: 0,
    marginLeft: '2rem',
    whiteSpace: 'nowrap',
  },
  details: {
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: '200px auto',
    overflow: 'auto',
  },
  textWrap: {
    display: 'grid',
    textAlign: 'justify',
    '& h4': {
      margin: '0 0 .5rem 0',
    }
  },
  image: {
    marginTop: '0.25rem',
    maxWidth: '100%',
  },
  description: {
    marginTop: '-0.25rem',
    maxHeight: 84,
    fontSize: 14,
    overflow: 'hidden',
  },
  actions: {
    justifySelf: 'end',
  },
  button: {
    margin: '7px 2px',
    background: '#87CEEB',
    textTransform: 'none',
    '&:first-child': {
      marginLeft: 0,
    },
    '&:hover': {
      background: '#7fc1db',
    }
  }
})

const ExercisePreview = ({exercise}) => {

  const classes = useStyles();
  let history = useHistory();
  const {level, imgPath, name, description, id} = exercise;

  return (
    <Card className={classes.root} onClick={() => history.push(`/exercise/${id}`)}>
      <div className={classes.header}>
        <h3 className={classes.exerciseName}>{name}</h3>
        <h3 className={classes.exerciseLevel}>Уровень {level}</h3>
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
            <Button 
              className={classes.button} 
              variant="contained"
              color="secondary"
              >В избранное
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ExercisePreview;