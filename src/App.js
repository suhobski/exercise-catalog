import {makeStyles, Container, Paper} from "@material-ui/core"
import ExercisePreview from "./components/ExercisePreview";
import Filter from "./components/Filter";
import Header from "./components/Header";
import {exercises} from './exercises'

const useStyles = makeStyles({
  page: {
    display: 'grid',
    gridTemplateColumns: '210px minmax(350px, auto)',
    gridTemplateRows: '50px auto',
    gap: '1rem',
    minHeight: '100vh',
    padding: '1rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  main: {
    padding: '0.5rem',
    background: 'grey',
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.page}>
      <Header />   
      <Filter />
      <Paper className={classes.main}>
        {
          exercises.map(exercise => (
            <ExercisePreview exercise={exercise} key={exercise.id}/>
          ))
        }
      </Paper>
    </Container>
  );
}

export default App;
