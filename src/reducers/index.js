import { combineReducers } from 'redux';
import globals from './globals';
import todos from './todos';

/**
 * Combines all reducers into a single reducer
 */
const rootReducer = combineReducers({ globals, todos });

export default rootReducer;
