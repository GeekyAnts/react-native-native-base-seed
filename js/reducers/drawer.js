/**
 * Created by kylefang on 4/30/16.
 * @flow
 */

'use strict';

import type {Action} from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

export type State = {
  drawerState: string,
  drawerDisabled: boolean
}

const initialState = {
  drawerState: 'closed',
  drawerDisabled: true
};

export default function (state:State = initialState, action:Action): State {
  // console.log(action, "UGH(W&G(GD(&GD(G&");
  if (action.type === OPEN_DRAWER) {
    return {
      ...state,
      drawerState: 'opened'
    };
  }

  if (action.type === CLOSE_DRAWER) {
    return {
      ...state,
      drawerState: 'closed'
    };
  }

  // console.log(state, "---------77777777");
  return state;
}