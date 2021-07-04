import React from 'react'
import {Paper, makeStyles} from "@material-ui/core"
import {useParams} from "react-router-dom";
import {exercises} from '../exercises'


const useStyles = makeStyles({
  root: {
    gridColumn: '1/3',
    padding: '0.5rem',
    background: '#F0FFFF',
  },
})

const ExerciseFullView = () => {

  const classes = useStyles();
  let { id } = useParams();
  let exercise = exercises.find(item => item.id === id);
  const {category, level, imgPath, intensity, name, tasks, description} = exercise

  return (
    <Paper className={classes.root}>
      <h3>{name}</h3>
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
      </div>
    </Paper>
  );
}

export default ExerciseFullView;