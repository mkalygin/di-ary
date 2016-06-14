import marked from 'marked';
import { Component, PropTypes } from 'react';
import HeaderLink from '../components/header-link';
import Header from '../components/header';

export default class NoteEditor extends Component {
  static get propTypes() {
    return {
      currentNote: PropTypes.string.isRequired
    };
  }

  get headerLinks() {
    const {currentNote, onNoteCreate} = this.props;

    return [
      <HeaderLink key="1" to="/" onClick={onNoteCreate.bind(this, currentNote)}>
        Publish
      </HeaderLink>,
      <HeaderLink key="2" to="/">
        Back
      </HeaderLink>
    ];
  }

  componentWillMount() {
    const {fetchCurrentNote} = this.props;
    fetchCurrentNote();
  }

  componentDidMount() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }

  render() {
    let textarea;
    const {currentNote, onTextInput} = this.props;
    const onChange = () => {
      onTextInput(textarea);
    };

    return (
      <div>
        <Header>
          {this.headerLinks}
        </Header>
        <div className="note-editor">
          <div className="editor">
            <h4>EDITOR</h4>
            <textarea ref={(ta) => textarea = ta}
                      placeholder="Write Markdown and LaTeX here..."
                      onChange={onChange} value={currentNote}>
            </textarea>
          </div>
          <div className="preview">
            <h4>PREVIEW</h4>
            <div className="output" dangerouslySetInnerHTML={{__html: marked(currentNote)}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
