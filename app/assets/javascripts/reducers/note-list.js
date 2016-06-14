import _ from 'lodash';
import * as db from '../database';
import ActionType from '../actions/action-types';
import note from './note';

export default function noteList(state = [], action) {
  switch (action.type) {
    case ActionType.RECEIVE_NOTES: {
      return _.uniqBy([...action.notes, ...db.load('notes', [])], n => n.id);
    }
    case ActionType.CREATE_NOTE: {
      const newState = [...state, note(state, action)];
      db.save('notes', newState);
      return newState;
    }
    case ActionType.DELETE_NOTE: {
      const newState = state.filter(note => note.id !== action.id);
      db.save('notes', newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
