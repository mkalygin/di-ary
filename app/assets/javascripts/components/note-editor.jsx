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
          Hello!
        </div>
      </div>
    );
  }
}
