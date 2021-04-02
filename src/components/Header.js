import React from 'react'
import {makeStyles, Paper} from "@material-ui/core"

const useStyles = makeStyles({
  header: {
    padding: '0.5rem',
    background: 'Cornsilk',
    gridColumn: '1/3',
  }
})

const Header = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <span>Header</span>
    </Paper>
  );
}

export default Header;