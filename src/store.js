import { createStore } from 'redux';
import rootReducer from './reducers';

/*
 * get persistent state
 */
const localState = localStorage.getItem('storedState')
  ? JSON.parse(localStorage.getItem('storedState'))
  : {};

/**
 * Creates the store using the rootReducer (combination of all reducers)
 */
const store = createStore(
  rootReducer,
  localState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);

/*
 * save persistent state
 */
const saveLocalStorage = () => {
  const serializeState = JSON.stringify(store.getState());
  localStorage.setItem('storedState', serializeState);
};

store.subscribe(saveLocalStorage);

export default store;
