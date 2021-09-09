import { combineReducers } from 'redux';
import workNodeReducer from './workNodeReducer'; 

const reducers = combineReducers({
  workNodes: workNodeReducer,
});

export default reducers;