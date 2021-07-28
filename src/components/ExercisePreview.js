import React, {useState} from 'react'
import {Card, makeStyles} from "@material-ui/core"
import { useHistory } from 'react-router'
import {connect} from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../store/actions/favorites'

const useStyles = makeStyles({
  root: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    background: '#F0FFFF',
    border: '1px solid #87CEEB',
    boxShadow: 'none',
    '&:last-child': {
      marginBottom: 0,
    },
    cursor: 'pointer',
    '&:hover' : {
      background: '#E1F0F0',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '.5rem',
  },
  exerciseName: {
    margin: 0,
    overflow: 'hidden',
  },
  exerciseLevel: {
    margin: 0,
    marginLeft: '2rem',
    whiteSpace: 'nowrap',
  },
  details: {
    position: 'relative',
    display: 'grid',
    gap: '0.5rem',
    display: 'grid',
    // gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr)',
    gridTemplateColumns: '200px auto',
    overflow: 'auto',
  },
  favorites: {
    display: 'block',
    position: 'absolute',
    left: 3,
    top: 3,
    fontSize: 25,
    color: 'yellow',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    transition: 'all .2s ease-out',
    '&:hover': {
      transform: 'scale(1.2)', 
    },
    '&:active': {
      color: '#57ACCF', 
    }
  },
  textWrap: {
    textAlign: 'justify',
    '& h4': {
      marginBottom: '.5rem',
    }
  },
  image: {
    marginTop: '0.25rem',
    maxWidth: '100%',
  },
  description: {
    marginTop: '-0.25rem',
    maxHeight: 108,
    fontSize: 14,
    overflow: 'hidden',
  },
})

const ExercisePreview = ({exercise, favorites, addToFavorites, removeFromFavorites}) => {

  const classes = useStyles();
  let history = useHistory();
  const {level, imgPath, name, description, id} = exercise;
  const [isFavorites, setIsFavorites] = useState(!!favorites.find(ex => (ex.id === id)))

  function remove() {
    removeFromFavorites(id)
    setIsFavorites(!isFavorites)
  }

  function add() {
    addToFavorites(exercise)
    setIsFavorites(!isFavorites)
  }

  function handleFullView(e) {
    if(e.target.nodeName !== "BUTTON") {
      history.push(`/exercise/${id}`)
    }
  }

  let button
  if (isFavorites) {
    button = <button 
        className={classes.favorites} 
        title={'Удалить из избранного'}
        onClick={remove}
        >&#9733;
      </button>
  } else {
    button = <button 
        className={classes.favorites} 
        title={'Добавить в избранное'}
        onClick={add}
        >&#9734;
      </button>
  }
  
  return (
    <Card className={classes.root} onClick={(e) => handleFullView(e)}> 
      <div className={classes.header}>
        <h3 className={classes.exerciseName}>{name}</h3>
        <h3 className={classes.exerciseLevel}>Уровень {level}</h3>
      </div>
      <div className={classes.details}>
        {button}
        <img
          className={classes.image} 
          src={'./img/' + imgPath} 
          alt={name}
        />
        <div className={classes.textWrap}>
          <h4>Описание упражнения:</h4>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.exercises
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToFavorites: exercise => dispatch(addToFavorites(exercise)),
    removeFromFavorites: id => dispatch(removeFromFavorites(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePreview);