import {combineReducers} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {localStorageSync} from 'ngrx-store-localstorage';

import videoGameListingReducer from './videoGameListing/videoGameListing.reducer';

const reducers = {
  router: routerReducer,
  videoGameListing: videoGameListingReducer
};

const localStorageState = {
  authentication: []
};

export function rootReducer(state: any, action: any) {
  return compose(
    storeLogger({
      collapsed: true
    }),
    localStorageSync([localStorageState], true),
    combineReducers
  )(reducers)(state, action);
}