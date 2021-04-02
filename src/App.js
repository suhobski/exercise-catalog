import {makeStyles, Container, Paper} from "@material-ui/core"
import Filter from "./components/Filter";
import Header from "./components/Header";

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
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </Paper>
    </Container>
  );
}

export default App;
