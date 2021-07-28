import React, {useEffect} from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import Filter from './Filter';
import ExercisePreview from './ExercisePreview';
import {connect} from 'react-redux'
import {fetchCatalog} from '../store/actions/catalog'
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
  },
  catalog: {
    padding: '0.5rem',
    background: '#F0FFFF',
  }
})

const Catalog = ({fetchComponentCatalog, catalog, filter}) => {
  const classes = useStyles();
  const filteredExercises = filterExercises(catalog, filter);
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
  
  useEffect(() => fetchComponentCatalog(), []);

  return(
    <div className={classes.root}>
      {
        !isTablet && <Filter /> 
      }
      <Paper className={classes.catalog}>
        {
          filteredExercises.length !== 0
          ? filteredExercises.map(exercise => (
              <ExercisePreview exercise={exercise} key={exercise.id}/>
            ))
          : null
        }
      </Paper>
    </div>
  )
}

function filterExercises(catalog, filter){
  if (isCheckedFilter(filter)) {
    return catalog
      .filter(exercise => {
        if(isCheckedGroup(filter.category)){
          return filter.category[exercise.category]
        }
        return true;
      })
      .filter(exercise => {
        if(isCheckedGroup(filter.level)){
          return filter.level[exercise.level]
        }
        return true;
      })
      .filter(exercise => {
        if(isCheckedGroup(filter.intensity)){
          return filter.intensity[exercise.intensity[0]] || filter.intensity[exercise.intensity[1]]
        }
        return true;
      })
  } else {
    return [...catalog]
  }
};

function isCheckedFilter(filter) {
  let result = false
  Object.values(filter).forEach(group => {
    Object.values(group).forEach(item => {
      if (item) {
        result = true
      }
    })
  })
  return result;
}

function isCheckedGroup(group) {
  let result = false
  
  Object.values(group).forEach(item => {
    if (item) {
      result = true
    }
  })

  return result
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog.exercises,
    filter: state.filter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComponentCatalog: () => dispatch(fetchCatalog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
