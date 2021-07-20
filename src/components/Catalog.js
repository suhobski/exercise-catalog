import React, {useEffect} from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import Filter from './Filter';
import ExercisePreview from './ExercisePreview';
import {connect} from 'react-redux'
import {fetchCatalog} from '../store/actions/catalog'

const useStyles = makeStyles({
  catalog: {
    padding: '0.5rem',
    background: '#F0FFFF',
  }
})

const Catalog = ({fetchComponentCatalog, catalog}) => {
  const classes = useStyles();

  useEffect(() => fetchComponentCatalog(), []);

  return(
    <>
      <Filter />
      <Paper className={classes.catalog}>
        <h2>Каталог упражнений</h2>
        {
          catalog.length !== 0
          ? catalog.map(exercise => (
              <ExercisePreview exercise={exercise} key={exercise.id}/>
            ))
          : null
        }
      </Paper>
    </>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
