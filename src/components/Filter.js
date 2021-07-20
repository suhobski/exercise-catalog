import React from 'react'
import {makeStyles, Paper, FormControlLabel} from "@material-ui/core"
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {connect} from 'react-redux'
import {changeCategory, changeLevel, changeIntensity} from '../store/actions/filter'

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

const Filter = ({onChangeCategory, onChangeLevel, onChangeIntensity}) => {

  const classes = useStyles();

  return (
    <Paper className={classes.filter}>
      <div>
        <h3>Категория</h3>
        <FormControlLabel
          className={classes.option}
          control={
            <Checkbox
              onChange={(event) => onChangeCategory(event, 'Игра 1х1')}
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
              onChange={(event) => onChangeCategory(event, 'Контроль мяча')}
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
              onChange={(event) => onChangeCategory(event, 'Передачи мяча')}
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
              onChange={(event) => onChangeCategory(event, 'Физ. подготовка')}
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
              onChange={(event) => onChangeCategory(event, 'Футбол, мини-игры')}
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
              onChange={(event) => onChangeLevel(event, 1)}
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
              onChange={(event) => onChangeLevel(event, 2)}
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
              onChange={(event) => onChangeLevel(event, 3)}
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
              onChange={(event) => onChangeLevel(event, 4)}
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
            onChange={(event) => onChangeLevel(event, 5)}
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
              onChange={(event) => onChangeIntensity(event, 'Малая')}
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
              onChange={(event) => onChangeIntensity(event, 'Средняя')}
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
              onChange={(event) => onChangeIntensity(event, 'Высокая')}
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

function mapStateToProps(state) {
  return {
    category: state.filter.category,
    level: state.filter.level,
    intensity: state.filter.intensity,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCategory: (event, category) => dispatch(changeCategory(event, category)),
    onChangeLevel: (event, level) => dispatch(changeLevel(event, level)),
    onChangeIntensity: (event, intensity) => dispatch(changeIntensity(event, intensity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);