import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  page: {
    background: "red",
    minHeight: "100vh",
  }
})

const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.page}>
      <nav className={classes.filter}>
        <span>Filter</span>
      </nav>
      <main className="main">
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
