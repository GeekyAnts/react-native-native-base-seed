/**
 * # deviceReducer-test.js
 *
 * Test the deviceReducer's only function, like all reducers, where the
 * state and action are passed in.
 *
 * This will confirm that given a specific action with a type and
 * payload, that the state object is modified accordingly.
 *
 * *Note*: in this app,```state``` is an Immutable.js object
 *
 */
'use strict';

jest.autoMockOff();
/**
 * ## Imports
 *
 * These actions are sufficient to test the reducer as many of the
 * case statements are shared amongst the actions.
 */
const { 
  OPEN_DRAWER, 
  CLOSE_DRAWER } = require('../../actions/drawer');

/**
 * ## Class under test
 *
 * Note that since autoMockOff has been called, we will get the actual
 * formValidation and fieldValidation objects, so we're testing them
 * as well
 */
const drawer = require('../drawer').default;

/**
 * ## Tests
 *
 * deviceReducer
 */
describe('drawer', () => {
  describe('init', () => {
    let initialState = null;

    beforeEach(() => {
      const action = {
        type: 'dummy'
      };
      initialState = drawer(undefined, action);
    });

    it('sets drawerState to closed', () => {
      expect(initialState.drawerState).toEqual('closed');
    });
  });

  describe('OPEN_DRAWER', () => {
    it('modifies the drawerState and returns a new state', () => {
      let drawerState = 'opened';

      const action = {
        type: OPEN_DRAWER
      };

      let next = drawer(undefined, action);

      expect(next.drawerState).toEqual(drawerState);
    });
  });

  // describe('SET_VERSION', () => {
  //   it('modifies the version and returns a new state', () => {
  //     let version = '0.0.8';

  //     const action = {
  //       type: SET_VERSION,
  //       payload: version
  //     };

  //     let next = deviceReducer(undefined, action);
  //     expect(next.version).toEqual(version);
  //   });
  // });
});//deviceReducer

