import React, {useEffect, useState} from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import ExercisePreview from './ExercisePreview';
import ExercisesService from '../ExercisesService'


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

const Favorites = () => {

  const classes = useStyles();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await ExercisesService.fetchExercises();
      const [exercises] = Object.values(data); 
      setExercises(exercises);
    }
    getData();
  }, []);

  return (
    <Paper className={classes.root}>
      <h2>Избранные упражнения</h2>
      {
        exercises.map(exercise => (
          <ExercisePreview exercise={exercise} key={exercise.id}/>
        ))
      }
    </Paper>
  );
}

export default Favorites;