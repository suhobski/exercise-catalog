import {makeStyles, Container, Paper} from "@material-ui/core"
import ExercisePreview from "./components/ExercisePreview";
import Filter from "./components/Filter";
import Header from "./components/Header";
import {exercises} from './exercises'
import {Switch, Route} from "react-router-dom";

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
      <Switch>
        <Route path="/" exact>
          <Filter />
          <Paper className={classes.main}>
            {
              exercises.map(exercise => (
                // exercise.category === 'Физическая подготовка' &&
                <ExercisePreview exercise={exercise} key={exercise.id}/>
              ))
            }
          </Paper>
        </Route>
        <Route path="/about" children={<Paper><h1>ABOUT</h1></Paper>}/>
        <Route path="/favorites" children={<Paper><h1>FAVORITES</h1></Paper>}/>
        <Route path="*" children={<Paper><h1>404</h1></Paper>} />
      </Switch>
    </Container>
  );
}

export default App;
