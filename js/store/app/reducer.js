import { OPEN_DRAWER, CLOSE_DRAWER } from './actions';

const initialState = {
  drawerState: 'closed',
};

export default function (state = initialState, action) {
  if (action.type === OPEN_DRAWER) {
    return {
      ...state,
      drawerState: 'opened',
    };
  }

  if (action.type === CLOSE_DRAWER) {
    return {
      ...state,
      drawerState: 'closed',
    };
  }

  return state;
}
