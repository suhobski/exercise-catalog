import React, {useEffect} from 'react'
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

const Favorites = ({fetchComponentCatalog, favorites}) => {

  const classes = useStyles();

  useEffect(() => fetchComponentCatalog(), []);

  return (
    <Paper className={classes.root}>
      <h2>Избранные упражнения</h2>
      {
        favorites.length !== 0
        ? favorites.map(exercise => (
          <ExercisePreview exercise={exercise} key={exercise.id}/>
        ))
        : null
      }
    </Paper>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.exercises
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchComponentCatalog: () => dispatch(fetchCatalog())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);