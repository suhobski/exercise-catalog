import {makeStyles, Container, Paper} from "@material-ui/core"
import ExercisePreview from "./components/ExercisePreview";
import Filter from "./components/Filter";
import Header from "./components/Header";
import {exercises} from './exercises'
import {Switch, Route} from "react-router-dom";
import About from './components/About'
import Favorites from './components/Favorites'
import ExerciseFullView from './components/ExerciseFullView'

const useStyles = makeStyles({
  page: {
    display: 'grid',
    gridTemplateColumns: '210px minmax(350px, auto)',
    gridTemplateRows: '50px auto',
    gap: '1rem',
    minHeight: '100vh',
    padding: '1rem',
    background: '#87CEEB',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  main: {
    padding: '0.5rem',
    background: '#F0FFFF',
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
            <h2>Каталог упражнений</h2>
            {
              exercises.map(exercise => (
                // exercise.category === 'Физическая подготовка' &&
                <ExercisePreview exercise={exercise} key={exercise.id}/>
              ))
            }
          </Paper>
        </Route>
        <Route path="/about" children={<About />}/>
        <Route path="/favorites" children={<Favorites />}/>
        <Route path="/exercise/:id" children={<ExerciseFullView />}/>
        <Route path="*" children={<Paper><h1>404</h1></Paper>} />
      </Switch>
    </Container>
  );
}

export default App;
