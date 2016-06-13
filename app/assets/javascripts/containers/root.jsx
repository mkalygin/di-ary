import { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DiaryApp from './diary-app';
import configureStore from '../store/config';
import { fetchNotes } from '../actions/note-list';

const store = configureStore();

export default class Root extends Component {
  static get propTypes() {
    return {
      notesUrl: PropTypes.string.isRequired
    };
  }

  componentWillMount() {
    const {notesUrl} = this.props;
    store.dispatch(fetchNotes(notesUrl));
  }

  render() {
    return (
      <Provider store={store}>
        <DiaryApp />
      </Provider>
    );
  }
}
