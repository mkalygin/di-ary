import random from 'random-js';
import moment from 'moment';
import ActionType from '../actions/action-types';

const engine = random.engines.nativeMath;
const uuid4 = () => random.uuid4(engine);

export default function note(state, action) {
  switch (action.type) {
    case ActionType.CREATE_NOTE:
      return {
        id: uuid4(),
        createdAt: +moment(),
        text: action.text,
        comments: []
      };
    default:
      return state;
  }
}
