import { combineReducers } from 'redux';

import MetarReducer from './reducer_metar';

const rootReducer = combineReducers({
  metar: MetarReducer
});

export default rootReducer;
