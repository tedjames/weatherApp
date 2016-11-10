import FETCH_WEATHER from '../actions/index';

export default function (state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // add a new array to state:
      //    return state.concat([action.payload.data]);
      // adds a new array to state with es6 to the top of the state object
      return [ action.payload.data, ...state ];
  }
  return state;
}

// never manipulate state, always make a new array and return that instead
