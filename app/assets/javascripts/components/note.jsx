import marked from 'marked';
import moment from 'moment';
import { Component, PropTypes } from 'react';

const dateFormat = 'MMMM Do YYYY, h:mm:ss a';

export default class Note extends Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired,
      onCloseClick: PropTypes.func.isRequired
    };
  }

  componentDidMount() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  render() {
    const {id, createdAt, text, onCloseClick} = this.props;

    return (
      <div className="note">
        <div className="note-header">
          <h6>{moment(createdAt).format(dateFormat)}</h6>
          <button onClick={onCloseClick.bind(this, id)}>&times;</button>
        </div>
        <hr />
        <div className="note-body">
          <p dangerouslySetInnerHTML={{__html: marked(text)}}></p>
        </div>
      </div>
    );
  }
}
