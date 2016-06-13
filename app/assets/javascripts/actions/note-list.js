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
