import { combineReducers } from 'redux';
import todos from './todos';

/**
 * Combines all reducers into a single reducer
 */
const rootReducer = combineReducers({ todos });

export default rootReducer;
