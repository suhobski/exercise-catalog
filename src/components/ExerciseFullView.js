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
    textAlign: 'justify',
    '& p': {
      margin: '0 0 .5rem 0',
    },
    '& h4': {
      margin: '.5rem 0 0 0',
    },
    '& ul': {
      margin: '0 .5rem 0 0',
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h3': {
      margin: 0,
    }
  },
  image: {
    maxWidth: '400px',
    float: 'left',
    margin: '0 1rem 0 0',
  },
  'root h4': {
    margin: '.5rem 0',
    color: 'red',
  }, 
  taskItem: {
    listStyleType: 'none',
    textTransform: 'lowercase'
  },
  intensity: {
    fontWeight: 'normal',
  }
})

const ExerciseFullView = ({fetchComponentCatalog, catalog}) => {

  const classes = useStyles();
  let { id } = useParams();
  let 
  description,
  imgPath, 
  intensity,
  level, 
  name,
  recomendation,
  tasks;
  
  if (catalog.length !== 0) {
    let exercise = catalog.find(exercise => exercise.id === id);
    ({ 
      description,
      imgPath, 
      intensity,
      level, 
      name,
      recomendation,
      tasks
    } = exercise)
  }

  // let intensityDisplay
  // if (catalog.length !== 0) {
  //   intensityDisplay = intensity.map(item => {
  //     switch (item) {
  //       case 'small':
  //         return 'малая';
  //       case 'middle': 
  //         return 'средняя';
  //       case 'hight':
  //         return 'высокая'
  //       default:
  //         return ''
  //     }
  //   })
  // }
  
  useEffect(() => fetchComponentCatalog(), []);
  
  return (
    <Paper className={classes.root}>
      {
        catalog.length !== 0
        ? <div>
            <header className={classes.header}>
              <h3>{name}</h3>
              <h4 className={classes.text}>Уровень {level}</h4>
            </header>
            <div className={classes.details}>
              <img
                className={classes.image} 
                src={'../img/' + imgPath} 
                alt={name}
              />
              <div className={classes.textWrap}>
                <h4 className={classes.text}>Задачи:</h4>
                <ul>
                  {
                    tasks.map(task => <li key={task} className={classes.taskItem}>{task}</li>)
                  }
                </ul>
                <h4 className={classes.text}>Описание упражнения:</h4>
                <p className={classes.description}>{description}</p>
                <h4 className={classes.text}>Рекомендации:</h4>
                <p className={classes.text}>{recomendation}</p>
                <h4 className={classes.text}>
                  Интенсивность: <span className={classes.intensity}>{
                    intensity.join(', ')
                  }.</span>
                </h4>
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