import ActionType from '../actions/action-types';
import note from './note';

export default function noteList(state = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_NOTES:
      return [...action.notes];
    case ActionType.CREATE_NOTE:
      return [...state, note(state, action)];
    case ActionType.DELETE_NOTE:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
}
