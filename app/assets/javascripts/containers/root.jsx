import { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DiaryApp from './diary-app';
import configureStore from '../store/config';

const store = configureStore();

export default class Root extends Component {
  static get propTypes() {
    return {
      notesUrl: PropTypes.string.isRequired
    };
  }

  render() {
    return (
      <Provider store={store}>
        <DiaryApp {...this.props}/>
      </Provider>
    );
  }
}
