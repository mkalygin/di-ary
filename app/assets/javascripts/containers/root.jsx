import { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CounterApp from './counter-app';
import configureStore from '../store/config';
import {setCounter} from '../actions/counter';

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter));
  }
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
