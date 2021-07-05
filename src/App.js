import {makeStyles, Container, Paper} from "@material-ui/core"
// import ExercisePreview from "./components/ExercisePreview";
// import Filter from "./components/Filter";
import Header from "./components/Header";
// import {exercises} from './exercises'
import {Switch, Route} from "react-router-dom";
import About from './components/About'
import Favorites from './components/Favorites'
import ExerciseFullView from './components/ExerciseFullView'
import Catalog from "./components/Catalog";

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '210px minmax(350px, auto)',
    gridTemplateRows: '50px auto',
    gap: '1rem',
    minHeight: '100vh',
    padding: '1rem',
    background: '#87CEEB',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
})

const App = () => {

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Header />
      <Switch>
        <Route path="/" exact children={<Catalog />} />
        <Route path="/about" children={<About />}/>
        <Route path="/favorites" children={<Favorites />}/>
        <Route path="/exercise/:id" children={<ExerciseFullView />}/>
        <Route path="*" children={<Paper><h1>404</h1></Paper>} />
      </Switch>
    </Container>
  );
}

export default App;
