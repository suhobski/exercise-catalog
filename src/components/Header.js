import React from 'react'
import {makeStyles, Paper} from "@material-ui/core"
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  header: {
    display: 'grid',
    alignContent: 'center',
    gridColumn: '1/3',
    marginBottom: '.5rem',
    padding: '1rem .5rem',
    borderRadius: '0 0 4px 4px',
    background: '#F0FFFF',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  list: {
    margin: 0,
    paddingLeft: 0,
  },
  'list-item': {
    display: 'inline-block',
    marginRight: '1rem',
    listStyleType: 'none',
  },
})

const Header = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li className={classes['list-item']}>
              <Link className={classes.link} to="/">Каталог</Link>
            </li>
            <li className={classes['list-item']}>
              <Link className={classes.link} to="/favorites">Избранное</Link>
            </li>
            <li className={classes['list-item']}>
              <Link className={classes.link} to="/about">О проекте</Link>
            </li>
          </ul>
        </nav>
    </Paper>
  );
}

export default Header;