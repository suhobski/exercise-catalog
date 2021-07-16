import React, {useEffect, useState} from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import ExercisePreview from './ExercisePreview';
import {fetchCatalog} from '../store/actions/catalog'
import {connect} from 'react-redux'



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

const Favorites = ({fetchComponentCatalog, catalog}) => {

  const classes = useStyles();

  useEffect(() => fetchComponentCatalog(), [fetchComponentCatalog]);

  return (
    <Paper className={classes.root}>
      <h2>Избранные упражнения</h2>
      {
        catalog.length !== 0
        ? catalog.map(exercise => (
          <ExercisePreview exercise={exercise} key={exercise.id}/>
        ))
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);