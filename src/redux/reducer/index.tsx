import { combineReducers } from 'redux';
import taskReducer from './task';

const appReducer = combineReducers({
  ...taskReducer
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
