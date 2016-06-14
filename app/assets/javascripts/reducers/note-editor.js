import * as db from '../database';
import ActionType from '../actions/action-types';

export default function noteEditor(state = '', action) {
  switch (action.type) {
    case ActionType.RECEIVE_CURRENT_NOTE: {
      return db.load('currentNote', '');
    }
    case ActionType.EDIT_CURRENT_NOTE: {
      const newState = action.text;
      db.save('currentNote', newState);
      return newState;
    }
    case ActionType.CLEAR_CURRENT_NOTE: {
      const newState = '';
      db.save('currentNote', newState);
      return newState;
    }
    default: {
      return state;
    }
  }
}
