import React from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import Filter from './Filter';
import {exercises} from '../exercises'
import ExercisePreview from './ExercisePreview';


const useStyles = makeStyles({
  catalog: {
    padding: '0.5rem',
    background: '#F0FFFF',
  }
})

const Catalog = () => {
  const classes = useStyles();

  return(
    <>
      <Filter />
      <Paper className={classes.catalog}>
        <h2>Каталог упражнений</h2>
        {
          exercises.map(exercise => (
            <ExercisePreview exercise={exercise} key={exercise.id}/>
          ))
        }
      </Paper>
    </>
  )
}

export default Catalog;
