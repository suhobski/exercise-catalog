import React from 'react'
import {Paper, makeStyles} from "@material-ui/core"
// import {useParams} from "react-router-dom";
// import ExercisesService from '../ExercisesService'


const useStyles = makeStyles({
  root: {
    gridColumn: '1/3',
    padding: '0.5rem',
    background: '#F0FFFF',
  },
})

const ExerciseFullView = () => {

  const classes = useStyles();
  // let { id } = useParams();
  // const [exercise, setExercises] = useState(null);
  // let exercise = null;
    
  // async function getData() {
  //   const data = await ExercisesService.fetchExercises();
  //   const [exercises] = Object.values(data); 
  //   exercise = exercises.find(item => item.id === id);
  //   // setExercises(exercise);
  // }
  // getData();
  // console.log(exercise);

  // const { level, imgPath, name, description} = exercise
  
  return (
    <Paper className={classes.root}>
      <div>
        {/* <h3>{name}</h3>
        <div className={classes.header}>
          <h3>Уровень {level}</h3>
        </div>
        <div className={classes.details}>
          <img
            className={classes.image} 
            src={'./img' + imgPath} 
            alt={name}
          />
          <div className={classes.textWrap}>
            <h4>Описание упражнения:</h4>
            <p className={classes.description}>{description}</p>
            <div className={classes.actions}>
            </div>
          </div>
        </div> */}
      </div>
    </Paper>
  );
}

export default ExerciseFullView;