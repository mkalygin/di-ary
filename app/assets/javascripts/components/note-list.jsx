import { Component, PropTypes } from 'react';
import Note from './note';

export default class NoteList extends Component {
  static get propTypes() {
    return {
      notes: PropTypes.array.isRequired
    };
  }

  render() {
    const notes = this.props.notes.map((note, i) => (
      <Note key={i} {...note} />
    ));

    return (
      <div className="note-list">
        {notes}
      </div>
    );
  }
}
