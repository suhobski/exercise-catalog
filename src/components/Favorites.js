import React from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import ExercisePreview from './ExercisePreview';
import {exercises} from '../exercises'


const useStyles = makeStyles({
  root: {
    padding: '0.5rem',
    background: '#F0FFFF',
    gridColumn: '1/3',
  },
  catalog: {
    padding: '0.5rem',
    background: '#F0FFFF',
  }
})

const Header = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {
        exercises.map(exercise => (
          <ExercisePreview exercise={exercise} key={exercise.id}/>
        ))
      }
    </Paper>
  );
}

export default Header;