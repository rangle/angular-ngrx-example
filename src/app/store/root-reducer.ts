import {combineReducers} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {localStorageSync} from 'ngrx-store-localstorage';

import {platformsReducer, videoGameListingReducer} from '../video-games/store/reducers';

const reducers = {
  platforms: platformsReducer,
  router: routerReducer,
  videoGameListing: videoGameListingReducer
};

const localStorageState = {
  keys: ['platforms']
};

export function rootReducer(state: any, action: any) {
  return compose(
    storeLogger({
      collapsed: true
    }),
    localStorageSync(localStorageState),
    combineReducers
  )(reducers)(state, action);
}
