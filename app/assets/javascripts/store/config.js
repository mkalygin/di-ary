import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import root from '../reducers/root';

const createAppStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState){
  const store = createAppStore(root, initialState);
  return store;
}
