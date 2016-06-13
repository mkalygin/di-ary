import { Component, PropTypes } from 'react';

export default class NoteList extends Component {
  static get propTypes() {
    return {
      notes: PropTypes.array.isRequired
    };
  }

  render() {
    const notes = this.props.notes.map((note, i) => (
      <ul key={i}>
        <li>{note.id}</li>
        <li>{note.createdAt}</li>
        <li>{note.text}</li>
        <li>{note.comments}</li>
      </ul>
    ));

    return (
      <div>
        {notes}
      </div>
    );
  }
}
