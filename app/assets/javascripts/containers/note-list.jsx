import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoteList from '../components/note-list';
import * as NoteListActions from '../actions/note-list';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NoteListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
