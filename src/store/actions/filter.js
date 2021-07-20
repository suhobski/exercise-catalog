import { ON_CHANGE_CATEGORY, ON_CHANGE_INTENSITY, ON_CHANGE_LEVEL } from './actionTypes'

export function changeCategory(e, category){
  return {
    type: ON_CHANGE_CATEGORY,
    e,
    category,
  }
}

export function changeLevel(e, level){
  return {
    type: ON_CHANGE_LEVEL,
    e,
    level,
  }
}

export function changeIntensity(e, intensity){
  return {
    type: ON_CHANGE_INTENSITY,
    e,
    intensity,
  }
}