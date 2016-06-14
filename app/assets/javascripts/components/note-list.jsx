import { Component, PropTypes } from 'react';
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
      <div className="note-list">
        {notes}
      </div>
    );
  }
}
