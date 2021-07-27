import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/actionTypes"

const initialState = {
  exercises: [],
}

export default function favoritesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_FAVORITES:
      const newState = state.exercises
      newState.push(action.exercise)
      return {
        ...state,
        exercises: newState
      };
    case REMOVE_FROM_FAVORITES:
      const exercises = state.exercises.filter(exercise => exercise.id !== action.id)
      return {
        exercises,
      };
    default:
      return state
  }
}