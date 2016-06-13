import marked from 'marked';
import { Component, PropTypes } from 'react';

export default class Note extends Component {
  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired
    };
  }

  render() {
    const {createdAt, text} = this.props;

    return (
      <a className="note" href="#">
        <p dangerouslySetInnerHTML={{__html: marked(text)}}></p>
      </a>
    );
  }
}
