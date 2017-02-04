import {combineReducers} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {compose} from '@ngrx/core/compose';
import {storeLogger} from 'ngrx-store-logger';
import {localStorageSync} from 'ngrx-store-localstorage';

import platformsReducer from './platforms/platforms.reducer';
import videoGameListingReducer from './video-game-listing/video-game-listing.reducer';

const reducers = {
  platforms: platformsReducer,
  router: routerReducer,
  videoGameListing: videoGameListingReducer
};

const localStorageState = {
  platforms: []
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