import { FETCH_CATALOG_ERROR, FETCH_CATALOG_START, FETCH_CATALOG_SUCCESS } from "../actions/actionTypes"

const initialState = {
  exercises: [],
}

export default function catalogReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CATALOG_START:
      return {
        ...state,
      }
    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        exercises: action.catalog
      }
    case FETCH_CATALOG_ERROR:
      return {
        ...state,
      }
    default:
      return state
  }
}