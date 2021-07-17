import React from 'react'
import {Button, Card, makeStyles} from "@material-ui/core"
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  root: {
    padding: '0.5rem',
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
    '& h3': {
      margin: 0,
    }
  },
  details: {
    display: 'grid',
    gap: '0.5rem',
    gridTemplateColumns: '200px auto',
    overflow: 'auto',
  },
  textWrap: {
    display: 'grid',
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
    fontSize: 12,
    marginLeft: '0.5rem',
    background: '#FFFFFF',
    textTransform: 'none',
    '&:first-child': {
      marginLeft: 0,
    },
    '&:hover': {
      background: '#87CEEB',
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