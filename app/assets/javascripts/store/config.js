import { createStore } from 'redux';
import reducer from '../reducers/root';

export default function configureStore(initialState) {
  return createStore(reducer, initialState,
    window.devToolsExtension && window.devToolsExtension()
  );
}
