import axios from 'axios'

const fetchExercises = async () => {
  const cachedData = window.localStorage.getItem('exercises');
  
  if(cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await axios.get('https://football-exercies-default-rtdb.europe-west1.firebasedatabase.app/exercises.json');
  const data = await response.data;
  window.localStorage.setItem('exercises', JSON.stringify(data));
  return data;
}

export default {fetchExercises};