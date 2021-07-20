import { ON_CHANGE_CATEGORY, ON_CHANGE_INTENSITY, ON_CHANGE_LEVEL } from "../actions/actionTypes"

const initialState = {
  category: {
    'Игра 1х1': false,
    'Контроль мяча': false,
    'Передачи мяча': false,
    'Физ. подготовка': false,
    'Футбол, мини-игры': false,
  },
  level: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  },
  intensity: {
    'Малая': false,
    'Средняя': false,
    'Высокая': false,
  }
}

export default function filterReducer(state = initialState, action) {
  switch(action.type) {
    case ON_CHANGE_CATEGORY:
      return {
        ...state,
        category: {
          ...state.category,
          [action.category]: action.e.target.checked,
        }
      };
    case ON_CHANGE_LEVEL:
      return {
        ...state,
        level: {
          ...state.level,
          [action.level]: action.e.target.checked,
        }
      };
    case ON_CHANGE_INTENSITY:
      return {
        ...state,
        intensity: {
          ...state.intensity,
          [action.intensity]: action.e.target.checked,
        }
      };
    default:
      return state
  }
}