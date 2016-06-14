import _ from 'lodash';
import * as db from '../database';
import ActionType from '../actions/action-types';
import note from './note';

export default function noteList(state = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_NOTES: {
      const newState = [...action.notes, ...db.loadJson('notes', '[]')];
      return _.uniqBy(newState, n => n.id).sort((a, b) => b.createdAt - a.createdAt);
    }
    case ActionType.CREATE_NOTE: {
      const newState = [note(state, action), ...state];
      db.saveJson('notes', newState);
      return newState;
    }
    case ActionType.DELETE_NOTE: {
      const newState = state.filter(note => note.id !== action.id);
      db.saveJson('notes', newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
