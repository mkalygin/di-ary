import axios from 'axios';
import ActionType from './action-types';

function requestNotes() {
  return {
    type: ActionType.REQUEST_NOTES
  };
}

function receiveNotes(notes) {
  return {
    type: ActionType.RECEIVE_NOTES,
    notes
  };
}

export function fetchNotes(url) {
  return (dispatch) => {
    dispatch(requestNotes());

    return axios.get(url)
      .then((response) => {
        dispatch(receiveNotes(response.data));
      })
      .catch((response) => {
        console.error(response);
      });
  };
}

export function createNote(text) {
  return {
    type: ActionType.CREATE_NOTE,
    text
  };
}

export function deleteNote(id) {
  return {
    type: ActionType.DELETE_NOTE,
    id
  };
}

export function editCurrentNote(text) {
  return {
    type: ActionType.EDIT_CURRENT_NOTE,
    text
  };
}

export function requestCurrentNote() {
  return {
    type: ActionType.REQUEST_CURRENT_NOTE
  };
}

export function receiveCurrentNote(currentNote) {
  return {
    type: ActionType.RECEIVE_CURRENT_NOTE,
    currentNote
  };
}

export function clearCurrentNote() {
  return {
    type: ActionType.CLEAR_CURRENT_NOTE
  };
}

export function fetchCurrentNote(url) {
  return (dispatch) => {
    dispatch(requestCurrentNote());

    return Promise.resolve({})
      .then((response) => {
        dispatch(receiveCurrentNote(response.data));
      })
      .catch((response) => {
        console.error(response);
      });
  };
}
