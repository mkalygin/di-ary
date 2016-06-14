import { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import Header from '../components/header';
import NoteList from './note-list';
import NoteEditor from './note-editor';
import { editCurrentNote, clearCurrentNote, createNote } from '../actions/note-actions';
import configureStore from '../store/config';

const store = configureStore();
const wrap = (Comp, props) => () => <Comp {...props}/>;

const NoMatch = () => (
  <div>
    <Header />
    <h1 className="text-center">Not Found</h1>;
  </div>
);

export default class Root extends Component {
  static get propTypes() {
    return {
      notesUrl: PropTypes.string.isRequired
    };
  }

  render() {
    const noteEditorProps = {
      ...this.props,
      onNoteCreate: function (text) {
        store.dispatch(createNote(text));
        store.dispatch(clearCurrentNote());
      },
      onTextInput: function (textarea) {
        store.dispatch(editCurrentNote(textarea.value));
      }
    };

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={wrap(NoteList, this.props)} />
          <Route path="/edit" component={wrap(NoteEditor, noteEditorProps)}/>
          <Route path="/*" component={NoMatch}/>
        </Router>
      </Provider>
    );
  }
}
