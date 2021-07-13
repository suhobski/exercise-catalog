// import ExercisesService from '../../ExercisesService'
import axios from 'axios'
import { FETCH_CATALOG_ERROR, FETCH_CATALOG_START, FETCH_CATALOG_SUCCESS } from './actionTypes';

export function fetchCatalog() {
  return async dispatch => {
    dispatch(fetchCatalogStart())
    try {
      const cachedData = window.localStorage.getItem('exercises');
    
      if(cachedData) {
        dispatch(fetchCatalogSuccess(JSON.parse(cachedData)['-MdsKrLvEFluhJjSGPQq']))
        return
      }

      const response = await axios.get('https://football-exercies-default-rtdb.europe-west1.firebasedatabase.app/exercises.json');

      console.log('response', response);

      const catalog = []
      const data = await response.data 
      Object.keys(data).forEach(key => {
        catalog.push(data[key])
      })

      window.localStorage.setItem('exercises', JSON.stringify(data));
      console.log();
      dispatch(fetchCatalogSuccess(data['-MdsKrLvEFluhJjSGPQq']))
      return
    } catch (e) {
      dispatch(fetchCatalogError(e))
    }
  }
}

export function fetchCatalogStart() {
  return {
    type: FETCH_CATALOG_START
  }
}

export function fetchCatalogSuccess(catalog) {
  return {
    type: FETCH_CATALOG_SUCCESS,
    catalog
  }
}

export function fetchCatalogError(e) {
  return {
    type: FETCH_CATALOG_ERROR,
    error: e,
  }
}