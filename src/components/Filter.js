import React from 'react'
import {makeStyles, Paper} from "@material-ui/core"

const useStyles = makeStyles({
  filter: {
    background: 'gainsboro'
  }
})

const Filter = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.filter}>
      <span>Filter</span>
    </Paper>
  );
}

export default Filter;