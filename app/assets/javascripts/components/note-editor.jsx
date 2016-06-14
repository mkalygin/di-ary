import { Component, PropTypes } from 'react';
import HeaderLink from '../components/header-link';
import Header from '../components/header';

export default class NoteEditor extends Component {
  static get propTypes() {
    return {
    };
  }

  get headerLinks() {
    return [
      <HeaderLink to="/">Publish</HeaderLink>,
      <HeaderLink to="/">Back</HeaderLink>,
    ];
  }

  componentWillMount() {
  }

  render() {
    window.lol = this;
    return (
      <div>
        <Header>
          {this.headerLinks}
        </Header>
        <div className="note-editor">
          <div className="editor">
            <h4>EDITOR</h4>
            <textarea placeholder="Write Markdown and LaTeX here..."></textarea>
          </div>
          <div className="preview">
            <h4>PREVIEW</h4>
            <div className="output">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
        </div>
      </div>
    );
  }
}
