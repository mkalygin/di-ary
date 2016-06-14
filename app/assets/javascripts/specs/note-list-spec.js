import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { LocalStorage } from 'node-localstorage';
import random from 'random-js';
import moment from 'moment';
import noteList from '../reducers/note-list';
import ActionType from '../actions/action-types';

global.localStorage = new LocalStorage('./local_storage');
const uuid4Regex = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/;
const engine = random.engines.nativeMath;
const uuid4 = () => random.uuid4(engine);

export function addNoteTest() {
  const startedAt = +moment();
  const stateBefore = [];
  const action = {
    type: ActionType.CREATE_NOTE,
    text: 'test'
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = noteList(stateBefore, action);
  expect(stateAfter).toBeA('array');
  expect(stateAfter.length).toEqual(1);

  const [{ id, createdAt, text, comments }] = stateAfter;
  expect(id).toMatch(uuid4Regex);
  expect(+createdAt).toBeGreaterThan(startedAt);
  expect(text).toEqual(action.text);
  expect(comments).toEqual([]);
}

export function deleteNoteTest() {
  const firstNote = {
    id: uuid4(),
    createdAt: moment().toDate(),
    text: 'first',
    comments: []
  };
  const secondNote = {
    id: uuid4(),
    createdAt: moment().toDate(),
    text: 'second',
    comments: []
  };
  const stateBefore = [firstNote, secondNote];
  const stateAfter = [secondNote];
  const action = {
    type: ActionType.DELETE_NOTE,
    id: firstNote.id
  };

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(noteList(stateBefore, action)).toEqual(stateAfter);
}
