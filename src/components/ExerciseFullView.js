import React, {useEffect} from 'react'
import {Paper, makeStyles} from "@material-ui/core"
import {useParams} from "react-router-dom";
import {fetchCatalog} from '../store/actions/catalog'
import {connect} from 'react-redux'


const useStyles = makeStyles({
  root: {
    gridColumn: '1/3',
    padding: '0.5rem',
    background: '#F0FFFF',
  },
})

const ExerciseFullView = ({fetchComponentCatalog, catalog}) => {

  const classes = useStyles();
  let { id } = useParams();
  let 
  category, 
  description,
  imgPath, 
  intensity,
  level, 
  name,
  recomendation,
  tasks,
  exercise;
  
  if (catalog.length !== 0) {
    let exercise = catalog.find(exercise => exercise.id === id)
    console.log(exercise);
    ({
      category, 
      description,
      imgPath, 
      intensity,
      level, 
      name,
      recomendation,
      tasks
    } = exercise)
  }
  

  useEffect(() => fetchComponentCatalog(), []);
  
  return (
    <Paper className={classes.root}>
      {
        catalog.length !== 0
        ? <div>
            <h3>{name}</h3>
            <div className={classes.header}>
              <h3>Уровень {level}</h3>
            </div>
            <div className={classes.details}>
              <img
                className={classes.image} 
                // src={'../img' + imgPath} 
                src={'../img/' + imgPath} 
                alt={name}
              />
              <div className={classes.textWrap}>
                <h4>Описание упражнения:</h4>
                <p className={classes.description}>{description}</p>
                <div className={classes.actions}>
                </div>
              </div>
            </div>          
          </div>
        : null
      }
    </Paper>
  );
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog.exercises
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComponentCatalog: () => dispatch(fetchCatalog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseFullView);