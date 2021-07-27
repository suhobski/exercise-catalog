import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes'

export function addToFavorites(exercise){
  return {
    type: ADD_TO_FAVORITES,
    exercise
  }
}

export function removeFromFavorites(id){
  return {
    type: REMOVE_FROM_FAVORITES,
    id,
  }
}