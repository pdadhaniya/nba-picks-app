import { TEXT_CHANGED } from '../actions/text'

const DEFAULT_STATE = 'NO TEXT'

const text = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return action.text;
    default:
      return state;
  }
}

export default text
