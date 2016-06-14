import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoteEditor from '../components/note-editor';
import * as NoteActions from '../actions/note-actions';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NoteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor);
