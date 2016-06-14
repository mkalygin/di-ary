import { combineReducers } from 'redux';
import noteList from './note-list';
import noteEditor from './note-editor';

export default combineReducers({notes: noteList, currentNote: noteEditor});
