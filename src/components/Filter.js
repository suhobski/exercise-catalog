import React from 'react'
import {makeStyles, Paper, FormControlLabel} from "@material-ui/core"
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles({
  filter: {
    position: 'sticky',
    padding: '0.5rem',
    background: '#F0FFFF',
  },
  option: {
    display: 'block',
    marginBottom: '-15px',
    '&:last-child': {
      marginBottom: 0,
    }
  },
  label: {
    fontSize: 14,
    color: 'red',
  }
})



const Filter = () => {

  const classes = useStyles();

  return (
    <Paper className={classes.filter}>
      <div>
        <h3>Категория</h3>
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Игра 1х1"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Контроль мяча"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Передачи мяча"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Физ. подготовка"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Футбол, мини-игры"
        />
      </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div>
        <h3>Уворень сложности</h3>
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="1 уровень"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
            className={classes.body1}
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="2 уровень"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
            className={classes.body1}
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="3 уровень"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
            className={classes.body1}
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="4 уровень"
        />
        <FormControlLabel
        className={classes.option}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedB"
            color="primary"
          />
        }
        label="5 уровень"
      />
      </div>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <div>
        <h3>Интенсивность</h3>
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Малая"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
            className={classes.body1}
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Средняя"
        />
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
            className={classes.body1}
              // checked={state.checkedB}
              // onChange={handleChange}
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedB"
              color="primary"
            />
          }
          label="Высокая"
        />
      </div>
    </Paper>
  );
}

export default Filter;