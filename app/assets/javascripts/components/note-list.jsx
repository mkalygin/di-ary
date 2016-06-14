import { Component, PropTypes } from 'react';
import HeaderLink from '../components/header-link';
import Header from '../components/header';
import Note from './note';

export default class NoteList extends Component {
  static get propTypes() {
    return {
      notesUrl: PropTypes.string.isRequired,
      notes: PropTypes.array.isRequired,
      fetchNotes: PropTypes.func.isRequired,
      deleteNote: PropTypes.func.isRequired
    };
  }

  get headerLinks() {
    return [
      <HeaderLink to="/edit">Write a note</HeaderLink>,
    ];
  }

  componentWillMount() {
    const {fetchNotes, notesUrl} = this.props;
    fetchNotes(notesUrl);
  }

  render() {
    const {deleteNote} = this.props;
    const notes = this.props.notes.map((note, i) => (
      <Note key={i} {...note} onCloseClick={deleteNote} />
    ));

    return (
      <div>
        <Header>
          {this.headerLinks}
        </Header>
        <div className="note-list">
          {notes}
        </div>
      </div>
    );
  }
}
