import { combineReducers } from 'redux';
import noteList from './note-list';

export default combineReducers({notes: noteList});
